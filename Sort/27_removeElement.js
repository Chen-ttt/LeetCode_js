/**
 * 27. 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * 时间复杂度: O(n) n为序列的长度;我们只需要遍历该序列至多一次,左右指针相遇/重合即结束
 * 空间复杂度: O(1) 不需要额外空间
 * 
 */

// 方法一: 方法二的优化;利用快速排序的思想
 var removeElement = function(nums, val) {
    var left = 0,
        right = nums.length;
    while(left < right){
        if(nums[left] === val) nums[left] = nums[--right];
        else left++;
    }
    return left;
};

var nums = [1];
console.log(nums);
console.log(removeElement(nums, 1));
console.log(nums);

// 方法二: 快慢指针
/**
 * 时间复杂度: O(n) 最坏的情况下,列表中没有需要移除的元素,需要遍历该序列至多2次
 * 空间复杂度: O(1) 不需要额外空间
 */
removeElement = function(nums, val) {
    const n = nums.length;
    let left = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};