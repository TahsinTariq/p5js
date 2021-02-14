n = 0
degree = 137.5
s = 6


function setup() {
	// createCanvas(640, 480);
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB, 360, 100, 100)
}
function windowResize() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	push()
	translate(width / 2, height / 2)
	pos = ptxPos(degree, s, n)
	fill(map(n % 5, 0, 10, 0, 300), 80, 90)
	ellipse(pos[0], pos[1], 10, 10)
	n += 1
	pop()
}

function ptxPos(degree, scale, count) {
	angle = count * radians(degree)
	r = scale * sqrt(count)
	x = r * cos(angle)
	y = r * sin(angle)
	return [x, y]
}

function mousePressed() {
	n = 0
	background(0)
	// s = map(mouseX, 0, width, 2, 10)
	// print(s)
}