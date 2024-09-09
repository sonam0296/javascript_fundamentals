Traversal Operations in Binary Search Tree visit all nodes in the tree. 

The time complexity of each traversal method ie. - 
    1. In-order traversal
    2. Preorder traversal
    3. Postorder traversal
    4. Level order traversal
takes O(n) times because every node is visited exactly once.

i. In-order traversal (Left, Root, Right) => 
    - Visit left subtree
    - Visit root node
    - Visit right subtree 
    In order traversal of a BST produces a sorted order of an elements.

ii. Pre-order traversal(Root, Left, Right) => 
    - Visit root node
    - Visit left subtree
    - Visit right subtree
    This traversal is useful for copying tree structure, as it processes root before its child nodes.

iii. Post-order traversal(Left, Right, Root) =>
    - Visit left subtree
    - Visit right subtree
    - Visit root node
    This traversal is useful when you have to delete nodes from trees. As it process children first before their parent

iv. Level-order traversal(Breadth First Search) => 
    - Visit all the nodes at the current depth level before moving on to the nodes of next depth level.
    This is useful for finding shortest path in an unweighted graph or tree or is often implemented using a queue.