class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class SearchBST {
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

    /**
     * Searching Operation
     *  1.) Searching Operation follows similar approach like insertion.
     *  2.) We compare target value with current node and decide whether to move left or right
     *      i. If value is equal's to current node's value, we've found the node.
     *      ii. If value is smaller, we move left of subtree.
     *      iii. If Value if greater, we move right of subtree.
     *      iv. If we reach a `null` node, it means value is not present in tree.
     *      
     */

    search(value) {
        if (!this.root) return null
        let currentNode = this.root
        while (currentNode) {
            if (value == currentNode.value) {
                return true // found the node
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.left
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right
            }
        }
        return false // Not found the node
    }

    print(currentNode = this.root, space = 0, indent = 4) {
        if (!currentNode) return null
        space += indent
        this.print(currentNode.left, space)
        console.log(' '.repeat(space - indent) + currentNode.value)
        this.print(currentNode.right, space)
    }
}

const searchBST = new SearchBST()

searchBST.insert(10)
searchBST.insert(5)
searchBST.insert(15)
searchBST.insert(3)
searchBST.insert(7)
searchBST.insert(13)
searchBST.insert(17)

searchBST.print()

console.log(`Is 15 present in the tree -> ${searchBST.search(15)}`)
console.log(`Is 1 present in the tree -> ${searchBST.search(1)}`)