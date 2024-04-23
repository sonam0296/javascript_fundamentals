/**Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807. **/

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

    appendAtEnd(value){
        const newNode = new Node(value)
        if (!this.head) {
            newNode.next = this.head
            this.head = newNode
        }
        else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            newNode.next = null
            current.next = newNode
        }
    }

    addTwoNumbers(l1, l2){
        // create a dummy node
        let dummy = new Node()
        let current = dummy
        // keep track of carry
        let carry = 0
        console.log(l1, l2)
        // Loop till l1 or l2 or carry is there
        while(l1 || l2 || carry){
            //  get the values from l1 and l2
            let v1 = l1 ? l1.value : 0
            let v2 = l2 ? l2.value : 0

            // Add up v1, v2 and carry
            let value = v1 + v2 + carry
            // Get carry
            carry = Math.floor(value / 10)
            value = value % 10
            current.next = new Node(value)
            // update pointers
            current = current.next
            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next : null
        }
        let result = []
        while(dummy.next){
            result.push(dummy.next.value)
            dummy = dummy.next
        }
        return result;
    }

    print(){
        let current = this.head
        let result = []
        while(current){
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('->'))
    }
}

const ll1 = new LinkedList()
ll1.appendAtEnd(2)
ll1.appendAtEnd(4)
ll1.appendAtEnd(3)

const ll2 = new LinkedList()
ll2.appendAtEnd(5)
ll2.appendAtEnd(6)
ll2.appendAtEnd(4)

console.log("Linked List 1: ")
ll1.print()
console.log("Linked List 2: ")
ll2.print()

const linkedList1 = new LinkedList()
const resultHead = linkedList1.addTwoNumbers(ll1.head, ll2.head);
console.log("Sum Linked List:", resultHead);
linkedList1.head = resultHead;
linkedList1.print();
