document.getElementById('simulation-type').addEventListener('change', function () {
    const type = this.value;
    const pendulum = document.getElementById('pendulum-form');

    const projectile = document.getElementById('projectile-form');
    if (type === 'pendulum') {
        pendulum.style.display = "block";
        projectile.style.display = "none";

    } else {
        pendulum.style.display = "none";
        projectile.style.display = "block";
    }
});

