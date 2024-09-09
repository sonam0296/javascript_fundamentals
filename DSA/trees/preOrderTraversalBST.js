class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class PreOrderTraversal{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }
        let currentNode = this.root
        while(true){
            if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode
                }
                currentNode = currentNode.left
            }
            else if(value > currentNode.value){
                if(!currentNode.right){
                    currentNode.right = newNode
                }
                currentNode = currentNode.right
            }
            else {
                return this
            }
        }
    }

    preOrder(current = this.root, result = []
    ){
        if(!current) return null
        if(current){
            result.push(current.value)
            this.preOrder(current.left, result)
            this.preOrder(current.right, result)
        }
        return result
    }

    print(node = this.root, space = 0, indent=4){
        if(!node) return null
        space += 4
        this.print(node.right, space)
        console.log(' '.repeat(space-indent) + node.value)
        this.print(node.left, space)
    }
}

const preOrderBST = new PreOrderTraversal()

preOrderBST.insert(10)
preOrderBST.insert(5)
preOrderBST.insert(15)
preOrderBST.insert(3)
preOrderBST.insert(7)
preOrderBST.insert(12)
preOrderBST.insert(17)
preOrderBST.print()

console.log(preOrderBST.preOrder())