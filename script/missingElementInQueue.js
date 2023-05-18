function findMissingChild(allStudent, queue){
    for (let i = 0; i < allStudent.length; i++) {
        const student = allStudent[i];
        if (!queue.includes(student)) {
            return student
        }
    }
    return null
}

const allStudents = ["Jina", "Jeniffer", "John", "Ronald", "Jacob", "Joe", "Ralph", "Surya", "Scully", "Nina", "Scarlet", "Archit Gupta"];
const queue = ["Ronald", "Ralph", "Scully", "Scarlet", "Jina", "Jeniffer", "Joe", "Nina", "Surya", "Jacob"];
const missingChild = findMissingChild(allStudents, queue);

console.log(missingChild);