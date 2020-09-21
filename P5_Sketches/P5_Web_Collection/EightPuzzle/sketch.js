// import { Heap } from 'heap-js';
const numbers = [2, 3, 7, 5];

Heap.heapify(numbers);
console.log(numbers); //> [ 2, 3, 5, 7 ]

Heap.heappush(numbers, 1);
console.log(numbers);
let r;
let path = [];
let board = [
	["0", "5", "4"],
    ["1", "6", "2"],
    ["7", "3", "8"]
];
<<<<<<< Updated upstream
actions = [
	up = [0,1],
	down = [0, -1],
	left = [-1,0],
	right = [1,0]
];
=======
let actions = {
	up   : [ 0,-1],
	down : [ 0, 1],
	left : [-1, 0],
	right: [ 1, 0]
};
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
			}
			if(keyCode === DOWN_ARROW || key =='s'){
=======
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
	// if(key == 'r'){
	// 	b = boardtostring(board)
 //        if parity(b)%2 == parity(goal)%2:
 //            console.log('SEARCHING ... ... ... ...')
 //            AStar(b, goal)
 //        else: console.log("UNSOLVABLE")
	// }
}
>>>>>>> Stashed changes

			}
<<<<<<< Updated upstream
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
=======
		}
	}
}

// function parity(S):
//     S = S.replace("0","")
//     count = 0
//     for (i in board){
// 		for (j = i; j<board.length; j++)
//             if (S[i]>S[j])
//                 count +=1
//     return count

// class node{
// 	constructor(current, parent, gcost){
// 		this.parent = parent;
// 		this.gcost = gcost;
// 		this.h = getHeuristic(current);
// 		this.child = generatechild(current);
// 	}
// }

// function route(v1, v2):
//     if parents[v2] != 'NONE':
//         route(v1, parents[v2])
//     print(v2)
// 	path.push(v2)

// def boardtostring(Board):
//     string = ""
//     for (i in Board){
//         for j in i:
//             string+=j
//     }
//     return string

// function AStar(v1, v2){
// 	let heapq = require('heapq');
//     parents = {}
//     searched = []
//     fcost = {}
//     queue = {}

//     parents[v1] = "NONE"
//     gcost[v1] = 0
//     fcost[v1] = h(v1)
//     queue[v1] = fcost[v1]
//     def lowestCost(d1):
//         hash_ = generatechild(d1);
//         for n, c in hash_.items():
//             if c + gcost[d1] < gcost[n] and n not in searched:
//                 gcost[n] = c + gcost[d1]
//                 fcost[n] = gcost[n] + h(n)
//                 parents[n] = d1
//                 if n not in queue.keys():
//                     queue[n] = fcost[n]
//     while queue:
//         x = sorted(queue, key=queue.get, reverse=True)
//         node= x.pop()
//         queue.pop(node)
//         searched.append(node)
//         if node == v2:
//             try{
//                 print("found");
//                 rout(v1, v2);
//         	}
//             catch{
//                 print('No path exists');
//             }
//             return None
//         lowestCost(node)
//     print('NO path Found')
// }

// let {
// 	heapify ,
// 	heappop ,
// 	heappush ,
// 	heappushpop ,
// 	heapreplace ,
// 	merge ,
// 	nlargest ,
// 	nsmallest ,
// } = heapq;
>>>>>>> Stashed changes
