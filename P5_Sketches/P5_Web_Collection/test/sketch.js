let l = []

function setup() {
  	// createCanvas(windowWidth, windowHeight);
  	createCanvas(windowWidth, windowHeight, WEBGL);
  	background(0)
	for(let i=0; i<200; i++){
  		l.push([random(width), random(height)])
  	}
  	// noLoop()
}

function draw() {
	background(0)
	translate(-width, -height)
	translate(mouseX, mouseY)
	beginShape()
	for (i of l){
		vertex(i[0], i[1])
		// ellipse(i[0], i[1], 10, 10)
	}
	endShape(CLOSE)
}


