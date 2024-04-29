function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(640,480)
}

function draw() {
  background(220);
  push()
  translate(width/2-320,height/2-200)
  image(capture,0,0)
  pop()
}
