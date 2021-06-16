//store key value pairs
//objects
//rapid lookup of stored items based on key values
//functions: clear, delete, entries, forEach, get, has, keys, set, values

let myMap = function() {
	this.collection = {}; //all things in the map
	this.count = 0; //no items in map
	this.size = function() {
		return this.count;
	};
    //add something
	this.set = function(key, value) {
		this.collection[key] = value;
		this.count++;
	};
    //check if map has the key
	this.has = function(key) {
		return (key in this.collection); //'in' returns true if key is in collection
	};
	this.get = function(key) {
		return (key in this.collection) ? this.collection[key] : null;
	};
	this.delete = function(key) {
		if (key in this.collection) {
			delete this.collection[key];
			this.count--;
		}
	};
    //return array of all values in map
	this.values = function() {
		let result = new Array();
		for (let key of Object.keys(this.collection)) {
			result.push(this.collection[key]);
		};
		return (result.length > 0) ? result : null;
	};
    //clear all items from map and set count to 0
	this.clear = function() {
		this.collection = {};
		this.count = 0;
	};
};

let map = new myMap();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('belley button', 1);

console.log(map.get('fingers')); //10
console.log(map.size()); //3
console.log(map.values()); //[2, 10, 2, 1]

//es6 map built in object type
let map2 = new Map();
map2.has('hands');
//returns all keys in map
map2.entries();

let keyObj = {},
    keyFunc = function() {};

map2.set('hello', 'string value');
map2.set(keyObj, 'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value')

console.log(map2.size); //4

console.log(map2.get('hello')); //string value
console.log(map2.get(keyObj)); //obj value
console.log(map2.get(keyFunc)); //func value
console.log(map2.get(NaN)); //NaN value

/* adding to a map
if(map.has(w)) {
	map.get(w).val++
} else map.set(w, {val:1})
*/
/*
    arr.forEach(a => {
        if(map.has(a)){
            map.set(a, map.get(a)+1);
        } else { map.set(a, 1); }
    })
*/

//let sorted = new Map([...map.entries()].sort((a, b) => a[0]-b[0]))