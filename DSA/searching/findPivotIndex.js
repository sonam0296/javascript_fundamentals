// Find Pivot index in sorted rotated array

function pivotIndex(arr){
    let left = 0
    let right = arr.length - 1
    while(left < right){
        const mid = Math.floor(left + ((left + right)/2))
        // Condition =>>>==>> arr[mid]  >= arr[0]
        if (arr[mid] >= arr[0]) {
            left = mid + 1
        }
        else{
            right = mid // B'coz we don't want to again search in left side
        }
    }
    return left
}

console.log(`Pivot index in array -> ${pivotIndex([7,9,1,2,3,5])}`)