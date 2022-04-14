//O(1) this Constant
const a = 1 + 2;

//O(n) this is Linear
for(let i= 0; i < n; i++;){
}

//O(n^2) nested loop but same input n //this is Quadratic

for(let i = 0; i < n; i++;){
	for(let j= 0; j < n; j++;){
	}
}


//gets faster over time
//O(log n) Logarithmic 
while (n > 0){
n /= 2;
}


//O(n log n)
//Const inner loop while outer loop gets smaller
// if n = 8 we get (8 log 8) = (8 (3))
function nLogNFunc(n){
	let y = n;
	while (n > 1){
		n = Math.floor(n/2);
		for(let i = 1; i <= y; i++){
			console.log(i)
		}
	}
}

//Time Complexity
//o(1) - Constant
//o(log n) - Logarithmic
//o(n) - Linear
//o(n log n) - Loglinear 
//o(n^2) - Quadratic
//o(2^n) - Exponetial
//o(n!) - Factorial



// log is base 2 so log2 of a n = 8 would be log2(8) meaning what number is the exponent of 2 given you 8 = 2^3
// so log2(8) = 3 

//fibonacci
//1 1 2 3 5 8 13 21 34 55 
//fibonacci is O(2^n) because is it a recrusive function mean a function that calls itself.

const fib = (n) => {
	if(n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
};

//number 
//number - 1 + number - 2

//print every numbe rin fibonacci
function printFibonacciNumbers(n)
{
    let f1 = 0, f2 = 1, i;
 
    if (n < 1)
        return;
	console.log(f1 + " ");
    for (i = 1; i < n; i++) {
		console.log(f2 + " ");
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
}

//graphs
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
	['PHX', 'LAX'],
	['PHX', 'JFK'],
	['JFK', 'OKC'],
	['JFK', 'HEL'],
	['JFK', 'LOS'],
	['MEX', 'LAX'],
	['MEX', 'BKK'],
	['MEX', 'LIM'],
	['MEX', 'EZE'],
	['LIM', 'BKK'],
];

//Create A Graph

const adjacencyList = new Map();

function addNode(airport){
	adjacencyList.set(airport, []);
}

function addEdge(origin, destination){
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}


//bfs get to BKK
function bfs(start){
	 const visited = new Set();
     const queue = [start];
	while(queue.length > 0 ){

		const airport = queue.shift(); // mutates the queue
		const destinations = adjacencyList.get(airport);

		for(const destination of destinations){
			

			if(destination === 'BKK'){
				console.log('found it ' + airport +' flies to ' + destination);
				
			}

			if(!visited.has(destination)){
				visited.add(destination);
				queue.push(destination);
				console.log(destination);
		    }
	}
  }
}

function dfs(start, visited = new Set()){
	console.log(start);
	visited.add(start);
	const destinations = adjacencyList.get(start);

	for(const destination of destinations){

		if(destination === 'BKK'){
			console.log(`DFS found bankok in steps`);
			return;

		}
		if(!visited.has(destination)){
			dfs(destination, visited);

		}


	}

}


//Graph Iplementation

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));
console.log(adjacencyList);
bfs('PHX');
dfs('PHX');


//Binary search tree
//Main Node

class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}

}

//Binary Search Operations and Creation

class BST{
	constructor(value){
		this.root = new Node(value);
		this.count = 1;
	}

	size(){
		return this.count;
	}



	insert(value){
		this.count++;
		let newNode = new Node(value);
		const searchTree = node =>{
			//if value < node.value go left
			if(value < node.value){
				//if no left child, append new node
				if(!node.left){
					node.left = newNode;
				}
				// if left child exist, look left again
				else{
					searchTree(node.left);
				}
			}
			//if value > node.value, go right
			else if(value > node.value){
				// if no right child, append new  node
				if(!node.right){
					node.right = newNode;
				}
				// if right child exist, look right again
				else{
					searchTree(node.right);
				}
			}
		}
		searchTree(this.root);
	}

	min(){
		// start at root , create variable for current node we are looking at
		 let currentNode = this.root;

		 //continues traversal left until no more children, while there exist a left child node look left
		 while(currentNode.left){
		 	currentNode = currentNode.left
		 }

		 return currentNode.value
	}

	max(){
		// start at root , create variable for current node we are looking at
		 let currentNode = this.root;

		 //continues traversal right until no more children, while there exist a right child node look right
		 while(currentNode.right){
		 	currentNode = currentNode.right
		 }

		 return currentNode.value
	}

	contains(value){
		let currentNode = this.root;

		while(currentNode){
			if (value === currentNode.value){
				return true;
			}
			if(value < currentNode.value){
				currentNode = currentNode.left;
			
		}else{
			currentNode = currentNode.right;
		}

		return false;
	}

}

	//DFS branch by branch

	//in-order 
	//left, root, right
	//2, 3, 12, 15, 28, 36, 39
	dfsInorder(){
		let result = [];

		const traverse = node => {
			//if left child exist, go left agaim
			if(node.left)traverse(node.left)
			//capture root node value
			result.push(node.value)
			//if right child exists, go right again
			if(node.right)traverse(node.right)
		}
		traverse(this.root);
		return result;
	}

	//pre-order
	//root, left, right
	//15, 3, 2, 12, 36, 28, 39
	dfsPreorder(){
		let result = [];

		const traverse = node => {
			//capture root node value
			result.push(node.value)

			//if left child exist, go left agaim
			if(node.left) traverse(node.left)
			
			//if right child exists, go right again
			if(node.right) traverse(node.right)
		}
		traverse(this.root);
		return result;

	}


	//post-order
	//left, right, root 
	//2, 12, 3, 28, 39, 36, 15
	dfsPostorder(){
		let result = [];
		const traverse = node => {
			
			//if left child exist, go left agaim
			if(node.left) traverse(node.left)

			//if right child exists, go right again
			if(node.right) traverse(node.right)	
			
			//capture root node value
			result.push(node.value)

			
		}
	    traverse(this.root);
		return result;
	}

	//BFS level by level
	//use a queue
	//15, 3, 36, 2, 12, 28, 39
	bfs(){
		let result = [];
		let queue = [];

		queue.push(this.root);

		while(queue.length) {
			//removes first item from queue
			let currentNode = queue.shift();

			result.push(currentNode.value);

			if(currentNode.left){
				queue.push(currentNode.left);
			}
			if(currentNode.right){
				queue.push(currentNode.right);
			}
		}

		return result;
	}



}

//test BST

//initilize class
const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst

bst.size();

bst.min();

bst.max();



//Create A Linked List
class LinkedList{
	consturctor(){
		this.head = this.tail = null;
	}
	
	//append to end of list / tail
	append(value){

		if(!this.tail){
			this.head = this.tail = new Node(value);
		}
		else{
			let oldTail = this.tail;
			this.tail = new Node(value);
			oldTail.next = this.tail;
			this.tail.prev = oldTail;
		}
	}	
		//add at beginning of list / head
	prepend(value){
			//if list is empty
		if(!this.head){
			this.head = this.tail = new Node(value)
		}
		else{
			let oldHead = this.head;
			this.head = new Node(value);
			oldHead.prev = this.head;
			this.head.next = oldHead;


		}
	}

	/*delete(){

	}*/

	deleteHead(){
		if(!this.head){
			return null;
		}
		else{

			let removeHead = this.head;
			//if 1 node left
			if(this.head === this.tail){
				this.head = this.tail = null;
			}else{
				this.head = this.head.next;
				this.head.prev = null;
			}
			return removeHead.value
		}
	}

	deletelTail(){
		//if list is empty
		if(!this.tail){
			return null;
		}
		else{
			let removedTail = this.tail;
			//if 1 node left
			if(this.head === this.tail){
				this.head = this.tail = null;
			}else{
				this.tail = this.tail.prev
				this.tail.next = null
			}
			return removedTail.value;
		}

	}

	search(value){
		let currentNode = this.head;

		while(currentNode){
			if(currentNode.value === value){
				return currentNode;
			}
			currentNode = currentNode.next;
		}
		return null;
	}
}

class Node{
	
	constructor(value, prev, next){
	this.value = value;
	this.prev = prev || null; //sets a deafult value of null is the prev value is not given, same for next.
	this.next = next || null;
	}
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);


function fizzBuzz(n) {
    
    /*let hold = n - (n -1)
    for(let i = 1; i < n +1; i++ ){
    if(hold % 15 == 0) console.log('Fizzbuzz');
    else if(hold % 3 == 0) console.log('Fizz');
    else if(hold % 5 == 0)console.log('Buzz');
    else console.log(i)
    hold++;
    }*/
    
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }

}






















































































 