class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class DeletionBST {
    constructor() {
        this.root = null
    }

    // Insertion
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (value < current.value) {
                // check if current left is empty
                if (current.left == null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            }
            else if (value > current.value) {
                if (current.right == null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
            else {
                return this
            }
        }
    }

    // Deletion
    delete(value) {
        this.root = this.deleteNode(this.root, value)
        return this
    }

    deleteNode(currentNode, value) {
        if (!currentNode) return null

        if (value < currentNode.value) {
            currentNode.left = this.deleteNode(currentNode.left, value)
        } else if (value > currentNode.value) {
            currentNode.right = this.deleteNode(currentNode.right, value)
        } else {
            // Node found which is to be deleted

            // Case1 : Node with only one child or no child
            if (!currentNode.left) {
                return currentNode.right
            }
            else if (!currentNode.right) {
                return currentNode.left
            }

            // Case2: Node with two children
            const minValue = this.findMinValue(currentNode.right)
            currentNode.value = minValue
            currentNode.right = this.deleteNode(currentNode.right, minValue)
        }
        return currentNode
    }

    findMinValue(node) {
        let current = node
        if (current.left !== null) {
            current = current.left
        }
        return current.value
    }

    print(node = this.root, space = 0, indent = 4) {
        if (!node) return null
        space += 4
        this.print(node.right, space)
        console.log(' '.repeat(space - indent) + node.value)
        this.print(node.left, space)
    }
}

const deleteBst = new DeletionBST()

deleteBst.insert(10)
deleteBst.insert(5)
deleteBst.insert(15)
deleteBst.insert(3)
deleteBst.insert(7)
deleteBst.insert(13)
deleteBst.insert(17)

deleteBst.delete(15)

deleteBst.print()