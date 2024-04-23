// Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

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
            newNode.next = null
            current.next = newNode
        }
    }

    intersectionOfTwoLL(headA, headB) {
        let current1 = headA
        let current2 = headB
        let l1 = []
        let l2 = []
        while (current1) {
            l1.push(current1.value)
            current1 = current1.next
        }
        while (current2) {
            l2.push(current2.value)
            current2 = current2.next
        }
        console.log(l1, l2)
        while (l1 != l2) {
            console.log(l1.next)
            l1 = l1 ? l1.next : headB
            l2 = l2 ? l2.next : headA
        }
        return l1
    }


    print() {
        let current = this.head
        let result = []
        while (current) {
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('->'));
        return result
    }
}

const ll1 = new LinkedList()
const ll2 = new LinkedList()


ll1.appendAtEnd(1)
ll1.appendAtEnd(9)
ll1.appendAtEnd(1)
ll1.appendAtEnd(2)
ll1.appendAtEnd(4)

console.log("LL1 i.e headA => ", ll1.print());
const headA = ll1

ll2.appendAtEnd(3)
ll2.appendAtEnd(2)
ll2.appendAtEnd(4)

console.log("LL2 i.e headB => ", ll2.print());
const headB = ll2

// console.log("Intersection of two Linked list => ",linkedList160.intersectionOfTwoLL(headA, headB));
const linkedList160 = new LinkedList()
const resultHead1 = linkedList160.intersectionOfTwoLL(ll1.head, ll2.head);
console.log("Intersection Linked List:", resultHead1);
linkedList160.head = resultHead1;
linkedList160.print();