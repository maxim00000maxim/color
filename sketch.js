let r, g, b = 0



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r, g, b);
  fill(225 - r, 255 - g, 255 - b);
  ellipse(100, 100, 100, 100);


}

function make() {
  r = etovVodr.value
  g = etovVodg.value
  b =etovVodb.value
}