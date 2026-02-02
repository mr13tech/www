import turtle
import math
import time

# ============================================================================
# CONFIGURATION
# ============================================================================
SCREEN_WIDTH = 1000
SCREEN_HEIGHT = 1000
BACKGROUND_COLOR = "#000000"

TRIANGLE_SIDE_LENGTH = 420
PEN_WIDTH = 1
PEN_COLOR = "#ffffff"

NUM_LINES = 15  # Number of animation steps/frames
FRAME_DELAY = 0.5  # Delay between frames in seconds

# ============================================================================
# SETUP
# ============================================================================

# Setup screen with manual frame updates
screen = turtle.Screen()
screen.setup(SCREEN_WIDTH, SCREEN_HEIGHT)
screen.bgcolor(BACKGROUND_COLOR)
screen.tracer(0)  # Disable auto-updates for manual animation control

# Setup turtle pen
pen = turtle.Turtle()
pen.hideturtle()
pen.width(PEN_WIDTH)
pen.color(PEN_COLOR)

# Calculate equilateral triangle vertices centered at origin
# Height formula for equilateral triangle: side * sqrt(3) / 2
height = TRIANGLE_SIDE_LENGTH * math.sqrt(3) / 2
half_side = TRIANGLE_SIDE_LENGTH / 2
offset = height / 3  # Offset to shift triangles so they touch at y=0

vertices_top = [
    (0, height * 2/3 + offset),           
    (half_side, -height/3 + offset),       
    (-half_side, -height/3 + offset),
    ]

vertices_bot = [
    (0, -height * 2/3 - offset),        
    (half_side, height/3 - offset),       
    (-half_side, height/3 - offset)     
]

# ============================================================================
# ANIMATION LOOP
# ============================================================================

def draw(vertices):
    for step in range(NUM_LINES):
        ratio = step / NUM_LINES if NUM_LINES > 1 else 0

        # Draw 3 lines per frame: from each vertex to opposite wall
        for idx in range(3):
            origin_x, origin_y = vertices[idx]

            # Calculate target point: interpolate along opposite wall
            # Wall spans from next vertex to previous vertex (clockwise)
            wall_start = vertices[(idx + 1) % 3]
            wall_end = vertices[(idx + 2) % 3]
            target_x = wall_start[0] + (wall_end[0] - wall_start[0]) * ratio
            target_y = wall_start[1] + (wall_end[1] - wall_start[1]) * ratio

            # Draw line from origin vertex to interpolated target
            pen.up()
            pen.goto(origin_x, origin_y)
            pen.down()
            pen.goto(target_x, target_y)

        screen.update()
        time.sleep(FRAME_DELAY)

draw(vertices_top)
draw(vertices_bot)

screen.mainloop()  # Keep window open
