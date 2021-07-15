let l = []

function setup() {
	// createCanvas(windowWidth, windowHeight);
	// createCanvas(windowWidth, windowHeight, WEBGL);
	// background(0)
	// for(let i=0; i<200; i++){
	// 	l.push([random(width), random(height)])
	// }
	// noLoop()

	script = document.getElementsByTagName('script');
	index = script.length - 3
	ms = script[index]
	print(ms)
	queryString = ms.src.replace(/^[^\?]+\??/, '');
	var params = parseQuery(queryString)
	print(params)

}
function parseQuery(query) {
	var Params = new Object();
	if (!query) return Params; // return empty object
	var Pairs = query.split(/[;&]/);
	for (var i = 0; i < Pairs.length; i++) {
		var KeyVal = Pairs[i].split('=');
		if (!KeyVal || KeyVal.length != 2) continue;
		var key = unescape(KeyVal[0]);
		var val = unescape(KeyVal[1]);
		val = val.replace(/\+/g, ' ');
		Params[key] = val;
	}
	return Params;
}

function draw() {
	// background(0)
	// translate(-width, -height)
	// translate(mouseX, mouseY)
	// beginShape()
	// for (i of l){
	// 	vertex(i[0], i[1])
	// 	// ellipse(i[0], i[1], 10, 10)
	// }
	// endShape(CLOSE)
}


