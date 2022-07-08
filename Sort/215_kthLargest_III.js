/**
 * 215.数组中第k个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 优化
 *   在每次随机选取基准数, 每个数的选中概率是 1/N, 根据数学家的证明，随机快排的时间复杂度会收敛于 O(NlogN), 它并不代表不会出现 O(N ^ 2) 的情况, 而是将最坏的情况变成了随机概率事件
 */

// 快速排序 -> 快速选择 -> 随机快排
function partition(nums, left, right){
    var ran = Math.floor(Math.random()*(right-left+1) + left);
    var key = nums[ran],
        temp = 0;
    console.log("选择区间", left, right);
    console.log("选择结果", nums, ran, key);
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

function sort(nums, start, end, k){
    console.log(k);
    if(start > end) return;
    var p = partition(nums, start, end);

    if(p == k) return;
    else if(p > k) sort(nums, start, p-1, k);
    else sort(nums, p+1, end, k);
}

var findKthLargest = function(nums, k) {
    sort(nums, 0, nums.length-1, nums.length-k);
    console.log(nums);
    return nums[nums.length-k];
};

var nums = [7,6,5,4,3,2,1];
console.log(findKthLargest(nums, 5));