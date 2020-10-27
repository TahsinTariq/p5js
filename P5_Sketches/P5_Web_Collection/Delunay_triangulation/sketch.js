
grid = []
active = []
ordered = []
let pts;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	pts = poission(width = random(width), k = 30)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	// print(pts)
	if(!pts.next().done){
		// console.log(pts.next().value)
		for(p of pts.next().value[0]){
			ellipse(p.x, p.y, 10, 10)
		}
	}
}

function* poission(startX = width/2, startY = height/2, r=20, k=5){
	w = r / Math.sqrt(2)
	cols = floor(width / w)
	rows = floor(height / w)

	for (var i = 0; i < cols * rows; i++) {
		grid[i] = undefined;
	}

	pos = createVector(random(startX), random(startY))
	active.push(pos)
	grid[floor(startX / w) + floor(startY / w)* cols] = pos

	while(active.length > 0){
		randIndex = floor(random(active.length))
		pos = active[randIndex]
		found = false
		for(let n =0; n<k; n++){
			sample = p5.Vector.random2D()
			m = random(r, 2*r)
			sample.setMag(m)
			sample.add(pos)

			col = floor(sample.x / w);
        	row = floor(sample.y / w);

        	if ( col > -1 && row > -1 && col < cols && row < rows && !grid[col + row * cols]){
        		ok = true
        		for (i = -1; i <= 1; i++) {
		            for (j = -1; j <= 1; j++) {
			            index = col + i + (row + j) * cols;
			            neighbor = grid[index];
			            if (neighbor) {
				            d = p5.Vector.dist(sample, neighbor);
				            if (d < r) {
				        		ok = false;
				            }
			            }
		        	}
		      	}
		      	if (ok) {
		            found = true;
		            grid[col + row * cols] = sample;
		            active.push(sample);
		            ordered.push(sample);
		            break;
		        }
        	}
		}
		if (!found) {
	        active.splice(randIndex, 1);
	    }
        yield [active, ordered]
	}
}