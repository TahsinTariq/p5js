var startTime;
var target_minutes = 15;
var target = minuteToFrame(target_minutes);
function setup() {
	// createCanvas(640, 480);
	createCanvas(windowWidth, windowHeight);
	// background(0);
	frameRate(30);
	// startTime = performance.now();
	// get start time
	// console.log(startTime);
	// console.log(target);
	colorMode(HSB, 360, 100, 100);
}
function windowResize() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	// end = performance.now();
	c1 = color(0, 90, 90);
	c2 = color(359, 85, 90);
	// time_passed = Math.round((end - startTime) / 1000)
	// console.log(`Time passed: ${time_passed} seconds`);
	// console.log(frameCount);
	val = map(frameCount % target, 1, target, 0, 1);
	// console.log(val);
	c = lerpColor(c1, c2, val);
	// console.log(`c: ${hue(c)}`);
	background(c);
}

// minutes to seconds
function minutesToSeconds(minutes) {
	return minutes * 60;
}

// Seconds to minutes
function secondsToMinutes(seconds) {
	var minutes = Math.floor(seconds / 60);
	return minutes;
}

// get minute from time
function getMinute(time) {
	var minute = Math.floor(time / 60000);
	return minute;
}


// minute to frame
function minuteToFrame(min) {
	return min * 30 * 60;
}

// frame to minute
function frameToMinute(frame) {
	return frame / (30 * 60);
}