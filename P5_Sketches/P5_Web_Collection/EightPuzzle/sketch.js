let r;
let board = [
	["0", "5", "4"],
    ["1", "6", "2"],
    ["7", "3", "8"]
];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	r = 100;
	textAlign(CENTER, CENTER);
	textSize(100);
	button = createButton('click me');
	button.position(19, 19);
	button.mousePressed(null);}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

	for (let i = 0; i< board.length;i++){
		for (let j = 0; j< board[1].length;j++){
			rect(i*r, j*r, r,r);
			if (board[j][i] != 0){
				text(board[j][i], i*r+r/2, j*r+r/2);
			}
		}
	}
}