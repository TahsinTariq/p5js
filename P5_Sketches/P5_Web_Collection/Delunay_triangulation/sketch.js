let n, n2, pts, tri;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	generatePoints()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	n+=10

	for (let i = 0; i < n && i< pts.length; i+=1){
		point(pts[i][0], pts[i][1])
	}
	noFill()
	stroke(255)

	if (n> pts.length){
		n2+=10
		for(let i = 0; i< n2 && i<tri.length; i++){
			beginShape()
			for(let j = 0; j<tri[i].length; j++){
				vertex(tri[i][j][0], tri[i][j][1])
			}
			endShape(CLOSE)
		}
		if (n2> tri.length){
			noLoop()
		}
	}
}

function mousePressed(){
	background(0)
	generatePoints()
	loop()
}

function generatePoints(){
	n = 0
	n2 = 0
	p = new PoissonDiskSampling({
	    shape: [width, height],
	    minDistance: 20,
	    maxDistance: 20,
	    tries: 10
	});
	pts = p.fill()

	delunay = Delaunator.from(pts)
	tri = []
	for(let i = 0; i< delunay.triangles.length/3; i++){
		tri.push([	pts[delunay.triangles[3*i  ] ],
					pts[delunay.triangles[3*i+1] ],
					pts[delunay.triangles[3*i+2] ] ])
	}
}
















/*
	Trying a different method --->>
*/

// function euclidean_distance(a, b){
//     dx = a[0] - b[0]
//     dy = a[1] - b[1]
//     return sqrt(dx * dx + dy * dy)
// }

// function poisson(width, height, r, k=30, distance=euclidean_distance){
// 	tau = 2 * Math.PI
//     cellsize = r / sqrt(2)

//     grid_width = int(ceil(width / cellsize))
//     grid_height = int(ceil(height / cellsize))
//     grid = new Array(grid_width * grid_height).fill(null);

//     function grid_coords(p){
//         return [int(floor(p[0] / cellsize)), int(floor(p[1] / cellsize))]
//     }
//     function fits(p, gx, gy){
//         for (let x = max(gx - 2, 0); x<min(gx + 3, grid_width); x++){
//         	for (let y = max(gy - 2, 0); y<min(gy + 3, grid_height); y++){
//                 g = grid[x + y * grid_width]
//                 if (g == null){
//                     continue
//                 }
//                 if (distance(p, g) <= r){
//                     return false
//                 }
//             }
//         }
//         return true
//     }

//     p = [random(width), random(height)]
//     queue = [p]
//     let grid_x
//     let grid_y
//     grid_x = grid_coords(p)[0]
//     grid_y = grid_coords(p)[1]
//     grid[grid_x + grid_y * grid_width] = p

//     while (queue.length > 0){
//         qi = int(random(queue.length))
//         let qx, qy
//         // print("len :"+ queue.length +" val: "+ queue[qi]+ " index : "+ qi)
//         // print(queue)
//         queue[qi] = queue[queue.length-1]
//         qx = queue[qi][0]
//         qy = queue[qi][1]
//         queue.pop()
//         for (let i = 0; i < k; i++){
//             Alpha = random(tau)
//             d = r * sqrt(random(3) + 1)
//             px = qx + d * cos(Alpha)
//             py = qy + d * sin(Alpha)
//             if (px < 0 || px > width || py < 0 || py > height){
//                 continue
//             }
//             p = [px, py]
//             grid_x = grid_coords(p)[0]
//             grid_y = grid_coords(p)[1]
//             if (!fits(p, grid_x, grid_y)){
//                 continue
//             }
//             // if(p === undefined){
//         	// print(p)
//             // }
//             queue.push(p)
//             grid[grid_x + grid_y * grid_width] = p
//     	}
//     }
//     done = []
//     for (p of grid){
//     	if (p != null){
//     		done.push(p)
//     	}
//     }
//     return done
// }