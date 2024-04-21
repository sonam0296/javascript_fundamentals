// Sort List
// Given the head of a linked list, return the list after sorting it in ascending order.

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

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

    appendAtStart(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
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

    appendAtMiddle(value, position) {
        const newNode = new Node(value)
        if (!this.head) {
            throw new Error("Linked List is empty!!")
        }
        if (position == 0) {
            newNode.next = this.head
            this.head = newNode
        }
        else {
            let current = this.head
            let count = 0
            while (current && count < position - 1) {
                current = current.next
                count++
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    /**
     * For Sorting the linked list we are using Merge Sort --- O(nlogN) Time and O(logN) space
     * 1.) Base Case -> head and head.next is null then return head
     * 2.) Split the LL in two list =>>>> Initialize left pointing to head & right will be the middle node so will call getMid() function & point right.next to null
     * 3.) Sort the list by recursively calling sortList() function for both left and right
     * 4.) Merge the sorted list by comparing each node with each order and return
     */

    sortLinkedList(head = this.head) {
        // Base Case
        if (!head || !head.next) {
            return head;
        }
        // Split the list in two
        let [left, right] = this.splitList(head);
        // sort the list recursively
        left = this.sortLinkedList(left);
        right = this.sortLinkedList(right);
        // Merge the list
        return this.mergeList(left, right);
    }

    splitList(head) {
        // Using slow and fast approach but here fast will be pointing to 2nd node at first b'coz we want the middle node
        let slow = head
        let fast = head
        let prev = null
        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        // Break the list into two parts
        if (prev) {
            prev.next = null; // Disconnect the first half from the second half
        }
        return [head, slow]
    }

    mergeList(left, right) {
        let dummy = new Node(0); // Create a dummy node to simplify the merging process
        let tail = dummy;
        // Merge the two sorted lists
        while (left && right) {
            if (left.value < right.value) {
                tail.next = left;
                left = left.next;
            } else {
                tail.next = right;
                right = right.next;
            }
            tail = tail.next;
        }
        // Connect the remaining nodes, if any
        tail.next = left || right;
        // Traverse to the end of the merged list to find its head
        let mergedHead = dummy.next;
        while (tail.next) {
            tail = tail.next;
        }
        // Return the head of the merged list
        return mergedHead; // Return the head of the entire sorted list
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

const linkedListSort = new LinkedList()

linkedListSort.appendAtEnd(1)
linkedListSort.appendAtEnd(3)
linkedListSort.appendAtStart(4)

linkedListSort.appendAtMiddle(2, 1)

linkedListSort.print()

// console.log("Sorted Linked List ==>>", linkedListSort.sortLinkedList())

const sortedList = linkedListSort.sortLinkedList();
console.log("Sorted Linked List:");
linkedListSort.head = sortedList; // Update the head of the linked list
linkedListSort.print();