function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(320,240)
}

function draw() {
  background(220);
  image(capture,mouseX,mouseY)
}
