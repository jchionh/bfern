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
    rb.gFrameTimeElement = document.getElementById('frametime');
    console.log('devicePixelRatio: ' + rb.gDevicePixelRatio);

    rb.gFrameTimeSlidingWindow = new rb.data.SlidingWindow(20, 0.0);

    rb.gPrevTimestamp = 0;
    rb.gDelta = 0;

    // create our game
    rb.gBFernGame = new rb.game.BFernGame(rb.gDevicePixelRatio);
    rb.gBFernGame.generatePoints();

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

    rb.gFrameTimeSlidingWindow.insertNumber(rb.gDelta);
    var averageFrameTime = rb.gFrameTimeSlidingWindow.average();
    
    rb.gFrameTimeElement.innerHTML = averageFrameTime.toFixed(2);

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

/**
 * turn accumulate on or off
 */
function accOnOff() {
    var doAccumulate = document.getElementById("doAccumulate").checked;
    document.getElementById("doAccumulateText").innerText = doAccumulate ? "On" : "Off";
    rb.doAccumulate = doAccumulate;
}

/**
 * update the state of the slider
 * @param {String} name
 */
function sliderChangedGlobal(name) {
    var value = document.getElementById(name).value;
    document.getElementById(name + "Text").innerText = "" + value;
    rb.gFernGlobals[name] = value;
}
