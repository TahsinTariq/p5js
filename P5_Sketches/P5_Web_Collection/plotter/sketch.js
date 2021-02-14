// const s = 10
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
	background(0)
	push()
	translate(width / 2, height / 2)
	beginShape()
	for (let i = 0; i < 360; i += 0.5) {
		// s = map(mouseX, 0, width, 1, 100)
		// print(s)
		m = min(width, height) / 50
		s = map(sin(frameCount / 10), -1, 1, m / 2, m)
		pos = cartToParametric(i, s)
		fill(0, 80, 90)
		vertex(pos[0], pos[1])

	}
	endShape(CLOSE)
	pop()

}

function polarToCart(degree, scale) {
	angle = radians(degree)
	r = - scale * (2 - 2 * sin(angle) + sin(angle) * sqrt(abs(cos(angle)) / (sin(angle) + 1.5)))
	x = r * cos(angle)
	y = r * sin(angle)
	return [x, y]
}

function cartToParametric(degree, scale) {
	angle = radians(degree)
	// r = - scale * (2 - 2 * sin(angle) + sin(angle) * sqrt(abs(cos(angle)) / (sin(angle) + 1.5)))
	x = scale * 16 * pow(sin(angle), 3)
	y = -scale * (13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle))
	return [x, y]
}
