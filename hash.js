//high speed lookups, insert, delete, no order maintained
//implement assoc arrays or mappings of key-value pairs. common way to implement objects. efficient!
//usually strings (keys) to numbers (hashes) by a hash function. hashes can have buckets of data.
//example: keys (name as string) passed through hash function gives hash (number) with buckets of info storing phone number
//functions: add, remove, lookup

var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};
  


let HashTable = function() {
    let storage = [];
    const storageLimit = 14; //number of b=uckets in array

    //utility for this example
    this.print = function() {
        console.log(storage)
    }

    this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                storage[index][i][1] = value;
                inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
};
  

console.log(hash('beau', 9))
console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux')) //penguin
ht.print(); 
/*
there are 14 buckets set on line 19
  <3 empty items>,
  [ [ 'tux', 'penguin' ] ],
  <3 empty items>,
  [ [ 'beau', 'person' ] ],
  <4 empty items>,
  [ [ 'fido', 'dog' ] ],
  [ [ 'rex', 'dinosour' ] ]
]
*/