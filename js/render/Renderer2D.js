// create namespace
rb.render = rb.render || {};

/**
 * Renderer that contains method to render to the canas
 * @param canvasElement
 * @constructor
 */
rb.render.Renderer2D = function(canvasElement, dpi) {
    this.dpi = dpi;
	this.canvasElement = canvasElement;
	this.renderCtx = canvasElement.getContext('2d');
	this.width = canvasElement.width;
	this.height = canvasElement.height;
    this.clearCanvas();
};

/**
 * render the scene
 */
rb.render.Renderer2D.prototype.render = function() {
    // clear our background
    // this.clearCanvas();

    // this.plotPointNormalized(0.5,0.5);
};

/**
 * plot a point
 */
rb.render.Renderer2D.prototype.plotPointNormalized = function(x, y) {
    this.renderCtx.save();
    this.renderCtx.beginPath();
    this.renderCtx.arc((x * 100) + (this.width / 2), (y * 100) + (this.height / 20), 1 * this.dpi, 0, 2 * Math.PI);
    this.renderCtx.fillStyle = "green";
    this.renderCtx.fill();
    this.renderCtx.restore();
};

/**
 * clear our canvas
 */
rb.render.Renderer2D.prototype.clearCanvas = function() {
    // Store the current transformation matrix
    this.renderCtx.save();

    // Use the identity matrix while clearing the canvas
    this.renderCtx.setTransform(1, 0, 0, 1, 0, 0);
    this.renderCtx.fillStlye = '#000000';
    //this.renderCtx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.renderCtx.fillRect(0, 0, this.width, this.height);

    // Restore the transform
    this.renderCtx.restore();
};
