let r;
let path = [];
let board = [
	["0", "5", "4"],
    ["1", "6", "2"],
    ["7", "3", "8"]
];
let goal = [
	["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "0"]
];
let actions = {
	up   : [ 0,-1],
	down : [ 0, 1],
	left : [-1, 0],
	right: [ 1, 0]
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
	if(key == 'r'){
		b = boardtostring(board)
		goal = boardtostring(goal)
        if (parity(b)%2 == parity(goal)%2){
            console.log('SEARCHING ... ... ... ...')
            AStar(b, goal)
        }
        else{
        	console.log("UNSOLVABLE")
        }
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
				else{
					return 1;
				}
			}
		}
	}
}

function parity(S){
    S = S.replace("0","");
    count = 0;
    for (let i = 0; i < S.length; i++){
		for (let j = i+1; j<S.length; j++){
            if (S[i]>S[j]){
                count +=1;
            }
		}
    }
    return count;
}

class node{
	constructor(current, parent, gcost){
		this.parent = parent;
		this.gcost = gcost;
		this.h = getHeuristic(current);
		this.child = generatechild(current);
	}
}

function boardtostring(Board){
    let string = "";
    for (i in Board){
        for (j in Board[i]){
            string+=Board[i][j];
        }
    }
    return string;
}
let gcost = {}
function AStar(v1, v2){
	function route(v1, v2){
	    if (parents[v2] != 'NONE'){
	        route(v1, parents[v2])
	    }
	    print(v2)
		path.push(v2)
	}
    parents = {}
    searched = []
    fcost = {}
    queue = {}

    parents[v1] = "NONE"
    gcost[v1] = 0
    fcost[v1] = h(v1)
    queue[v1] = fcost[v1]
    while (queue.length != 0){
        x = sortDict(queue);
        node = Object.keys(x)[0];
        delete queue[node];
        searched.push(node);
        if (node == v2){
            try{
                print("found");
                rout(v1, v2);
        	}
            catch{
                print('No path exists');
            }
            return None
        }
        hash_ = generatechild(node);
        for(let[n, c] of Object.entries(hash_)){
			// console.log(action, val);
            if (c + gcost[node] < gcost[n] && !searched.hasOwnProperty(n)){
                gcost[n] = c + gcost[node];
                fcost[n] = gcost[n] + h(n);
                parents[n] = node;
                if (!queue.hasOwnProperty(n)){
                    queue[n] = fcost[n];
                }
            }
        }
    }
    print('NO path Found')
}

function sortDict(dictionary){
	var items = Object.keys(dictionary).map(function(key) {
	  return [key, dictionary[key]];
	});

	items.sort(function(first, second) {
	  return second[1] - first[1];
	});

	return Object.assign({}, ...items.map((x) => ({[x[0]]:x[1]})))
}

function h(v1){
    g2 = stringtoboard(goal)
    Board = stringtoboard(v1)
    sum =0;
    for (i in Board){
        for (j in Board[i]){
            for (k in g2){
                for (l in g2[i]){
                    if (Board[i][j] == g2[k][l]){
                        sum += abs(i-k) +abs(j-l)
                    }
                }
            }
        }
    }
}

function generatechild(node){
    no = stringtoboard(node)
    child = {}
    i = 1
    for(let[action, val] of Object.entries(actions)){
		v = swap(val)
		name = boardtostring(no)
        child[name] = h(name)
        gcost[name] = 999999
        if (v !=1){
			swap(math.multiply(val, -1))
		}
	}
    return child
}
function stringtoboard(v1){
    Board = [];
    for (let i = 0; i < board.length; i++){
        Board.push([]);
        for (let j = 0; j < board[i].length; j++){
            Board[i].push([]);

            Board[i][j] = v1[board.length*i + j];
            console.log(Board[i]);
        }
    }
    return Board
}