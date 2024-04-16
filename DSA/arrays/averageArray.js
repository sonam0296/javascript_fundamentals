// Find the Average of Array Elements: Calculate the average value of all elements in an array.


function findAverageOfArray(arr){
    if(arr.length == 0){
        console.log(0)
    }
    let average = 0
    for (let i = 0; i < arr.length; i++) {
        average += arr[i];   
    }
    average = Math.floor(average / arr.length)
    console.log(average)
}

findAverageOfArray([7, 4, 17, -3, 60, 34, -3])