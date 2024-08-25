document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.container').classList.add('visible');
});

document.getElementById('projectile-form').addEventListener('submit', function (e) {
    console.log("hello")
    e.preventDefault();

    const type = document.getElementById('simulation-type').value;
    let url = '/simulate/' + type;
    let body = {};
        body = {
            velocity: document.getElementById('velocity').value,
            angle: document.getElementById('angle').value,
            mass: document.getElementById('mass').value,
        };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(data => {
        plotData(data);
    })
    .catch(error => console.error('Error:', error));
});


document.getElementById('pendulum-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const type = document.getElementById('simulation-type').value;
    let url = '/simulate/' + type;
    let body = {};
        body = {
            length: document.getElementById('length').value,
            angle: document.getElementById('pendulum-angle').value,
            mass: document.getElementById('pendulum-mass').value,
        };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(data => {
        plotData(data);
    })
    .catch(error => console.error('Error:', error));
});

function plotData(data) {
    const existingChart = Chart.getChart("simulationChart");
    if (existingChart) {
    existingChart.destroy();
}
    const ctx = document.getElementById('simulationChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.time,
            datasets: [
                {
                    label: 'X Position (m)',
                    data: data.x_position,
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false,
                },
                {
                    label: 'Y Position (m)',
                    data: data.y_position,
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time (s)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Position (m)'
                    }
                }
            }
        }
    });
    
}
