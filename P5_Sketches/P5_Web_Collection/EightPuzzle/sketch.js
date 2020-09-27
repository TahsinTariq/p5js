let r;
let path = [];
let board = [
	["0", "5", "4"],
    ["1", "6", "2"],
    ["7", "3", "8"]
];
let Goal = [
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
	size = min(windowWidth, windowHeight);
	r = size/3;
	createCanvas(size, size);
	textAlign(CENTER, CENTER);
	rectMode(CENTER);
	textSize(r);
	strokeWeight(5);
	textPrompt = createP("Press the button if you're stuck and let the AI solve it for you");
	textPrompt.position(size + windowWidth* 5/100, 100);
	textPrompt.style('color', color(255));
	textPrompt.style('font-size', r/5 + 'px')
	textPrompt.style('border', 'none');

	solveButton = createButton('Solve');
	solveButton.position(size + windowWidth* 5/100, 0);
	solveButton.size(windowWidth-size - windowWidth* 10/100, 100);
	solveButton.style('background-color', color(48, 117, 38));
	solveButton.style('color', color(255));
	solveButton.style('font-size', r/5 + 'px')
	solveButton.style('border', 'none');
	solveButton.style('border-radius', '20%');
	solveButton.mousePressed(animateTimeout);
}

function animateTimeout(){
	textPrompt.html('AI thinking ... ...');
	setTimeout(find_solve, 1000);
}

function animateInterval(){
	textPrompt.html('Found Solution');
	delay(1000);
	setInterval(animate, 500);
}

function draw() {
	fill(47, 71, 138);
	rect(0,0,2*r*board.length, 2*r*board.length);
	for (j in board){
		for (i in board[j]){
			let xpos = j*r +r/2;
			let ypos = i*r +r/2;
			noFill();
			if(board[i][j] == 0 ){
				fill(255);
			}
			rect(xpos, ypos, r,r);
			fill(255);
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

function animate(){
	if(path.length > 0){
		board = stringtoboard(path[0]);
		path.splice(path.indexOf(path[0]),1);
	}
	else{
		textPrompt.html('Play yourself and let the AI solve again');
	}
}

function find_solve(){
	b = boardtostring(board)
	goal = boardtostring(Goal)
    if (parity(b)%2 == parity(goal)%2){
        textPrompt.html('AI thinking ... ...');
        AStar(b, goal)
    }
    else{
    	textPrompt.html('UNSOLVABLE');
    }
    setTimeout(animateInterval, 1000);
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
	    // print(v2)
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
    	// console.log("queue   : ", queue);
        // x = sortDict(queue);
        x = sortProperties(queue);
        // console.log("Sorted :", x);
        // node = Object.keys(x)[Object.keys(x).length-1];
        // node = Object.keys(x)[0];
        node = x[0][0];
        // console.log("Popped node:",node);
        delete queue[node];
        searched.push(node);
        if (node == v2){
            try{
                print("found");
                route(v1, v2);
        	}
            catch{
                print('No path exists');
            }
            return 0;
        }
        hash_ = generatechild(node);
        // console.log("Hash :", hash_);
        for(let[n, c] of Object.entries(hash_)){
			// console.log(n, c);
			// console.log(gcost[node], gcost[n]);
            if (c + gcost[node] < gcost[n]){
            	if (searched.includes(n)){
            		continue;
            	}
            	else{
            	// console.log("updating costs and parents");
                gcost[n] = c + gcost[node];
                fcost[n] = (gcost[n] + h(n));
                parents[n] = node;
                // console.log(gcost, fcost, parents);
                if (!queue.hasOwnProperty(n)){
                	// console.log("adding to queue");
                    queue[n] = fcost[n];
                }}
            }

        }
    }
    print('NO path Found')
}

function sortProperties(obj){
  // convert object into array
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); // each item is an array in format [key, value]

	// sort items by value
	sortable.sort(function(a, b)
	{
	  return a[1]-b[1]; // compare numbers
	});
  // console.log(sortable);
	return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}

function h(v1){
    g2 = Goal;
    Board = stringtoboard(v1);
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
    return sum;
}

function generatechild(node_){
    no = stringtoboard(node_)
    function swap_(action){
		for (j in no){
			for (i in no[i]){
				if (no[i][j] == 0){
					[x, y] = math.add([j, i], action);
					if((-1 < x && x < no.length)&&(-1 < y && y < no.length)){
						no[i][j] = no[y][x];
						no[y][x] = 0;
						return 0;
					}
					else{
						return 1;
					}
				}
			}
		}
	}
    // console.log(no);
    child = {}
    i = 1
    for(let[action, val] of Object.entries(actions)){
		v = swap_(val)
		if (v !=1){
			name = boardtostring(no)
			// console.log(name);
	        child[name] = h(name)
	        gcost[name] = 999999
			swap_(math.multiply(val, -1))
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
            // console.log(Board[i]);
        }
    }
    // console.log(Board);
    return Board;
}