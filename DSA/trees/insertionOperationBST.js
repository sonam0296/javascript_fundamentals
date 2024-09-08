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


// class Node represent single node in bst
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null // Initially tree is empty
    }

    insert(value) {
        let newNode = new Node(value)
        // if tree is empty then new node becomes the root
        if (!this.root) {
            this.root = newNode
            return this
        }

        // If tree is not empty 
        let current = this.root
        while (true) {
            // Check if value is < current value 
            if (value < current.value) {
                // Now check if current left node is empty
                if (!current.left) {
                    current.left = newNode
                    return this // insertion done
                }
                // Move to left child
                current = current.left
            }
            else if (value > current.value) {
                // Check if current right is empty
                if (!current.right) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
            else { // If value is equal to current left and right values then do not insert in BST
                return this
            }
        }
    }

    // Helper function to display inserted values 
    print(node = this.root, space = 0, indent = 4) {
        if (!node) {
            return
        }
        // console.log(this.root)
        space += indent
        this.print(node.right, space)
        console.log(' '.repeat(space - indent) + node.value)
        this.print(node.left, space)
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(13)
bst.insert(17)

bst.print()

/**
 * 
 * Average Case Time Complexity -> O(log n) when it is balanced tree
 * Worst Case Time Complexity -> O(n) when tree is skewed(Eg. all nodes are inserted in ascending or descending order.)
 * Space Complexity -> O(1). If recursive approach is used then O(h) ie. height of tree 
 * 
 */