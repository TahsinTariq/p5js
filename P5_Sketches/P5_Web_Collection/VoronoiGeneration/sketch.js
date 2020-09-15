function setup() {
	createCanvas(640, 480);
	background(0);
}

function draw() {
	fill(random(255))
	ellipse(width/2, height/2, 100, 100)
}