var canvas;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  centerCanvas();
}

function draw() {
  background(135, 206, 235);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    centerCanvas();

}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}