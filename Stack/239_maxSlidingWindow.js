/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    var frontPointer = 0,
        maxProinter = -1;
    var len = nums.length;
    var max = 0;
    var result = [];
    
    while(frontPointer <= len-k){ // =时,刚好是最后一个窗口
         // 移动窗口,max指针小于front指针,表示上一轮的最大值已经不在窗口内,需要重新比较
        if(maxProinter < frontPointer){
            max = nums[frontPointer];
            for(var i=frontPointer; i<k+frontPointer; i++){
                if(nums[i] > max){
                    max = nums[i];
                    maxProinter = i;
                    console.log("nums[i]", nums[i],"max",maxProinter);
                }
            }
            result.push(max);
        } 
        // 反之max指针大于front指针,表示上一轮的最大值仍窗口内,只需要比较最大值和新加入的那个元素
        else{
            if(max < nums[frontPointer+k-1]){
                maxProinter = frontPointer+k-1;
                max = nums[maxProinter];
                result.push(max);
            } else result.push(max);
        }
        frontPointer++;
    }
    return result;
};

var nums = [1,3,-1,-3,5,3,6,7];
console.log(maxSlidingWindow(nums, 3));