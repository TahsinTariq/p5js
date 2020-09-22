
var dict = {
  "x": 1,
  "y": 6,
  "z": 9,
  "a": 5,
  "b": 7,
  "c": 11,
  "d": 17,
  "t": 3
};
console.log(dict);
// Create items array
function sortDict(dictionary){
	var items = Object.keys(dictionary).map(function(key) {
	  return [key, dictionary[key]];
	});

	items.sort(function(first, second) {
	  return second[1] - first[1];
	});

	return Object.assign({}, ...items.map((x) => ({[x[0]]:x[1]})))
}

ans = sortDict(dict);
console.log(ans);












function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

}