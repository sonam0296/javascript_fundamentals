/**
 * Magnetic Force Between Two Balls
 * In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.
    Rick stated that magnetic force between two different balls at positions x and y is |x - y|.
    Given the integer array position and the integer m. Return the required force.
 * 
    Example => 
        Input: position = [1,2,3,4,7], m = 3
    Output: 3
    Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
 */

    /**
     * Similar problem =>
     * 
     * 
     */

    function maxMinDistance(arr, m){
        arr.sort((a,b)=> a - b)
        let left = 0
        // find maximum from arr
        let maxi = -1
        for(let i=0; i<arr.length; i++){
            maxi = Math.max(maxi, arr[i])
        }
        let right = maxi
        let answer = -1
        while(left <= right){
            let mid = Math.floor(left + ((right - left)/2))
            if(isPossible(arr, m, mid)){
                answer = mid
                left = mid + 1
            }
            else{
                right = mid - 1
            }
        }   
        return answer
    }
    
    console.log(`Maximum distance from the minimum distance => ${maxMinDistance([1,2,3,4,7], m=3)}`) // m (balls or cows)
    
    function isPossible(arr, m , mid){
        // keep count of m starting from 1 and also arrElement count
        let count = 1
        let arrElementCount = arr[0]
        for(let i=0; i<arr.length; i++){
            // Condition to check if arrEle is greater than mid so its greater element will also work
            if(arr[i] - arrElementCount >= mid){
            count++
            if(count === m){
                return true
            }
            arrElementCount = arr[i]
            }
        }
        return false
    }