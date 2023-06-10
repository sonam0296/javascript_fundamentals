function countOccurrences(str) {
    const occurrences = {};
  
    for (let char of str) {
      if (occurrences[char]) {
        occurrences[char]++;
      } else {
        occurrences[char] = 1;
      }
    }
  
    return occurrences;
  }
  
  // Example usage:
  const string = "Hello, world!";
  const result = countOccurrences(string);
  console.log(result);
  