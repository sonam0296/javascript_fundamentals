class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class InOrderTraversalBST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode
                }
                current = current.left
            }
            else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode
                }
                current = current.right
            }
            else {
                return this
            }
        }
    }

    inOrderTraversal(current = this.root, result = []) {
        if (current) { // 
            this.inOrderTraversal(current.left, result)
            result.push(current.value)
            this.inOrderTraversal(current.right, result)
        }
        return result
    }

    print(node = this.root, space = 0, indent = 4) {
        if (!node) return null
        space += indent
        this.print(node.right, space)
        console.log(' '.repeat(space - indent) + node.value);
        this.print(node.left, space)
    }
}

const inOrderBST = new InOrderTraversalBST()

inOrderBST.insert(10)
inOrderBST.insert(5)
inOrderBST.insert(15)
inOrderBST.insert(3)
inOrderBST.insert(7)
inOrderBST.insert(13)
inOrderBST.insert(17)

inOrderBST.print()

console.log(inOrderBST.inOrderTraversal());