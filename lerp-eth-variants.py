import turtle
import time
import math

# ============================================================================
# CONFIGURATION
# ============================================================================
SCREEN_WIDTH = 1000
SCREEN_HEIGHT = 1000
BACKGROUND_COLOR = "#000000"

PEN_WIDTH = 1
PEN_COLOR = "#ffffff"

NUM_LINES = 12
FRAME_DELAY = 0.15

# ============================================================================
# SETUP
# ============================================================================

screen = turtle.Screen()
screen.setup(SCREEN_WIDTH, SCREEN_HEIGHT)
screen.bgcolor(BACKGROUND_COLOR)
screen.tracer(0)

pen = turtle.Turtle()
pen.hideturtle()
pen.width(PEN_WIDTH)
pen.color(PEN_COLOR)

# ============================================================================
# GEOMETRY
# ============================================================================

W = 380
Y_TOP_APEX = 310
Y_WIDEST = 40
Y_FRONT = 60
Y_CHEVRON_TIP = -50
Y_GAP = 20
Y_BOT_TOP = Y_CHEVRON_TIP - Y_GAP
Y_BOT_APEX = -310

V_TOP_APEX  = (0, Y_TOP_APEX)
V_LEFT      = (-W/2, Y_WIDEST)
V_RIGHT     = (W/2, Y_WIDEST)
V_FRONT     = (0, Y_FRONT + 50)
V_BACK      = (0, Y_CHEVRON_TIP)

V_BOT_TOP_L = (-W/2, Y_BOT_TOP + 90)
V_BOT_TOP_R = (W/2, Y_BOT_TOP + 90)
V_BOT_FRONT = (0, Y_BOT_TOP)
V_BOT_APEX  = (0, Y_BOT_APEX)

top_faces = [
    [V_TOP_APEX, V_LEFT, V_FRONT],
    [V_TOP_APEX, V_FRONT, V_RIGHT],
    [V_BACK, V_LEFT, V_FRONT],
    [V_BACK, V_FRONT, V_RIGHT],
]
bot_faces = [
    [V_BOT_APEX, V_BOT_TOP_L, V_BOT_FRONT],
    [V_BOT_APEX, V_BOT_FRONT, V_BOT_TOP_R],
]
faces = top_faces + bot_faces

# Collect unique edges
edges = []
seen_edges = set()
for tri in faces:
    for i in range(3):
        a, b = tri[i], tri[(i+1) % 3]
        key = (min(a, b), max(a, b))
        if key not in seen_edges:
            seen_edges.add(key)
            edges.append((a, b))


def lerp(a, b, t):
    return (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)


def draw_line(p1, p2):
    pen.up(); pen.goto(*p1); pen.down(); pen.goto(*p2)


def ease_in_out(t):
    return t * t * (3 - 2 * t)


def ease_in(t):
    return t * t


def ease_out(t):
    return 1 - (1 - t) * (1 - t)


# ============================================================================
# 1: Classic fan — all 3 vertices fan to opposite wall
# ============================================================================
def variant_1():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            for idx in range(3):
                draw_line(tri[idx], lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 2: Concentric triangles — nested outlines shrinking inward
# ============================================================================
def variant_2():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            cx = sum(v[0] for v in tri) / 3
            cy = sum(v[1] for v in tri) / 3
            s = [lerp(v, (cx, cy), t) for v in tri]
            pen.up(); pen.goto(*s[0]); pen.down()
            pen.goto(*s[1]); pen.goto(*s[2]); pen.goto(*s[0])
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 3: Apex-only fan — clean single-vertex fan from each face's first vertex
# ============================================================================
def variant_3():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            draw_line(tri[0], lerp(tri[1], tri[2], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 4: Horizontal slices — parallel cuts across each face
# ============================================================================
def variant_4():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            draw_line(lerp(tri[0], tri[1], t), lerp(tri[0], tri[2], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 5: Starburst — all lines radiate from global center
# ============================================================================
def variant_5():
    center = (0, 0)
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            for idx in range(3):
                draw_line(center, lerp(tri[idx], tri[(idx+1) % 3], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 6: String art curves — parabolic envelope on each edge pair
# ============================================================================
def variant_6():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            for idx in range(3):
                p1 = lerp(tri[idx], tri[(idx+1) % 3], t)
                p2 = lerp(tri[(idx+2) % 3], tri[(idx+1) % 3], t)
                draw_line(p1, p2)
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 7: Cross-hatch — two opposing fans per face
# ============================================================================
def variant_7():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            draw_line(tri[0], lerp(tri[1], tri[2], t))
            draw_line(tri[1], lerp(tri[0], tri[2], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 8: Spiral nest — concentric triangles that rotate as they shrink
# ============================================================================
def variant_8():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            cx = sum(v[0] for v in tri) / 3
            cy = sum(v[1] for v in tri) / 3
            c = (cx, cy)
            # Shrink toward center and rotate vertex assignment
            s = [lerp(tri[(i + step) % 3], c, t) for i in range(3)]
            pen.up(); pen.goto(*s[0]); pen.down()
            pen.goto(*s[1]); pen.goto(*s[2]); pen.goto(*s[0])
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 9: Woven — left faces sweep forward, right faces sweep backward
# ============================================================================
def variant_9():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for fi, tri in enumerate(faces):
            for idx in range(3):
                if fi % 2 == 0:
                    draw_line(tri[idx], lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], t))
                else:
                    draw_line(tri[idx], lerp(tri[(idx+2) % 3], tri[(idx+1) % 3], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 10: Diamond lattice — edge-to-edge connections forming inner diamonds
# ============================================================================
def variant_10():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            # Connect point on each edge to point on next edge (same t)
            pts = [lerp(tri[i], tri[(i+1) % 3], t) for i in range(3)]
            pen.up(); pen.goto(*pts[0]); pen.down()
            pen.goto(*pts[1]); pen.goto(*pts[2]); pen.goto(*pts[0])
            # Also connect with complementary t
            pts2 = [lerp(tri[i], tri[(i+1) % 3], 1 - t) for i in range(3)]
            pen.up(); pen.goto(*pts2[0]); pen.down()
            pen.goto(*pts2[1]); pen.goto(*pts2[2]); pen.goto(*pts2[0])
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 11: Top fan + bottom slices — different styles per section
# ============================================================================
def variant_11():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in top_faces:
            draw_line(tri[0], lerp(tri[1], tri[2], t))
        for tri in bot_faces:
            draw_line(lerp(tri[0], tri[1], t), lerp(tri[0], tri[2], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 12: Inner triangles — connecting edge midpoints at varying t
# ============================================================================
def variant_12():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            pts = [lerp(tri[i], tri[(i+1) % 3], t) for i in range(3)]
            pen.up(); pen.goto(*pts[0]); pen.down()
            pen.goto(*pts[1]); pen.goto(*pts[2]); pen.goto(*pts[0])
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 13: Triple fan — all 3 vertices fan simultaneously with offset phases
# ============================================================================
def variant_13():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            for idx in range(3):
                offset_t = (t + idx / 3.0) % 1.0
                draw_line(tri[idx], lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], offset_t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 14: Pinwheel — each face fans from a different vertex
# ============================================================================
def variant_14():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for fi, tri in enumerate(faces):
            idx = fi % 3
            draw_line(tri[idx], lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 15: Mesh grid — two sets of parallel slices per face (from 2 vertices)
# ============================================================================
def variant_15():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            # Slices from vertex 0
            draw_line(lerp(tri[0], tri[1], t), lerp(tri[0], tri[2], t))
            # Slices from vertex 1
            draw_line(lerp(tri[1], tri[0], t), lerp(tri[1], tri[2], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 16: Mirror — left half and right half sweep opposite directions
# ============================================================================
def variant_16():
    left = [faces[0], faces[2], faces[4]]
    right = [faces[1], faces[3], faces[5]]
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in left:
            for idx in range(3):
                draw_line(tri[idx], lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], t))
        for tri in right:
            for idx in range(3):
                draw_line(tri[idx], lerp(tri[(idx+2) % 3], tri[(idx+1) % 3], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 17: Spine ribs — horizontal ribs from center spine outward
# ============================================================================
def variant_17():
    spine = [V_TOP_APEX, V_FRONT, V_BACK, V_BOT_FRONT, V_BOT_APEX]
    left  = [V_LEFT, V_LEFT, V_LEFT, V_BOT_TOP_L, V_BOT_TOP_L]
    right = [V_RIGHT, V_RIGHT, V_RIGHT, V_BOT_TOP_R, V_BOT_TOP_R]
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for i in range(len(spine)):
            draw_line(lerp(spine[i], left[i], t), lerp(spine[i], right[i], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 18: Interference — fans from vertex 0 and vertex 2 overlap
# ============================================================================
def variant_18():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            draw_line(tri[0], lerp(tri[1], tri[2], t))
            draw_line(tri[2], lerp(tri[0], tri[1], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 19: Section centroid star — lines radiate from section centers to edges
# ============================================================================
def variant_19():
    top_c = (sum(v[0] for f in top_faces for v in f) / 12,
             sum(v[1] for f in top_faces for v in f) / 12)
    bot_c = (sum(v[0] for f in bot_faces for v in f) / 6,
             sum(v[1] for f in bot_faces for v in f) / 6)
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for fi, tri in enumerate(faces):
            c = top_c if fi < 4 else bot_c
            for idx in range(3):
                draw_line(c, lerp(tri[idx], tri[(idx+1) % 3], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 20: Eased fan — classic fan with smooth ease-in-out spacing
# ============================================================================
def variant_20():
    for step in range(NUM_LINES):
        t = ease_in_out(step / (NUM_LINES - 1)) if NUM_LINES > 1 else 0
        for tri in faces:
            for idx in range(3):
                draw_line(tri[idx], lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 21: Fractal subdivide — recursively split each face into 4 triangles
# ============================================================================
def variant_21():
    def subdivide(tri, depth):
        if depth == 0:
            return [tri]
        m01 = lerp(tri[0], tri[1], 0.5)
        m12 = lerp(tri[1], tri[2], 0.5)
        m20 = lerp(tri[2], tri[0], 0.5)
        return (subdivide([tri[0], m01, m20], depth-1) +
                subdivide([m01, tri[1], m12], depth-1) +
                subdivide([m12, tri[2], m20], depth-1) +
                subdivide([m01, m12, m20], depth-1))

    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        depth = 1 + int(t * 2.99)  # 1, 2, or 3 levels
        for tri in faces:
            subs = subdivide(tri, depth)
            for sub in subs:
                pen.up(); pen.goto(*sub[0]); pen.down()
                pen.goto(*sub[1]); pen.goto(*sub[2]); pen.goto(*sub[0])
        screen.update(); time.sleep(FRAME_DELAY * 2)


# ============================================================================
# 22: Moiré — two slightly offset fan angles creating interference
# ============================================================================
def variant_22():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            for idx in range(3):
                # Primary fan
                draw_line(tri[idx], lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], t))
                # Offset fan (slightly shifted)
                t2 = min(t + 0.08, 1.0)
                draw_line(tri[idx], lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], t2))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 23: Contour lines — outlines at fixed shrink levels toward global center
# ============================================================================
def variant_23():
    gc = (0, 0)
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            s = [lerp(v, gc, t * 0.8) for v in tri]
            pen.up(); pen.goto(*s[0]); pen.down()
            pen.goto(*s[1]); pen.goto(*s[2]); pen.goto(*s[0])
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 24: Tangent web — connect opposite-t points on adjacent edges
# ============================================================================
def variant_24():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            for idx in range(3):
                p1 = lerp(tri[idx], tri[(idx+1) % 3], t)
                p2 = lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], 1 - t)
                draw_line(p1, p2)
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 25: Radial burst — lines from each vertex to points on ALL other edges
# ============================================================================
def variant_25():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            for idx in range(3):
                origin = tri[idx]
                # Fan to opposite wall
                draw_line(origin, lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], t))
                # Also fan to each adjacent wall at half intensity
                draw_line(origin, lerp(origin, lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], 0.5), t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 26: Sine wave fan — fan spacing follows a sine curve
# ============================================================================
def variant_26():
    for step in range(NUM_LINES):
        raw_t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        t = 0.5 + 0.5 * math.sin(raw_t * math.pi - math.pi / 2)
        for tri in faces:
            for idx in range(3):
                draw_line(tri[idx], lerp(tri[(idx+1) % 3], tri[(idx+2) % 3], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 27: Chevron emphasis — bottom fans from sides, top fans from apex
# ============================================================================
def variant_27():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        # Top: fan from vertex 0 (apex/back)
        for tri in top_faces:
            draw_line(tri[0], lerp(tri[1], tri[2], t))
        # Bottom: fan from vertex 1 and 2 (the side vertices)
        for tri in bot_faces:
            draw_line(tri[1], lerp(tri[0], tri[2], t))
            draw_line(tri[2], lerp(tri[0], tri[1], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 28: Nested diamonds — inner triangles at t AND 1-t create diamond shapes
# ============================================================================
def variant_28():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        if t == 0:
            continue
        for tri in faces:
            # Forward inner triangle
            pts_a = [lerp(tri[i], tri[(i+1) % 3], t) for i in range(3)]
            pen.up(); pen.goto(*pts_a[0]); pen.down()
            pen.goto(*pts_a[1]); pen.goto(*pts_a[2]); pen.goto(*pts_a[0])
            # Connect corresponding points to create hexagonal weave
            pts_b = [lerp(tri[i], tri[(i+1) % 3], 1-t) for i in range(3)]
            for i in range(3):
                draw_line(pts_a[i], pts_b[i])
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# 29: Density gradient — more lines near vertices, fewer in middle
# ============================================================================
def variant_29():
    n = NUM_LINES * 2
    for step in range(n):
        t = ease_in(step / (n - 1)) if n > 1 else 0
        for tri in faces:
            draw_line(tri[0], lerp(tri[1], tri[2], t))
        screen.update(); time.sleep(FRAME_DELAY * 0.5)


# ============================================================================
# 30: Cathedral — all 3 fan directions + concentric outlines combined
# ============================================================================
def variant_30():
    for step in range(NUM_LINES):
        t = step / (NUM_LINES - 1) if NUM_LINES > 1 else 0
        for tri in faces:
            # Concentric outline
            cx = sum(v[0] for v in tri) / 3
            cy = sum(v[1] for v in tri) / 3
            s = [lerp(v, (cx, cy), t) for v in tri]
            pen.up(); pen.goto(*s[0]); pen.down()
            pen.goto(*s[1]); pen.goto(*s[2]); pen.goto(*s[0])
            # Fan from vertex 0 only (to keep it clean)
            draw_line(tri[0], lerp(tri[1], tri[2], t))
        screen.update(); time.sleep(FRAME_DELAY)


# ============================================================================
# RUN ALL VARIANTS
# ============================================================================

variants = [
    ("1: Classic fan",               variant_1),
    ("2: Concentric triangles",      variant_2),
    ("3: Apex-only fan",             variant_3),
    ("4: Horizontal slices",         variant_4),
    ("5: Starburst",                 variant_5),
    ("6: String art curves",         variant_6),
    ("7: Cross-hatch",               variant_7),
    ("8: Spiral nest",               variant_8),
    ("9: Woven L/R",                 variant_9),
    ("10: Diamond lattice",          variant_10),
    ("11: Top fan + bottom slices",  variant_11),
    ("12: Inner triangles",          variant_12),
    ("13: Triple phase fan",         variant_13),
    ("14: Pinwheel",                 variant_14),
    ("15: Mesh grid",                variant_15),
    ("16: Mirror symmetry",          variant_16),
    ("17: Spine ribs",               variant_17),
    ("18: Interference",             variant_18),
    ("19: Centroid star",            variant_19),
    ("20: Eased fan",                variant_20),
    ("21: Fractal subdivide",        variant_21),
    ("22: Moire",                    variant_22),
    ("23: Contour lines",            variant_23),
    ("24: Tangent web",              variant_24),
    ("25: Radial burst",             variant_25),
    ("26: Sine wave fan",            variant_26),
    ("27: Chevron emphasis",         variant_27),
    ("28: Nested diamonds",          variant_28),
    ("29: Density gradient",         variant_29),
    ("30: Cathedral",                variant_30),
]

for name, fn in variants:
    pen.clear()
    pen.up(); pen.goto(0, -380); pen.down()
    pen.color(PEN_COLOR)
    pen.write(name, align="center", font=("Courier", 14, "normal"))
    fn()
    screen.update()
    time.sleep(2.5)

screen.mainloop()
