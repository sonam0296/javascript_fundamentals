/**
 * 
 * Tree is a hierarchial Data structure consisting of noded connected to its edges. 
 * 
 * Types of Trees -> 
 *  1.) Binary Tree 
 *  2.) Full Binary Tree
 *  3.) Perfect Binary Tree
 *  4.) Balanced Binary Tree
 *  5.) UnBalanced Binary Tree
 *  6.) Binary Search Tree
 *  7.) AVL Tree
 * 
 */

// We will implement insertion of tree using Binary Search Tree(BST) 

/**
 * 
 * Insertion in a BST follows these rules:

    Start at the root.
    If the new value is less than the current node's value, go to the left subtree; if greater, go to the right subtree.
    Repeat this process until an appropriate null position is found, then insert the new node.
 */


// A tree node will have left, right and value

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null // root -> topmost node of tree 
    }

    insert(value) {
        let newNode = new TreeNode(value)
        if (this.root == null) {
            this.root = newNode
            return this
        }

        // Else this is BST -> So left side nodes will be less than root and right side nodes will be greater than root
        let current = this.root
        while (true) {
            if (value < current.value) {
                if (current.left == null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            }
            else {
                if (current.right == null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(3)
bst.insert(7)
bst.insert(15)
bst.insert(12)

bst.printTree()
// console.log(bst.root, ':::BASt')