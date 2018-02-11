/* This is a animation file. You can create your
 * own (so you can e.g. load different sheets, etc)
 * but it should have some suff in it in order to work:
 *
 * - A "animate_setup" function.
 *   this function is called ONCE on load of the page.
 *   You can initiate new animations in it.
 *
 * - A "animate_update" function this is called on
 *   every update. (update rate can be set in the
 *   settings-section in engine.js)
 *
 *  The "onkeypress" function is called when a key
 *  (or multiple keys) has been pressed.
 */

function animate_setup() {
    player1 = new animation();
    player1.setup(ctx.canvas.width / 2, ctx.canvas.height / 2);
    player1.animate_idle = [1, 2];   // The standart-animation in idle
    player1.animate_walk = [3, 4];   // A walking animation
}

function animate_update() {
    player1.animate();  // Animate
    player1.display();  // Show on screen
}

onkeypress = function(e) {
    console.log("Keycode:", e.keyCode);
    console.log("Keycode:", e);
}