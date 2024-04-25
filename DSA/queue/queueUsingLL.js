class Node{
    constructor(value){
        this.value = value
        this.head = null
    }
}

class Queue{
    constructor(){
        this.start = null
        this.end = null
        this.size = 0
    }

    enQueue(value){
        const newNode = new Node(value)
        if (!this.start) {
            newNode.next = this.start
            this.start = newNode
        }
        else{
            let current = this.start
            while(current.next){
                current = current.next
            }
            newNode.next = null
            current.next = newNode
            this.size ++
        }
    }

    deQueue(){
        if(!this.start){
            return null
        }
        else{
            const deQueuedVal = this.start.value
            this.start = this.start.next 
            this.size --
            return deQueuedVal
        }
    }

    print(){
        let current = this.start
        let result = []
        while(current){
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('->'))
    }

    isEmptyLL(){
        return this.size === 0
    }
}

const queueLL = new Queue()

queueLL.enQueue(1)
queueLL.enQueue(2)
queueLL.enQueue(3)
queueLL.enQueue(4)
queueLL.enQueue(5)

console.log(queueLL.deQueue())
queueLL.print()