class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class LevelOrderTraversalBST{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }   
        let current = this.root
        while(true){
            if(value < current.value){
                if(!current.left) {
                    current.left = newNode
                }
                current = current.left
            } else if(value > current.value){
                if(!current.right){
                    current.right = newNode
                }
                current = current.right
            }else{
                return this
            }
        }
    }

    levelOrderTraversal(){
        let result = []
        if(this.root==null) return result

        let queue = [this.root]
        while(queue.length > 0){
            const currentNode = queue.shift() // dequeue
            result.push(currentNode.value)

            if(currentNode.left != null) queue.push(currentNode.left)
            if(currentNode.right != null) queue.push(currentNode.right)
        }
        return result
    }

    print(node=this.root, space=0,indent=4){
        if(!node) return null
        space += indent
        this.print(node.right, space)
        console.log(' '.repeat(space - indent) + node.value)
        this.print(node.left, space)
    }
}

const levelOrderBST = new LevelOrderTraversalBST()

levelOrderBST.insert(10)
levelOrderBST.insert(5)
levelOrderBST.insert(15)
levelOrderBST.insert(3)
levelOrderBST.insert(7)
levelOrderBST.insert(12)
levelOrderBST.insert(17)

levelOrderBST.print()

console.log(levelOrderBST.levelOrderTraversal())

