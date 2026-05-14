/**
 * User: jchionh
 * Date: 6/24/13
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

    this.x = 0.0
    this.y = 0.0
    this.t = 0.0
    this.xn = 0.0
    this.yn = 0.0
    this.maxIterations = 30000;
};

rb.game.BFernGame.prototype.plotFern = function() {
    while (this.t < this.maxIterations)
    {
        let r = Math.random();

        if (r < 0.01)
        {
            this.xn = 0.0;
            this.yn = 0.16 * this.y;
        }
        else if (r < 0.86)
        {
            this.xn = (0.85 * this.x) + (0.04 * this.y);
            this.yn = (-0.04 * this.x) + (0.85 * this.y) + 1.6;
        }
        else if (r < 0.93)
        {
            this.xn = (0.2 * this.x) + (-0.26 * this.y);
            this.yn = (0.23 * this.x) + (0.22 * this.y) + 1.6;
        }
        else
        {
            this.xn = (-0.15 * this.x) + (0.28 * this.y);
            this.yn = (0.26 * this.x) + (0.24 * this.y) + 0.44;
        }

        //console.log("Iteration: " + this.t + " xn: " + this.xn + " yn: " + this.yn);

        this.renderer.plotPointNormalized(this.xn, this.yn);

        this.x = this.xn;
        this.y = this.yn;
        this.t++;
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

    /*
    while (this.t < this.maxIterations)
    {
        let r = Math.random();

        if (r < 0.01)
        {
            this.xn = 0.0;
            this.yn = 0.16 * this.y;
        }
        else if (r < 0.86)
        {
            this.xn = (0.85 * this.x)+ (0.04 * this.y);
            this.yn = (-0.04 * this.x) + (0.85 * this.y) + 1.6;
        }
        else if (r < 0.93)
        {
            this.xn = (0.2 * this.x)+ (-0.26 * this.y);
            this.yn = (0.23 * this.x) + (0.22 * this.y) + 1.6;
        }
        else
        {
            this.xn = (-0.15 * this.x)+ (0.28 * this.y);
            this.yn = (0.26 * this.x) + (0.24 * this.y) + 0.44;
        }

        //console.log("Iteration: " + this.t + " xn: " + this.xn + " yn: " + this.yn);

        this.renderer.plotPointNormalized(this.xn, this.yn);

        this.x = this.xn;
        this.y = this.yn;
        this.t++;
    }
    */
    /*
    if (this.t > this.maxIterations)
    {
        console.log("Done");
        return;
    }

    let r = Math.random();

    if (r < 0.01)
    {
        this.xn = 0.0;
        this.yn = 0.16 * this.y;
    }
    else if (r < 0.86)
    {
        this.xn = (0.85 * this.x)+ (0.04 * this.y);
        this.yn = (-0.04 * this.x) + (0.85 * this.y) + 1.6;
    }
    else if (r < 0.93)
    {
        this.xn = (0.2 * this.x)+ (-0.26 * this.y);
        this.yn = (0.23 * this.x) + (0.22 * this.y) + 1.6;
    }
    else
    {
        this.xn = (-0.15 * this.x)+ (0.28 * this.y);
        this.yn = (0.26 * this.x) + (0.24 * this.y) + 0.44;
    }

    console.log("Iteration: " + this.t + " xn: " + this.xn + " yn: " + this.yn);

    this.renderer.plotPointNormalized(this.xn, this.yn);

    this.x = this.xn;
    this.y = this.yn;
    this.t++;
    */
};

/**
 * render call for our game
 */
rb.game.BFernGame.prototype.render = function() {
    this.renderer.render();
};

/**
 * do we need next frame?
 * @returns {boolean}
 */
rb.game.BFernGame.prototype.needsNextFrame = function() {
    return true;
};


