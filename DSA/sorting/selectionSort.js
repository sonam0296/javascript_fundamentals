/**
 * Selection Sort 
 * 
 */

function selectionSort(arr){
// Loop
    for(let i=0; i<arr.length - 1; i++){
        let currMinimum = i
        for(let j=i+1; j<arr.length; j++){
            if (arr[j] < arr[currMinimum]) {
                currMinimum = j
            }
        }
        if (arr[i] != arr[currMinimum]) {
            [arr[i], arr[currMinimum]] = [arr[currMinimum], arr[i]]
        }
    }
    return arr
}

console.log(`Selection Sort => ${selectionSort([7, 2, 5, 9, 4, 8, 0, 6, 1])}`)