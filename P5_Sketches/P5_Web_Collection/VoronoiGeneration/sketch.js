let v;
let r = 500;
let slider;
function setup() {
	let cnv = createCanvas(windowWidth, windowHeight-windowHeight*(4/100));
	cnv.style('display', 'block');
	cnv.style('align', 'center');
	background(0);
	noStroke();
	// createP('');
	slider = createSlider(0, 270,190, 1);

	colorMode(HSB, 360,100,100)
	v = new voronoi(150);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if(r<= 0){
		delay(1000);
		r = 500;
		v = new voronoi(150);
		background(0);
	}
	v.show(r);
	r-=1.5;

	// noLoop();
}

function delay(ms) {
var cur_d = new Date();
var cur_ticks = cur_d.getTime();
var ms_passed = 0;
while(ms_passed < ms) {
var d = new Date(); // Possible memory leak?
var ticks = d.getTime();
ms_passed = ticks - cur_ticks;
d = null; // Prevent memory leak?
}
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
			fill(this.hue[i]+slider.value(), 80, 90);
			// ellipse(this.x[i], this.y[i], this.r[i], this.r[i]);
			ellipse(this.x[i], this.y[i], r, r);
		}
	}
}