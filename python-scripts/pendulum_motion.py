import math
import numpy as np
import sys
import json

def simulate_pendulum(length, angle, mass, time_step=0.01, duration=10):
    g = 9.81  # Acceleration due to gravity (m/s^2)
    omega = math.sqrt(g / length)
    time = np.arange(0, duration, time_step)

    theta = angle * np.cos(omega * time)  # Simple harmonic motion approximation
    x = length * np.sin(np.radians(theta))
    y = -length * np.cos(np.radians(theta))

    return {
        "time": time.tolist(),
        "x_position": x.tolist(),
        "y_position": y.tolist()
    }

if __name__ == "__main__":
    # Safeguard to ensure valid input
    try:
        length = float(sys.argv[1])
        angle = float(sys.argv[2])
        mass = float(sys.argv[3])
    except ValueError:
        print(json.dumps({"error": "Invalid input parameters"}))
        sys.exit(1)

    # Run the simulation
    result = simulate_pendulum(length, angle, mass)
    print(json.dumps(result))
