var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    const maxNumber = Math.max(...candies);
    // console.log(maxNumber);
    for(let i = 0; i < candies.length; i++){
        if ((candies[i] + extraCandies) >= maxNumber){
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result;
};