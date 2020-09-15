let v;
let r = 500;
function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
	background(0);
	noStroke();
	colorMode(HSB, 360,100,100)
	v = new voronoi(150);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if(r<= 0){
		// delayTime(1);
		lastTime = millis()
		&& (lastTime - startTime) >500
		startTime = millis();
		r = 500;
		v = new voronoi(150);
		background(0);
	}
	v.show(r);
	r-=1.5;

	// noLoop();
}
class voronoi{
	constructor(number){
		this.number = number;
		this.hue = [];
		// this.r = [];
		this.x = [];
		this.y = [];
		for (var i = 0; i < this.number; i++) {
			this.hue.push(random(0,50))
			// this.r.push(random(50, 200))
			this.x.push(random(width))
			this.y.push(random(height))
		}
	}
	show(r){
		for (var i = 0; i < this.number; i++) {
			fill(this.hue[i], 80, 90);
			// ellipse(this.x[i], this.y[i], this.r[i], this.r[i]);
			ellipse(this.x[i], this.y[i], r, r);
		}
	}
}