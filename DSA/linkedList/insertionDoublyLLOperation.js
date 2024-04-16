// Create node class

class Node {
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    insertAtBeginning(value){
        const newNode = new Node(value)
        // Check if Linked list is empty or not if empty then the pointer of head and tail will be newNode
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else{  // If LL is not empty then insert newNode at beginning by pointing newNode.next to head and head.prev will point to newNode and now newNode is head
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    insertAtEnd(value){
        const newNode = new Node(value)
        // check if LL is empty
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            newNode.next = current.next
            newNode.prev = current
            current.next = newNode
        }
    }

    insertAtMiddle(value, position){
        const newNode = new Node(value)
        //  Check if this.head is null ie LL is empty
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            let current = this.head
            let count = 0
            while(current && count < position - 1){
                current = current.next
                count ++
            }
            newNode.next = current.next
            newNode.prev = current
            current.next = newNode
            console.log(current, count)
        }
    }

    // Deletion At start
    deleteAtStart(){
        // Base case check if LL is empty or not
        if(!this.head){
            console.error("Linked list is empty")
            return
        }
        else{
            this.head = this.head.next
            this.tail = this.tail.next
        }
    }

    deleteAtEnd(){
        // Base case check if LL is empty or not
        if(!this.head){
            console.error("Linked list is empty")
            return
        }
        else{
            let current = this.head
            while(current.next.next){ // check if head.next.next is null
                current = current.next
            }
            current.next = null
        }
    }

    deleteAtMiddle(position){
        if(!this.head && position < 0){
            console.error("Linked list is empty")
            return
        }
        else{
            let current = this.head
            let count = 0
            while( current && count < position - 1){
                current = current.next
                count ++
            }
            current.next = current.next.next
            current.next.prev = current
        }
    }

    // Traverse
    print(){
        let current = this.head;
        let results = []
        while (current) {
            results.push(current.value)
            current = current.next;
        }
        console.log(results.join('->'))
    }
}

const linkedList = new LinkedList()

linkedList.insertAtBeginning(12)
linkedList.insertAtBeginning(10)
linkedList.insertAtBeginning(2)

linkedList.insertAtEnd(11)
linkedList.insertAtEnd(-1)
linkedList.insertAtEnd(100)

linkedList.insertAtMiddle(65, 2)
linkedList.insertAtMiddle(8, 4)

// linkedList.deleteAtStart()
// linkedList.deleteAtStart()
// linkedList.deleteAtEnd()
linkedList.deleteAtMiddle(2)
linkedList.deleteAtMiddle(5)

linkedList.print()