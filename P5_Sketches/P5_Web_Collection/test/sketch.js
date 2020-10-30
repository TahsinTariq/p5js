// let l = []

// function setup() {
//   	// createCanvas(windowWidth, windowHeight);
//   	createCanvas(windowWidth, windowHeight, WEBGL);
//   	background(0)
// 	for(let i=0; i<500; i++){
//   		l.push([random(width), random(height)])
//   	}
//   	// noLoop()
// }

// function draw() {
// 	background(0)
// 	translate(-width, -height)
// 	translate(mouseX, mouseY)
// 	beginShape()
// 	for (i of l){
// 		this.isImmediateDrawing = false
// 		vertex(i[0], i[1])
// 		// ellipse(i[0], i[1], 10, 10)
// 	}
// 	endShape(CLOSE)
// }


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // Adding WEBGL here *
}
function draw(){
	translate(-width/2, -height/2)
	translate(mouseX, mouseY)
background(255);
fill(200);
for (var i = 0; i < 20; i++) {

	beginShape();
	vertex(-100, 100, 0);
	vertex(100, 100, 0);
	vertex(100, -100, 0);
	vertex(-100, -100, 0);
	endShape(CLOSE);
}
}

