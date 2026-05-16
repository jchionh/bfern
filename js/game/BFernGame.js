/**
 * User: jchionh
 * Date: 5/13/26
 * Time: 9:01 AM
 */

// namespace
rb.game = rb.game || {};

/**
 * BFernGame is the object that contains the various objects to run the game
 * like the renderer, the anim manger, etc.
 *
 * @constructor
 *
 * @param {number} dpi th device pixel ratio used for the render canvas
 *
 */
rb.game.BFernGame = function(dpi) {
    this.canvasElement = document.getElementById('main');

    // create our renderer
    this.renderer = new rb.render.Renderer2D(this.canvasElement, dpi);
    this.maxIterations = 12500;
    this.points = [];
};

rb.game.BFernGame.prototype.generatePoints = function() {
    this.points = [];

    let t = 0;
    let x = 0;
    let y = 0;
    let xn = 0;
    let yn = 0;

    while(t < this.maxIterations)
    {
        let r = Math.random();
   
        if (r < 0.01)
        {
            xn = 0.0;
            yn = 0.16 * y;
        }
        else if (r < 0.86)
        {
            xn = (0.85 * x) + (0.04 * y);
            yn = (-0.04 * x) + (0.85 * y) + 1.6;
        }
        else if (r < 0.93)
        {
            xn = (0.2 * x) + (-0.26 * y);
            yn = (0.23 * x) + (0.22 * y) + 1.6;
        }
        else
        {
            xn = (-0.15 * x) + (0.28 * y);
            yn = (0.26 * x) + (0.24 * y) + 0.44;
        }

        this.points.push({ x: xn, y: yn});
        this.renderer.plotPointNormalized(xn, yn, "green");

        x = xn;
        y = yn;
        t++;
    }
}

/**
 * draw all pixels on screen white
x = 0.0
y = 0.0
t = 0.0
xn = 0.0
yn = 0.0
while t < maximum iterations:
    r = random() between 0 and 1
    if r < 0.01:
        xn = 0.0
        yn = 0.16 * y
    else if r < 0.86:
        xn = 0.85 * x + 0.04 * y
        yn = -0.04 * x + 0.85 * y + 1.6
    else if r < 0.93:
        xn = 0.2 * x - 0.26 * y
        yn = 0.23 * x + 0.22 * y + 1.6
    else:
        xn = -0.15 * x + 0.28 * y
        yn = 0.26 * x + 0.24 * y + 0.44
    draw green pixel on screen at (xn, yn)
    x = xn
    y = yn
    increment t
 */
/**
 * update loop of our game
 * @param {number} dt
 */
rb.game.BFernGame.prototype.update = function(dt) {
};

/**
 * render call for our game
 */
rb.game.BFernGame.prototype.render = function() {
    this.renderer.clearCanvas();
    this.generatePoints();

    
    /*
    for (let i = 0; i < this.points.length; i++)
    {
        const point = this.points[i];
        this.renderer.plotPointNormalized(point.x, point.y, "green");
    }
    */
    
};

/**
 * do we need next frame?
 * @returns {boolean}
 */
rb.game.BFernGame.prototype.needsNextFrame = function() {
    return true;
};


