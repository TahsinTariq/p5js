// var a = new Heap();
// for(i of [5,2,7,1,10]){
// 	a.push(i);
// }
let l = []

function setup() {
  	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0)
	l.sort(function(a,b){return a[0] - b[0];})
	beginShape(TRIANGLE_STRIP)
	stroke(255)
	for( i of l){
		vertex(i[0],i[1])
		fill(255,0,0)
		ellipse(i[0],i[1], 10,10)
	}
	endShape()

}

function mousePressed(){
	l.push([mouseX, mouseY])
}



// from heapq import *

// a = [5,2,7,1,10]
// heappush(a, 6)
// a = []
// heappush(a, 5)
// heappush(a, 2)
// heappush(a, 7)
// heappush(a, 1)
// heappush(a, 10)
// heappush(a, 6)

// while a:
//     print(heappop(a))


// b = [1,2,3,4]
// print(b)
// print(b+1)