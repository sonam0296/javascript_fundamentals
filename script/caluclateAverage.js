let arr = [1,2,3,4,5]

function calculateAverage(data){
    let sumOfData = 0
    data.map(m=>{
        sumOfData += m
    })
    let averageData = sumOfData / data.length
    return averageData
}

calculateAverage(arr)   



// ================> Optimized way to write the above code <=================

function calculateAverageUsingReduce(array){
    if (array.length !== 0) {
        const sumData = array.reduce((acc, curr)=> acc + curr, 0)
        const averageData = sumData / array.length
        return averageData
    }
}

console.log(calculateAverageUsingReduce(arr));