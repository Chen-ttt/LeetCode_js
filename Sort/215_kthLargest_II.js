/**
 * 215.数组中第k个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 时间复杂度 O(N) 
 *      T(N) = N + T(N/2) = N + N/2 + N/4 ....
 *           = N( 1/2 + 1/4 ...) = N * C
 *           O(N)
 */

// 快速排序 -> 快速选择
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

function sort(nums, start, end, k){
    console.log(k);
    if(start > end) return;
    var p = partition(nums, start, end);

    // 优化
    // 每次partition返回的right指针都是该元素的最终正确位置
    // 因此判断最后要去的第k大的元素是在right左边还是右边,只递归左数组或右数组,运算时间直接减半
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