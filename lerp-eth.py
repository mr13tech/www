import turtle
import time

# ============================================================================
# CONFIGURATION
# ============================================================================
SCREEN_WIDTH = 1000
SCREEN_HEIGHT = 1000
BACKGROUND_COLOR = "#000000"

PEN_WIDTH = 1
PEN_COLOR = "#ffffff"

# Animation settings
NUM_LINES = 7   # Number of lines per web/frame
FRAME_DELAY = 0.2 # Delay between frames

# ============================================================================
# SETUP
# ============================================================================

screen = turtle.Screen()
screen.setup(SCREEN_WIDTH, SCREEN_HEIGHT)
screen.bgcolor(BACKGROUND_COLOR)
screen.tracer(0)  # Disable auto-updates for manual animation control

pen = turtle.Turtle()
pen.hideturtle()
pen.width(PEN_WIDTH)
pen.color(PEN_COLOR)

# ============================================================================
# GEOMETRY
# ============================================================================

# Ethereum Logo Coordinates - Accurate Octahedron Structure
# Based on actual target image measurements

# Dimensions
W = 380  # Total width at widest point
TOTAL_H = 620

# Y-axis coordinates (corrected proportions matching target)
Y_TOP_APEX = 310        # Top point of logo
Y_WIDEST = 40           # ~44% from top
Y_FRONT = 60            # Only ~20px above widest
Y_CHEVRON_TIP = -50     # ~15% below widest
Y_GAP = 20              # Tight gap between sections
Y_BOT_TOP = Y_CHEVRON_TIP - Y_GAP  # -70
Y_BOT_APEX = -310       # Bottom point of logo

# --- TOP SECTION (Upper Octahedron Half) ---
V_TOP_APEX = (0, Y_TOP_APEX)               # (0, 310)
V_LEFT     = (-W/2, Y_WIDEST)              # (-190, 40)
V_RIGHT    = (W/2, Y_WIDEST)               # (190, 40)
V_FRONT    = (0, Y_FRONT + 50)                  # (0, 60) - slight protrusion above widest
V_BACK     = (0, Y_CHEVRON_TIP)            # (0, -50) - chevron tip

# --- BOTTOM SECTION (Lower Inverted Chevron) ---
# Side points higher, center lower → V-shape top edge (chevron pointing down)
V_BOT_TOP_L = (-W/2, Y_BOT_TOP + 90)       # (-190, -20) - sides up high
V_BOT_TOP_R = (W/2, Y_BOT_TOP + 90)        # (190, -20) - sides up high
V_BOT_FRONT = (0, Y_BOT_TOP)               # (0, -70) - center is the low point of the V
V_BOT_APEX = (0, Y_BOT_APEX)               # (0, -310)

# Faces defined as lists of 3 vertices (Triangles)
# TOP SECTION: 4 faces (3D diamond)
# BOTTOM SECTION: 2 faces (2D chevron pointing down)
faces = [
    # TOP SECTION (4 faces) - 3D diamond from top apex
    # Front-left face - apex to left to front
    [V_TOP_APEX, V_LEFT, V_FRONT],
    # Front-right face - apex to front to right
    [V_TOP_APEX, V_FRONT, V_RIGHT],
    # Back-left face - back/chevron to left to front
    [V_BACK, V_LEFT, V_FRONT],
    # Back-right face - back/chevron to front to right
    [V_BACK, V_FRONT, V_RIGHT],

    # BOTTOM SECTION (2 faces) - Simple downward chevron
    # Left face - apex to left to front
    [V_BOT_APEX, V_BOT_TOP_L, V_BOT_FRONT],
    # Right face - apex to front to right
    [V_BOT_APEX, V_BOT_FRONT, V_BOT_TOP_R]
]

# ============================================================================
# ANIMATION LOOP
# ============================================================================

def draw_shape(faces_list):
    """
    Draws the geometric web animation for all provided faces simultaneously.
    """
    for step in range(NUM_LINES):
        ratio = step / NUM_LINES if NUM_LINES > 1 else 0

        # Iterate through every face in the shape
        for vertices in faces_list:
            # Draw 3 lines per face (from each vertex to opposite wall)
            for idx in range(3):
                origin_x, origin_y = vertices[idx]

                # Calculate target point on the opposite wall
                # Wall is the segment connecting the next two vertices
                wall_start = vertices[(idx + 1) % 3]
                wall_end = vertices[(idx + 2) % 3]
                
                target_x = wall_start[0] + (wall_end[0] - wall_start[0]) * ratio
                target_y = wall_start[1] + (wall_end[1] - wall_start[1]) * ratio

                # Draw the line
                pen.up()
                pen.goto(origin_x, origin_y)
                pen.down()
                pen.goto(target_x, target_y)

        screen.update()
        time.sleep(FRAME_DELAY)

# Execute animation
draw_shape(faces)

screen.mainloop()
