let gridRadius = 40
let incrementRate = 0.1;
let zoff = 0;
let n = [];
let row, col;
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	background(0);
	// noLoop()
	row = width*2
	col = height
	let xoff = 0;
	for(let x =0; x< row; x+=gridRadius){
		let yoff = 0;
		n.push([]);
		for(let y =0; y< col; y+=gridRadius){
			yoff+=incrementRate;
			n[n.length-1].push(noise(xoff, yoff, zoff));
		}
		xoff+=incrementRate;
	}
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
	// console.log(n)
	background(0)
	noFill();
	stroke(255);
	// strokeWeight(10)
	// translate(width/2, height/2);
	rotateX(PI/3);
	translate(-width, -height/2)
	// incrementRate = map(mouseX, 0, width,0.1, 0.5 );
	// let xoff = 0;
	for(let x =0; x<row; x++){
		// let yoff = 0;
		beginShape(TRIANGLE_STRIP)
		for(let y =0; y< col; y++){
			// yoff+=incrementRate;
			// // let n = noise(xoff, yoff, zoff);
			// let n = noise(sin(xoff), yoff, zoff);

			// let fillColor = map(n, 0, 1, 0, 255);
			// let r = map(n, 0, 1, -100, 100);
			// fill(fillColor);
			// for(let z =0; z< int(r); z+=1){
				// push()
				// translate(0,0,z*3)
				// ellipse(x, y, r, r)
				// vertex(x,y, r)
				// vertex(x+gridRadius,y, r)
				vertex(x*gridRadius,y*gridRadius, n[x][y])
				vertex((x+1)*gridRadius,y*gridRadius, n[x][y])
				// pop()
			}
		endShape();
		// xoff+=incrementRate;
	}
	// zoff+=incrementRate;
}