class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    appendAtStart(value){
        const newNode = new Node(value)
        if(!this.head){
            newNode.next = this.head
            this.head = newNode
        }
        else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
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
            newNode.prev = current
            current.next = newNode
        }
    }

    appendAtMiddle(value, position){
        const newNode = new Node(value)
        if (!this.head && position < 0) {
            console.error('LL is empty')
        }
        else{
            let current = this.head
            let count = 0
            while(current.next && count < position -1){
                current = current.next
                count++
            }
            newNode.next = current.next
            newNode.prev = current
            current.next = newNode
            current.next.prev = newNode
        }
    }

    deleteAtStart(){
        if(!this.head){
            console.error('LL is empty')
        }
        else{
            this.head = this.head.next
            this.head.prev = null
        }
    }

    deleteAtEnd(){
        if(!this.head){
            console.error('LL is empty')
        }
        else{
            let current = this.head
            while(current.next.next){
                current = current.next
            }
            current.next = null
        }
    }

    deleteAtMiddle(position){
        if(!this.head){
            console.error('LL is empty')
        }
        else{
            let current = this.head
            let count = 0
            while(current && count < position -1){
                current = current.next
                count ++
            }
            current.next = current.next.next
            current.next.prev = current
        }
    }

    print(){
        let current = this.head
        let result = []
        while(current){
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('<->'))
    }
}

const linkedList = new LinkedList()
linkedList.appendAtStart(12)
linkedList.appendAtStart(10)
linkedList.appendAtStart(16)

linkedList.appendAtEnd(26)
linkedList.appendAtEnd(20)

linkedList.appendAtMiddle(50, 2)

linkedList.deleteAtStart()
linkedList.deleteAtEnd()
linkedList.deleteAtMiddle(1)

linkedList.print()