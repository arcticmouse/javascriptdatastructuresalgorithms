//collection of nodes which represent a sequence
//constistent timing of insert & delete, dont know how many items will be in list, dont need random access to elements //https://stackoverflow.com/questions/393556/when-to-use-a-linked-list-over-an-array-array-list
/*
 ARRAY                     - vs -              LINKED LIST  
fixed size                                      dynamic size
inefficient insert/delete                       efficient insert/delete
random access/efficient indexing                no random access
may have much memory waste                      no memory waste
sequential access faster                        sequential access slow
[elements in continguous memory location]       [elements not in continguous memory locations]
*contiguous: sharing a common border; touching.
*/
//functions: size, head, add, remove, isEmpty, indexOf, elementAt, addAt, removeAt

function LinkedList() { 
    var length = 0; 
    var head = null; 
  
    var Node = function(element){
      this.element = element; 
      this.next = null; 
    }; 
  
    this.size = function(){
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){
      //add at the end
      var node = new Node(element);
      if(head === null){
          head = node;
      } else {
          var currentNode = head;
  
          while(currentNode.next){
              currentNode  = currentNode.next;
          }
  
          currentNode.next = node;
      }
  
      length++;
    }; 
  
    this.remove = function(element){
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element){
          head = currentNode.next;
      } else {
          //while node we are on does not equal the prev node, keep jumpingh to the next node until we find what we look for
          while(currentNode.element !== element) {
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          //found!! 
          previousNode.next = currentNode.next;
      }
  
      length --;
    };
    
    this.isEmpty = function() {
      return length === 0;
    };
  
    this.indexOf = function(element) {
      //have to hop from node to node until find the element
      var currentNode = head;
      var index = -1;
  
      while(currentNode){
          index++;
          if(currentNode.element === element){
              return index;
          }
          currentNode = currentNode.next;
      }
  
      return -1;
    };
  
    this.elementAt = function(index) {
      //keep hoping until count == index and return the element  
      var currentNode = head;
      var count = 0;
      while (count < index){
          count ++;
          currentNode = currentNode.next
      }
      return currentNode.element;
    };
    
    
    this.addAt = function(index, element){
      //add in the middle of the list
      var node = new Node(element);
  
      var currentNode = head;
      var previousNode;
      var currentIndex = 0;
  
      if(index > length){
          return false;
      }
  
      if(index === 0){
          node.next = currentNode;
          head = node;
      } else {
          while(currentIndex < index){
              currentIndex++;
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          node.next = currentNode;
          previousNode.next = node;
      }
      length++;
    }
    
    this.removeAt = function(index) {
      var currentNode = head;
      var previousNode;
      var currentIndex = 0;
      if (index < 0 || index >= length){
          return null
      }
      if(index === 0){
          head = currentNode.next;
      } else {
          while(currentIndex < index) {
              currentIndex ++;
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          previousNode.next = currentNode.next
      }
      length--;
      return currentNode.element;
    }
  
  } 
  
  var conga = new LinkedList();
  conga.add('Kitten');
  conga.add('Puppy');
  conga.add('Dog');
  conga.add('Cat');
  conga.add('Fish');
  console.log(conga.size()); //5
  console.log(conga.removeAt(3)); //Cat
  console.log(conga.elementAt(3)); //Fish
  console.log(conga.indexOf('Puppy')); //1
  console.log(conga.size()); //4