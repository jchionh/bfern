/**
 * User: jchionh
 * Date: 5/13/26
 * Time: 2:27 PM
 */

/**
 * init our app
 */
function mainInit() {
    console.log("main init.");
    rb.gCanvasElement = document.getElementById('main');
    rb.gCanvasContext = rb.gCanvasElement.getContext('2d');
    rb.gDevicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
    rb.gCanvasElement.width = rb.gCanvasElement.clientWidth * rb.gDevicePixelRatio;
    rb.gCanvasElement.height = rb.gCanvasElement.clientHeight * rb.gDevicePixelRatio;
    console.log('devicePixelRatio: ' + rb.gDevicePixelRatio);

    rb.gPrevTimestamp = 0;
    rb.gDelta = 0;

    // creat our game
    rb.gBFernGame = new rb.game.BFernGame(rb.gDevicePixelRatio);
    rb.gBFernGame.plotFern();

    var supportsTouch = 'ontouchstart' in window;
    var useMouse = !supportsTouch;

    // call our mainloop the first time with a current timestamp
    mainLoop(Date.now());
};

/**
 * this is our mainloop, that will be called with requestAnimationFrame
 * @param {number} timestamp
 */
function mainLoop(timestamp) {
    // calculate our delta
    rb.gDelta = Math.max(0.0, timestamp - rb.gPrevTimestamp);
    rb.gPrevTimestamp = timestamp;

    // update our game
    rb.gBFernGame.update(rb.gDelta);

    // and call render
    rb.gBFernGame.render();

    // now, check if our game needs to requestAnimFrame , call it
    if (rb.gBFernGame.needsNextFrame()) {
        needsRequestAnimFrame();
    }
    //console.log('reqAnimFrame main loop run.');
};

function needsRequestAnimFrame() {
    // request anim for the next loop call
    window.requestAnimFrame(mainLoop, rb.gCanvasElement);
};