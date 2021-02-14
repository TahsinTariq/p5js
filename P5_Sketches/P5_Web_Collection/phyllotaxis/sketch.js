n = 1
degree = 137.5
s = 6

colors = []

function setup() {
	// createCanvas(640, 480);
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB, 360, 100, 100)
	for (i = 0; i < 20; i++) {
		colors.push(color(random(160, 330), 80, 90))
	}
}

function windowResize() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	for (i = 0; i < 25; i++) {
		push()
		translate(width / 2, height / 2)
		pos = ptxPos(degree, s, n)
		// fill(map(n % 5, 0, 10, 0, 300), 80, 90)
		fill(colors[n % 20])
		ellipse(pos[0], pos[1], 10, 10)
		n += 1
		if (pos[0] + pos[1] > width / 2 + height / 2) {
			noLoop()
			print("paused")
		}
		pop()
	}
}

function ptxPos(degree, scale, count) {
	angle = count * radians(degree)
	r = scale * sqrt(count)
	// r = -scale * sqrt(count) * (2 - 2 * sin(angle) + sin(angle) * sqrt(abs(cos(angle)) / (sin(angle) + 1.5)))
	x = r * cos(angle)
	y = r * sin(angle)
	return [x, y]
}

function mousePressed() {
	n = 0
	background(0)
	loop()
	// s = map(mouseX, 0, width, 2, 10)
	// print(s)
}