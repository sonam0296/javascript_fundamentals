function duplicateElements(arr){
    let duplicates = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i])
            }
        }
    }
    return duplicates
}

console.log(duplicateElements([1,2,3,4,2,3,5,6,1,5]))


function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          j--; // Decrement j to adjust for the removed element
        }
      }
    }
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 2, 4, 6, 7, 3];
  removeDuplicates(numbers);
  console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]
  