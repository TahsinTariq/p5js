var a = new Heap();
for(i of [5,2,7,1,10]){
	a.push(i);
}
function setup() {
	sizeX = 640;
	sizeY = 480;
  	createCanvas(sizeX, sizeY);

}

function draw() {
	background(0);
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