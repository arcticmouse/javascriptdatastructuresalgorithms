//partially ordered binary tree
//max heap: all parent nodes equal to or greater than child nodes (biggest nums on top, smallest on bottom)
//min heap: all child nodes greater than or euqal to parent nodes. (smallest on top, biggest on bottom)
//order on a row doesnt matter
//complete binary trees: all levels are fully filled, last level filled from left to right (can be partially filled)
//usually implemented as arrays
/*
equations for indexes in array:
left child: index * 2
right child: index * 2 + 1
parent: Math.floor(index / 2)
*/

let MinHeap = function() {
	
	let heap = [null];
	
	this.insert = function(num) {
		heap.push(num); //push num onto end of heap
		if (heap.length > 2) { //length more than 2 aka more than one item the heap
			let idx = heap.length - 1; //find last index in heap
			while (heap[idx] < heap[Math.floor(idx/2)]) { //node at last index < it's parent move it up!
				if (idx >= 1) { //if not at root
                    //es6 destructring syntax, switch node we just inserted with the second one
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2); //index set to the new parent node
					} else {
						break;
					};
				}; //keep switching node with parent node until it isnt smaller
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1]; //remove the smallest/top/first node
        //now rearrange array!
		if (heap.length > 2) { //if more than 1 node in the tree
			heap[1] = heap[heap.length - 1]; //last node in array gets moved to first
			heap.splice(heap.length - 1); //shorten array by one
			if (heap.length == 3) { //only 2 numbers in the tree
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1; //index
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) { //while root >= left || root >= right, move it down
				if (heap[left] < heap[right]) { //if left > right, switch left with right
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i //set index to left node
				} else { 
					[heap[i], heap[right]] = [heap[right], heap[i]]; 
					i = 2 * i + 1; //set index to right node
				};
				left = 2 * i; //set these to ones just passed down
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) { //at very bottom of the tree, break out of loop
					break;
				};
			};
		} else if (heap.length == 2) { //only 1 element in array cut it off
			heap.splice(1, 1);
		} else { //0 elements in array
			return null;
		};
		return smallest;
	};
  
	this.sort = function() { ///O(nlogn)
        //least to greatest order
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove()); //remove elements on top of tree and push into result
		};
		return result;
	};

};

let MaxHeap = function() {
	
	let heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};