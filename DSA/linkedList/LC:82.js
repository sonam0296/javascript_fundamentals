/**
 * Remove Duplicates from Sorted List II
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 * 
    Example 1:
    Input: head = [1,2,3,3,4,4,5]
    Output: [1,2,5]
 * 
 */

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    appendAtEnd(value){
        const newNode = new Node(value)
        if (!this.head) {
            newNode.next = this.head
            this.head = newNode
        }
        else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            newNode.next = null
            current.next = newNode
        }
    }

    deleteDuplicatesII(){
        // Let's create a dummy node which will point to head
        let dummyNode = new Node(0)
        dummyNode.next = this.head
        // Assign dummyNode to list
        let list = dummyNode
        // Now loop for list.next && list.next.next
        while(list.next && list.next.next){
            // Check if values are same
            if (list.next.value === list.next.next.value) {
                // We need to again loop because have nested same values
                while(list.next && list.next.next && list.next.value === list.next.next.value){
                    list.next = list.next.next  // If it is same then we will update the pointer by 2
                }
                list.next = list.next.next
            }
            else{
                list = list.next
            }
        }
        let res = []
        while(dummyNode.next){
            res.push(dummyNode.next.value)
            dummyNode = dummyNode.next
        }
        return res
    }

    print(){
        let current = this.head
        let result = []
        while(current){
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('->'))
    }
}

const deleteDuplicateLL = new LinkedList()

deleteDuplicateLL.appendAtEnd(1)
deleteDuplicateLL.appendAtEnd(2)
deleteDuplicateLL.appendAtEnd(3)
deleteDuplicateLL.appendAtEnd(3)
deleteDuplicateLL.appendAtEnd(4)
deleteDuplicateLL.appendAtEnd(4)
deleteDuplicateLL.appendAtEnd(5)

deleteDuplicateLL.print()

console.log(`Delete Duplicates -> `, deleteDuplicateLL.deleteDuplicatesII())