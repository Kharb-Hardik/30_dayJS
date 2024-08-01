//Q1
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const na = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            na.push(arr[i]);
        }
    }
    return na;
};

//Q2
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    for(let i=0; i<nums.length; i++){
       let t = fn(init,nums[i]);
       init = t;
   }
   return init;
};