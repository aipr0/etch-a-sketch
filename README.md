# etch-a-sketch
Etch-a-Sketch project assignment for The Odin Project

This is my second attempt in 2024.

## TODO
- [x] I should make it so that you need to hold click and drag to draw instead of just hover/mouseover - this is because when inputting a grid size, if you click to confirm, your cursor will immediately start drawing near the centre of the grid
- [x] Change background colour from red to white
- [x] Allow user to remove and add borders to squares on grid
- [x] Implement a clear grid function

There's an issue with holding down left mouse button to draw. Occasionally when drawing the site mistakes it for attempting to drag something, and I have to imagine that the mouseup event isn't detected because when this error occurs, you can draw without holding left mouse button - just by hovering over. No ideas for a fix yet.