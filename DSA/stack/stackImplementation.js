class StackImplementationUsingArray{
    constructor(){
        this.items = []
    }

    push(element){
        return this.items.push(element)
    }

    pop(){
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }
        return this.items.pop()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }
        return this.items[this.items.length - 1]
    }

    size(){
        return this.items.length
    }

    print(){
        // for(let i= 0; i<this.items.length; i++){
        //     console.log(this.items[i])
        // }

        // we can do in the below way as well
        return this.items.toString()
    }
}

const stack = new StackImplementationUsingArray()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log('Before Pop : ', stack.print())
stack.pop()
console.log('After Pop : ', stack.print())


console.log("Peeked element from stack -> ", stack.peek())
console.log('Size of stack is -> ', stack.size())

