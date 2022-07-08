/**
 * 215.数组中第k个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 快速排序
function partition(nums, left, right){
    var key = nums[left],
        temp = 0;
    while(left < right){
        while(nums[right] > key) right--;
        while(nums[left] <= key) left++;
        if(left < right){
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
    }
    temp = nums[nums.indexOf(key)];
    nums[nums.indexOf(key)] = nums[right];
    nums[right] = temp;
    return right;
}

function sort(nums, start, end){
    if(start > end) return;
    var p = partition(nums, start, end);
    sort(nums, start, p-1);
    sort(nums, p+1, end);
}

var findKthLargest = function(nums, k) {
    sort(nums, 0, nums.length-1);
    return nums[nums.length-k];
};

var nums = [3,7,2,1,5,6,4,7];
console.log(findKthLargest(nums, 4));