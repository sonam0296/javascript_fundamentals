// Delete Node in a Linked List

// There is a singly-linked list head and we want to delete a node node in it.

// You are given the node to be deleted node. You will not be given access to the first node of head.

// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    append(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    appendAtEnd(value){
        const newNode = new Node(value)
        let current = this.head
        while(current.next){
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }

    // Get node reference which need to be deleted
    getNode(node){
        let current = this.head
        while(current.value !== node){
            current = current.next
        }
        return current
    }

    // As per the question will delete the node now
    deleteNode(node){
        let next = node.next.next
        node.value = node.next.value
        node.next = next 
    }

    print(){
        let current = this.head
        let results = []
        while(current){
            results.push(current.value)
            current = current.next
        }
        console.log(results.join('->'))
    }
}

const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(5)
linkedList.append(4)
linkedList.appendAtEnd(9)

let nodeHead = linkedList.getNode(5)

// Delete node (5) here we don't have access to head
linkedList.deleteNode(nodeHead)

linkedList.print()