let r;
let board = [
	["0", "5", "4"],
    ["1", "6", "2"],
    ["7", "3", "8"]
]
let goal = [
	["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "0"]
];
actions = {
	up :   [ 0,-1],
	down : [ 0, 1],
	left : [-1, 0],
	right :[ 1, 0]
};
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	r = 100;
	textAlign(CENTER, CENTER);
	rectMode(CENTER);
	textSize(100);
	button = createButton('click me');
	button.position(19, 19);
	button.mousePressed(null);
	// for(let[action, val] of Object.entries(actions)){
	// 	console.log(action, val);
	// }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	fill(255);
	rect(0,0,2*r*board.length, 2*r*board.length);
	for (j in board){
		for (i in board[j]){
			let xpos = j*r +r/2;
			let ypos = i*r +r/2;
			noFill();
			rect(xpos, ypos, r,r);
			fill(255,0,0);
			if(board[j][i] != 0 ){
				text(board[j][i], i*r+r/2, j*r+r/2);
			}
		}
	}
}

function keyPressed(){

			if(keyCode === UP_ARROW || key =='w'){
				swap(actions.up);
			}
			if(keyCode === DOWN_ARROW || key =='s'){
				swap(actions.down);
			}
			if(keyCode === LEFT_ARROW || key =='a'){
				swap(actions.left);
			}
			if(keyCode === RIGHT_ARROW || key =='d'){
				swap(actions.right);
			}
		}

function swap(action){
	for (j in board){
		for (i in board[i]){
			if (board[i][j] == 0){
				[x, y] = math.add([j, i], action);
					if((-1 < x && x < board.length)&&(-1 < y && y < board.length)){
						board[i][j] = board[y][x];
						board[y][x] = 0;
						return 0;
					}
			}
		}
	}
}