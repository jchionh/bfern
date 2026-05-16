/**
 * User: jchionh
 * Date: 5/13/26
 * Time: 2:30 PM
 */

/**
 * here's the file that keeps various globals in the namespace
 */

// create the app namepsace
var rb = rb || {};

rb.gPrevTimestamp = 0;
rb.gDelta = 0;
rb.gCanvasElement = document.getElementById('main');
rb.gCanvasContext = rb.gCanvasElement.getContext('2d');
rb.gDevicePixelRatio = 1;
rb.gRenderer2D = null;
rb.gBFernGame = null;
rb.doAccumulate = false;
rb.gFernGlobals = {};
rb.gFernGlobals["density"] = 8000;
rb.gFrameTimeSlidingWindow = null;