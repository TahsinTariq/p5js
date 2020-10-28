
grid = []
active = []
ordered = []
let pts;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	// pts = poisson(width = random(width), k = 30)
	pts = poisson(width, height, r=20, k=30)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

	// if(!pts.next().done){
	// 	for(p of pts.next().value[0]){
	// 		ellipse(p.x, p.y, 10, 10)
	// 	}
	// }
	// print(pts[0])
	for (p of pts){
		ellipse(p[0], p[1], 10, 10)
	}


}

// function* poisson(startX = width/2, startY = height/2, r=20, k=5){
// 	w = r / Math.sqrt(2)
// 	cols = floor(width / w)
// 	rows = floor(height / w)

// 	for (var i = 0; i < cols * rows; i++) {
// 		grid[i] = undefined;
// 	}

// 	pos = createVector(random(startX), random(startY))
// 	active.push(pos)
// 	grid[floor(startX / w) + floor(startY / w)* cols] = pos

// 	while(active.length > 0){
// 		randIndex = floor(random(active.length))
// 		pos = active[randIndex]
// 		found = false
// 		for(let n =0; n<k; n++){
// 			sample = p5.Vector.random2D()
// 			m = random(r, 2*r)
// 			sample.setMag(m)
// 			sample.add(pos)

// 			col = floor(sample.x / w);
//         	row = floor(sample.y / w);

//         	if ( col > -1 && row > -1 && col < cols && row < rows && !grid[col + row * cols]){
//         		ok = true
//         		for (i = -1; i <= 1; i++) {
// 		            for (j = -1; j <= 1; j++) {
// 			            index = col + i + (row + j) * cols;
// 			            neighbor = grid[index];
// 			            if (neighbor) {
// 				            d = p5.Vector.dist(sample, neighbor);
// 				            if (d < r) {
// 				        		ok = false;
// 				            }
// 			            }
// 		        	}
// 		      	}
// 		      	if (ok) {
// 		            found = true;
// 		            grid[col + row * cols] = sample;
// 		            active.push(sample);
// 		            ordered.push(sample);
// 		            break;
// 		        }
//         	}
// 		}
// 		if (!found) {
// 	        active.splice(randIndex, 1);
// 	    }
//         // yield [active, ordered]
// 	}
// 	print(active)
// 	return [active, ordered]
// }

function euclidean_distance(a, b){
    dx = a[0] - b[0]
    dy = a[1] - b[1]
    return sqrt(dx * dx + dy * dy)
}

function poisson(width, height, r, k=5, distance=euclidean_distance){
	tau = 2 * Math.PI
    cellsize = r / sqrt(2)

    grid_width = int(ceil(width / cellsize))
    grid_height = int(ceil(height / cellsize))
    grid = new Array(grid_width * grid_height).fill(null);

    function grid_coords(p){
        return [int(floor(p[0] / cellsize)), int(floor(p[1] / cellsize))]
    }
    function fits(p, gx, gy){
        // for x in range(max(gx - 2, 0), min(gx + 3, grid_width)):
        for (let x = max(gx - 2, 0); x<min(gx + 3, grid_width); x++){
        	for (let y = max(gy - 2, 0); y<min(gy + 3, grid_height); y++){
                g = grid[x + y * grid_width]
                if (g == null){
                    continue
                }
                if (distance(p, g) <= r){
                    return false
                }
            }
        }
        return true
    }

    p = [random(width), random(height)]
    queue = [p]
    let grid_x
    let grid_y
    grid_x = grid_coords(p)[0]
    grid_y = grid_coords(p)[1]
    grid[grid_x + grid_y * grid_width] = p

    while (queue.length > 0){
        qi = int(random(queue.length))
        let qx, qy
        print("len :"+ queue.length +" val: "+ queue[qi]+ " index : "+ qi)
        print(queue)
        queue[qi] = queue[-1]
        if (queue[qi] == undefined){
        	queue.pop()
        	continue
        }
        qx = queue[qi][0]
        qy = queue[qi][1]
        queue.pop()
        for (let i = 0; i < k; i++){
            Alpha = random(tau)
            d = r * sqrt(random(3) + 1)
            px = qx + d * cos(Alpha)
            py = qy + d * sin(Alpha)
            if (0 > px || px > width || 0 > py || py > height){
                continue
            }
            p = [px, py]
            grid_x, grid_y = grid_coords(p)[0], grid_coords(p)[1]
            if (!fits(p, grid_x, grid_y)){
                continue
            }
            // if(p === undefined){
            // 	print(p)
            // }
            queue.push(p)
            grid[grid_x + grid_y * grid_width] = p
    	}
    }
    done = []
    for (p of grid){
    	if (p != null){
    		done.push(p)
    	}
    }
    return done
}