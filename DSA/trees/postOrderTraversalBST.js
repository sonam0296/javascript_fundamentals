class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class PostOrderTraversalBST{
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
                if(!current.left){
                    current.left = newNode
                }
                current = current.left
            }
            else if(value > current.value){
                if(!current.right){
                    current.right = newNode
                }
                current = current.right
            }
            else {
                return this
            }
        }
    }

    postOrderTraversal(node = this.root, result =[]){
        if(!node) return null
        if(node){
            this.postOrderTraversal(node.left, result)
            this.postOrderTraversal(node.right, result)
            result.push(node.value)
        }
        return result
    }

    print(node=this.root, space = 0, indent=4){
        if(!node) return null
        space += indent
        this.print(node.right, space)
        console.log(' '.repeat(space - indent) + node.value)
        this.print(node.left, space)
    }
}

const postOderBST = new PostOrderTraversalBST()

postOderBST.insert(20)
postOderBST.insert(15)
postOderBST.insert(25)
postOderBST.insert(10)
postOderBST.insert(17)
postOderBST.insert(22)
postOderBST.insert(26)

postOderBST.print()

postOderBST.postOrderTraversal()
