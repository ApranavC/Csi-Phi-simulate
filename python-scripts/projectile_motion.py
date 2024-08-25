import math
import numpy as np
import sys
import json

def simulate_projectile(velocity, angle, mass, time_step=0.01, duration=10):
    angle_rad = math.radians(angle)
    g = 9.81  # Acceleration due to gravity (m/s^2)

    # Time array
    t = np.arange(0, duration, time_step)

    # Equations of motion
    x = velocity * t * np.cos(angle_rad)
    y = velocity * t * np.sin(angle_rad) - 0.5 * g * t**2

    return {
        "time": t.tolist(),
        "x_position": x.tolist(),
        "y_position": y.tolist()
    }

if __name__ == "__main__":
    # Get arguments from the command line
    velocity = float(sys.argv[1])
    angle = float(sys.argv[2])
    mass = float(sys.argv[3])

    # Run the simulation
    result = simulate_projectile(velocity, angle, mass)

    # Print the result as a JSON string
    print(json.dumps(result))
