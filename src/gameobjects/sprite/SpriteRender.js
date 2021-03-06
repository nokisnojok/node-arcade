var renderWebGL = require('../../utils/NOOP');
var renderCanvas = require('../../utils/NOOP');

if (typeof WEBGL_RENDERER) {
  renderWebGL = require('./SpriteWebGLRenderer');
}

if (typeof CANVAS_RENDERER) {
  renderCanvas = require('./SpriteCanvasRenderer');
}

module.exports = {
  renderWebGL: renderWebGL,
  renderCanvas: renderCanvas
};
