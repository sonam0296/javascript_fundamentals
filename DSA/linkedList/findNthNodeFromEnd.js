/**
 * 
 * Nth to Last Node: Find the nth to last node in a singly linked list.
 */

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// Don't need to create all the function to add, delete

function findNthToLastNode(head, n){
    // Using two pointers
    let left = head
    let right = head
    for(let i= 0; i<n;i++){
        if(left == null) return null
        left = left.next
    }

    while(left !==null){
        left = left.next
        right = right.next
    }

    return right
}

function findNthToLastNodeUsingArr(head, n){
    if(!head) return null
    let res = []
    let curr = head
    while(curr){
        res.push(curr.value)
        curr = curr.next
    }
    console.log(res)

    let index = res.length - n
    return res[index]
    
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log(findNthToLastNode(head, 4))
console.log('Using Array: ',findNthToLastNodeUsingArr(head, 3))

