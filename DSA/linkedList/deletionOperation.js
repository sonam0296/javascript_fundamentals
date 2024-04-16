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

    insertAtBeginning(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    insertAtMiddle(value, position){
        const newNode = new Node(value)
        let current = this.head  
        let count = 0
        while(current && count < position -1){  // Loop & update current & count till current is null && count is less than position -1
            current = current.next 
            count ++
        }
        newNode.next = current.next   // update the newNode.next to null i.e current.next
        current.next = newNode  // update current.next to new node
    }

    insertAtEnd(value){
        const newNode = new Node(value)
        let current = this.head   // keep track of head
        while(current.next){  // Loop till current.next is null
            current = current.next  // Update current value till last value
        }
        newNode.next = current.next // update the newNode.next to null i.e current.next
        current.next = newNode  // update current.next to new node
    }


    // Deletion Operation

    deletionAtStart(){
        if (!this.head) {  // check if head is null or not
            return;
        }
        this.head = this.head.next  // point head to head.next
    }

    deletionAtEnd(){
        if (!this.head) {  // check if head is null or not
            return;
        }
        if (!this.head.next) {  // Check if list has only 2 nodes 
            this.head = null
            return 
        }
        let current = this.head
        while(current.next.next){ // Loop till we get last node's next as null
            current = current.next
        }
        current.next = null  // Set current.next to null
    }

    deletionAtMiddle(position){
        if (!this.head || position < 0) {  // check if head is null or not and aslo if position is positive number
            return;
        }
        if(position === 0){  // check if position is 0 then point head to head.next
            this.head = this.head.next
        }
        let current = this.head
        let count = 0
        while(current && count < position - 1){  // Similar to insertAtmiddle
            current = current.next
            count ++
        }
        current.next = current.next.next
    }

    print(){
        let current = this.head
        let results = []
        while(current){
            results.push(current.value)
            current = current.next
        }
        console.log(results.join(' -> '))
    }
}

const linkedList = new LinkedList()

linkedList.insertAtBeginning(12)
linkedList.insertAtBeginning(1)
linkedList.insertAtBeginning(22)

linkedList.insertAtEnd(15)
linkedList.insertAtEnd(50)
linkedList.insertAtEnd(14)

linkedList.insertAtMiddle(8, 1)
linkedList.insertAtMiddle(10, 4)
linkedList.insertAtMiddle(17, 3)

linkedList.deletionAtStart()
linkedList.deletionAtEnd()
linkedList.deletionAtMiddle(1)
linkedList.print()