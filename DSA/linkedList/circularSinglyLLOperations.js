// Circular Linked List have two parts -->>

/**
 * 1.) Circular Singly Linked List 
 * 2.) Circular Doubly Linked List
 */


// Circular Singly Linked List 

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    appendAtBegin(value){
        const newNode = new Node(value)
        // Check if head is null then newNode.next will point to itself
        if(!this.head){
            newNode.next = newNode // point to itself for circular
            this.head = newNode  // head will also point to newNode
        }
        else{
            // Loop
            let current = this.head
            while(current.next !== this.head){  // Loop till it finds the 1st node
                current = current.next
            }
            // Point newNode to current.next i.e last node to new node
            current.next = newNode
            newNode.next = this.head
            this.head = newNode
        }
    }

    appendAtEnd(value){
        const newNode = new Node(value)
        if(!this.head){
            newNode.next = newNode
            this.head = newNode
        }else{
            let current = this.head
            while(current.next.next !== this.head){
                current = current.next
            }
            current.next.next = newNode
            newNode.next = this.head
        }
    }

    appendAtMiddle(value, position){
        const newNode = new Node(value)
        if(!this.head && position < 0){
            console.error("List is empty or position should be positive")
        }
        else{
            let current = this.head
            let count = 0
            while(current && count < position - 1){
                current = current.next
                count ++
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    deleteAtStart(){
        if (!this.head) {
            console.error("List is empty")
        }
        else{
            let current = this.head
            while(current.next !== this.head){
                current = current.next
            }
            current.next = this.head.next
            this.head = current.next
        }
    }

    deleteAtEnd(){
        if (!this.head) {
            console.error("List is empty")
        }
        else{
            let current = this.head
            while(current.next.next !== this.head){
                current = current.next
            }
            current.next = this.head
        }
    }

    // TODO ::: CHECK FOR POSITION 0 and last node
    deleteAtMiddle(position){
        if(!this.head){
            console.error("List empty")
        }
        else if ( position <= 0) {
            console.error("Invalid Position")
        }
        else if( position === 1){
            this.head = this.head.next
        }
        else{
            let current = this.head
            let count = 0
            while (current && count < position - 1){
                current = current.next
                count++
            }
            //  If position is out of bound i.e current.next  eg ===>>> linkedList.deleteAtMiddle(-1)
            if (!current.next || !current.next.next) {
                console.error("Invalid position");
                return;
            }
            current.next = current.next.next
        }
    }

    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let results = [];
        do {
            results.push(current.value);
            current = current.next;
        } while (current !== this.head);
        console.log(results.join('->'));
    }
}

const linkedList = new LinkedList()
linkedList.appendAtBegin(12)
linkedList.appendAtBegin(15)
linkedList.appendAtBegin(2)

linkedList.appendAtEnd(55)
linkedList.appendAtEnd(100)

linkedList.appendAtMiddle(45, 2)
linkedList.appendAtMiddle(70, 4)

linkedList.deleteAtStart()
linkedList.deleteAtEnd()
linkedList.deleteAtMiddle(1)

// for negative numbers
// linkedList.deleteAtMiddle(-1)

linkedList.print()