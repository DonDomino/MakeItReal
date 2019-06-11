function Node(val) {
    this.value = val;
    this.next = undefined;
  }
  
  function LinkedList() {
    this.head = null; 
    this.size = 0; 

    this.add = function(val) {
    // creates a new node 
    let node = new Node(val); 

    // to store current node 
    let current; 

    // if list is Empty add the 
    // element and make it head 
    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 

        // iterate to the end of the 
        // list 
        while (current.next) { 
            current = current.next; 
        } 

        // add node 
        current.next = node; 
    } 
    this.size++;
}  
// insert element at the position pos 
// of the list 
    this.insertAt = function(val, pos) { 
    
    if (pos > 0 && pos > this.size) 
        return false; 
    else { 
        // creates a new node 
        let node = new Node(val); 
        let curr, prev; 

        curr = this.head; 

        // add the element to the 
        // first pos 
        if (pos == 0) { 
            node.next = head; 
            this.head = node; 
        } else { 
            curr = this.head; 
            let it = 0; 

            // iterate over the list to find 
            // the position to insert 
            while (it < pos) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 

            // adding an element 
            node.next = curr; 
            prev.next = node; 
        } 
        this.size++; 
    }
}
// finds an element from a given position
this.valueAt = function(pos) { 
    let current = this.head,
        i = 0;

    // traverse the list until you reach either the end or the index
    while ((current !== null) && (i < pos)) {
        current = current.next;
        i++;          
    }

    // return the data if `current` isn't null
    return current !== null 
      ? current.value
      : undefined;
}
    // Devuelve el tamaño de la Linked List    
    this.length = function() {
    return console.log(this.size);
}

// removes an element from the 
// specified location 
    this.removeFrom = function(pos) { 
    if (pos > 0 && pos > this.size) 
        return -1; 
    else { 
        let curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 

        // deleting first element 
        if (pos === 0) { 
            this.head = curr.next; 
        } else { 
            // iterate over the list to the 
            // position to remove an element 
            while (it < pos) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 

            // remove the element 
            prev.next = curr.next; 
        } 
        this.size--; 

        // return the remove element 
        return curr.element; 
    } 
    }
    this.reverse = function(head) {
        let node = head,
            previous,
            tmp;
      
        while (node) {
          // save next before we overwrite node.next!
          tmp = node.next;
      
          // reverse pointer
          node.next = previous;
      
          // step forward in the list
          previous = node;
          node = tmp;
        }
      
        return previous;
      }
}


let list = new LinkedList();

list.add(5);

console.log(list);

list.length();

list.removeFrom(0);

console.log(list);
