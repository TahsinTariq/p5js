let v;
function setup() {
	createCanvas(windowWidth, windowHeight-15);
	background(0);
	noStroke();
	colorMode(HSB, 360,100,100)
	v = new voronoi(150);
}

function draw() {
	if(frameCount%100 == 0)
		v = new voronoi(150);
		background(0);
		v.show();
	// noLoop();
	// fill(0,100,0, 50);
	// rect(0,0,width, height);
}
class voronoi{
	constructor(number){
		this.number = number;
		this.hue = [];
		this.r = []
		this.x = [];
		this.y = [];
		for (var i = 0; i < this.number; i++) {
			this.hue.push(random(0,50))
			this.r.push(random(50, 200))
			this.x.push(random(width))
			this.y.push(random(height))
		}
		console.log(this.x[0])
	}
	show(){
		for (var i = 0; i < this.number; i++) {
			fill(this.hue[i], 80, 90);
			ellipse(this.x[i], this.y[i], this.r[i], this.r[i]);
		}
	}
}