let r;
let board = [
	["0", "5", "4"],
    ["1", "6", "2"],
    ["7", "3", "8"]
];
actions = [
	up = [0,1],
	down = [0, -1],
	left = [-1,0],
	right = [1,0]
];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	r = 100;
	textAlign(CENTER, CENTER);
	textSize(100);
	button = createButton('click me');
	button.position(19, 19);
	button.mousePressed(null);
	for(action in actions){
		console.log(action);
	}
}

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

function keyPressed(){
	for (let i = 0; i< board.length;i++){
		for (let j = 0; j< board[1].length;j++){
			if(keyCode === UP_ARROW || key =='w'){

			}
			if(keyCode === DOWN_ARROW || key =='s'){

			}
			if(keyCode === LEFT_ARROW || key =='a'){

			}
			if(keyCode === RIGHT_ARROW || key =='d'){

			}
}

// function swap( a,  b,  c,  d){
//     t = board[a][b]
//     board[a][b]= board[c][d]
//     board[c][d] = t
// }