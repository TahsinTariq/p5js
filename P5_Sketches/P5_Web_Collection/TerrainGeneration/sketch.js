// let gridRadius = 40
// let incrementRate = 0.1;
// let zoff = 0;
// let n = [];
// let row, col;

let n, n2, pts, tri, set;
function setup() {
	// createCanvas(windowWidth, windowHeight, WEBGL);
	createCanvas(windowWidth, windowHeight);
	background(0);
	// noLoop()
// 	row = width*2
// 	col = height
// 	let xoff = 0;
// 	for(let x =0; x< row; x+=gridRadius){
// 		let yoff = 0;
// 		n.push([]);
// 		for(let y =0; y< col; y+=gridRadius){
// 			yoff+=incrementRate;
// 			n[n.length-1].push(noise(xoff, yoff, zoff));
// 		}
// 		xoff+=incrementRate;
// 	}
	generatePoints()
	print(tri.length)
}

function draw() {
	// console.log(frameRate())
	background(0)
	noFill();
	stroke(255);
	// strokeWeight(10)
	// translate(width/2, height/2);
	translate(mouseX, mouseY);

	// rotateX(PI/3);

	// rotateX(frameCount*0.1);
	// translate(-width, -height/2)

	// for(let i = 0;i<tri.length; i++){
	// 		beginShape()
	// 		for(let j = 0; j<tri[i].length; j++){
	// 			vertex(tri[i][j][0], tri[i][j][1])
	// 		}
	// 		endShape(CLOSE)
	// 	}
	for(let i = 0;i<edge.length; i++){
		line(edge[i][0][0], edge[i][0][1], edge[i][1][0], edge[i][1][1])
	}
}

function generatePoints(){
	n = 0
	n2 = 0
	p = new PoissonDiskSampling({
	    shape: [width, height],
	    minDistance: 100,
	    maxDistance: 20,
	    tries: 10
	});
	pts = p.fill()

	delunay = Delaunator.from(pts)
	tri = []
	edge = []
	// set = new Set()
	for(let i = 0; i< delunay.triangles.length/3; i++){
		tri.push([	pts[delunay.triangles[3*i  ] ],
					pts[delunay.triangles[3*i+1] ],
					pts[delunay.triangles[3*i+2] ] ])
		// set.add([])
	}
	for (let e = 0; e < delunay.triangles.length; e++) {
        if (e > delunay.halfedges[e]) {
            const p = pts[delunay.triangles[e]];
            const q = pts[delunay.triangles[next_halfedge(e)]];
            edge.push([p, q])
        }
    }

}
function next_halfedge(e) { return (e % 3 == 2) ? e-2 : e+1; }