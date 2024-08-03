class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null
    }

    // Append at start  -- O(1)
    appendNodeAtStart(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    // Append at end --- O(n)
    appendNodeAtEnd(value) {
        let newNode = new Node(value)
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

    // Append node in middle -- O(n)
    appendNodeAtMiddle(value, pos) {
        let newNode = new Node(value)
        if (!this.head && pos < 0) {
            throw new Error("We can't add the node in middle")
        }
        else if (pos == 0) {
            newNode.next = this.head
            this.head = newNode
        }
        else {
            let current = this.head
            let count = 0
            while (current && count < pos - 1) {
                current = current.next
                count++
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    // Delete from start -- O(1)
    deleteFromStart() {
        //Check if LL is empty
        if (!this.head) {
            throw new Error('LL is empty')
        }
        this.head = this.head.next
    }

    // Delete from end --- O(n)
    deleteFromEnd() {
        //Check if LL is empty
        if (!this.head) {
            throw new Error('LL is empty')
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }

    // Delete at any position --- O(n)
    deleteFromAnyPosition(pos) {
        //Check if LL is empty
        if (!this.head || pos < 0) {
            throw new Error('LL is empty')
        }
        else if (pos == 0) {
            this.deleteFromStart()
        }
        else {
            let current = this.head
            let count = 0
            while (current && count < pos - 1) {
                current = current.next
                count++
            }
            current.next = current.next.next
        }
    }

    // Reverse a linked list --- O(n)
    reverseLL(){
        if(!this.head){
            return "Empty LL"
        }
        else{
            let current = this.head
            let prev = null
            while(current){
                let nextNode = current.next
                current.next = prev
                prev = current
                current = nextNode
            }
            let res = []
            while(prev){
                res.push(prev.value)
                prev = prev.next
            }
            console.log('Reverse Linked List => ',res.join('->'))
            return res
        }
    }

    reverseSingleLL(){
        if (!this.head) {
            return this.head
        }
        let current = this.head
        let prev = null
        while(current){
            let currHead = current.next
            current.next = prev
            prev = current
            current = currHead
        }
        let res = []
        while(prev){
            res.push(prev.value)
            prev = prev.next
        }
        console.log(res.join('->'))
        // return prev
    }

    // Search node in LL --- O(n)
    searchInLL(value){
        if(!this.head){
            return "LL is empty"
        }
        let current = this.head
        let position = 0 // Keep track at which position node is present
        while(current){
            if(current.value == value){
                console.log(`Node => ${value} is present at position => ${position}`)
                return position // Return position
            }
            current = current.next
            position ++
        }
    }

    // Finding Middle node -- O(n)
    findMiddleNode() {
        if (!this.head) {
            return 'LL is empty'
        }
        let slow = this.head
        let fast = this.head.next
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        console.log(`Middle node is => ${slow.value}`)
        return slow
    }

    divideLinkList(){
        let left = this.head
        let right = this.findMiddleNode(this.head)
        let temp = right.next
        right.next = null
        right = temp

        console.log(left, right, '::::findMiddleNode')
    }

    // Access --- O(n)
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

const singleLL = new SingleLinkedList()

// Adding node in begining
singleLL.appendNodeAtStart(4)
singleLL.appendNodeAtStart(3)
singleLL.appendNodeAtStart(2)
singleLL.appendNodeAtStart(1)

// Adding node at end
singleLL.appendNodeAtEnd(5)
singleLL.appendNodeAtEnd(6)

// Adding node at middle
singleLL.appendNodeAtMiddle(3.5, 3)
singleLL.appendNodeAtMiddle(0, 0)

// Delete from start
singleLL.deleteFromStart()  /// O got deleted

//Delete from end
singleLL.deleteFromEnd() /// 6 got deleted

// Delete at any position
singleLL.deleteFromAnyPosition(3) // 3.5 got deleted

// Find middle node
singleLL.findMiddleNode()

// Searching
singleLL.searchInLL(3)

// Divide the Linked list
// singleLL.divideLinkList()

singleLL.print()

// Reverse LL 
// singleLL.reverseLL()
singleLL.reverseSingleLL()

singleLL.print()