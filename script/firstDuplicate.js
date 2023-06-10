function findFirstDuplicate(arr) {
    let visited = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (visited[arr[i]]) {
        return arr[i];
      } else {
        visited[arr[i]] = true;
      }
    }
  
    return -1; // If no duplicates found
  }
  
  // Example usage:
  const array = [2, 3, 1, 4, 2, 5, 1];
  const firstDuplicate = findFirstDuplicate(array);
  console.log(firstDuplicate);
  