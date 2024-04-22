/**Find n/k th node in Linked list
Given a singly linked list and a number k. Write a function to find the (N/k)th element, 
where N is the number of elements in the list. We need to consider ceil value in case of decimals.

Example:
Input:
2
6
1 2 3 4 5 6
Output:
3

2
5
2 7 9 3 5
3
Output:
7 */


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
        if(!this.head){
            newNode.next = this.head
            this.head = newNode
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            newNode.next = null
            current.next = newNode
        }
    }

    appendAtMiddle(value, position){
        const newNode = new Node(value)
        if(!this.head || position < 0 ){
            throw new Error("Linked list is empty")
        }
        if(position === 0){
            newNode.next = this.head
            this.head = newNode
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

    findkNthNode(n){
        //  Find the length
        let current = this.head
        let count = 0
        while(current.next){
            current = current.next
            count++
        }
        console.log(count)
        const position = Math.ceil(count / n)

        // Reset current and loop through position
        current = this.head
        for (let i = 1; i < position; i++) {
            current = current.next
        } 
        return current
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

const linkedList = new LinkedList()

linkedList.appendAtEnd(1)
linkedList.appendAtMiddle(2, 1)
linkedList.appendAtEnd(3)
linkedList.appendAtEnd(4)
linkedList.appendAtEnd(5)
linkedList.appendAtMiddle(6, 5)

linkedList.print()

console.log("K/Nth Node in Linked list :", linkedList.findkNthNode(2))