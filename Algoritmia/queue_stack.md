# queue
```javascript
var Node = function(data) {
  this.data = data;
  this.next = null;
  this.head = null;
  this.tail = null;
};

function Queue() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

Queue.prototype.enqueue = function(data) {
  var newNode = new Node(data);

  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++
}

Queue.prototype.dequeue = function() {
  temp = this.head;
  this.head = this.head.next;
  this.size -= 1;
  return temp;
};

Queue.prototype.length = function(){
	return this.size;
}
```
//
# stack
```javascript
var Node = function(data){
  this.data = data;
  this.previous = null;
};

var Stack = function(){
  this.top = null;
  this.size = 0;
};

Stack.prototype.push = function(data) {
  var node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
};

Stack.prototype.pop = function() {
  temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
};

Stack.prototype.length = function(){
	return this.size;
}
```