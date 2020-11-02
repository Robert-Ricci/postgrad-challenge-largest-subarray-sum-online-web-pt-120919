function largestSubarraySum(array) {
    let currentNumber = 0
    let largestNumber = 0

    for(let number of array){
        currentNumber = Math.max(0,(currentNumber + number))
        largestNumber = Math.max(largestNumber, currentNumber)
    }
    return largestNumber
}