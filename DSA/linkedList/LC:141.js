// Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    appendAtEnd(value) {
        const newNode = new Node(value)
        if (!this.head) {
            newNode.next = this.head
            this.head = newNode
        }
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    /**
     * We have 2 Approaches ===>>>>
     *      1.) Using Hash set() ---> O(n) and O(n)
     *      2.) Using Floyd's Tortoise and Hare Algorithm ---> O(n) and O(1)
     */

    // Using Hash set => O(n) / O(n)

    /**if(!this.head || !this.head.next){
        return false
    }
    let set = new Set()
    let current = this.head
    while(current){
        if(set.has(current)){
            return true
        }
        else{
            set.add(current)
            current = current.next
        }
    }
    return false
    */

    // ------------------------------------------------------------------------------------

    // We have use Floyd's Tortoise & Hare Algorithm --> 
    /**
     *  1.) Take two pointers slow and fast.
     *  2.) Check if fast and fast.next !== null 
     *  3.) Move slow by 1 and move fast by 2(twice as slow)
     *  4.) Check if both slow and fast points at same node at same time then there is a cycle in LL
     *  5.) If null comes then there is no cycle in LL
     */

    hasCycle() {
        if (!this.head || !this.head.next) {
            return false; // No cycle if the list is empty or has only one node
        }
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (slow == fast) {
                return true
            }
        }
        return false
    }

    print() {
        let current = this.head
        let result = []
        while (current) {
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('->'))
    }
}

const linkedList = new LinkedList()

linkedList.appendAtEnd(1)
linkedList.appendAtEnd(2)
linkedList.appendAtEnd(3)
linkedList.appendAtEnd(4)

console.log("Does the linked list have a cycle?", linkedList.hasCycle());

linkedList.print()

//  Uncomment below line to return `true` for hasCycle
linkedList.head.next.next.next.next = linkedList.head.next;

console.log("Does the linked list have a cycle?", linkedList.hasCycle());


