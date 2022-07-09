/**
 * 75.颜色分类
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 时间复杂度 O(n) n是数组nums长度
 * 空间复杂度 O(1)
 */

// 荷兰国旗问题
var sortColors = function(nums) {
    var left = 0,
        right = nums.length-1,
        i = 0,
        temp = 0;
    // 三个指针 left right i
    // left - 划定0的区域,永远指向0区域的后面一个元素
    // right - 划定2的区域,永远指向2区域的前一个元素
    // i - 用于遍历,指向当前正在处理的元素

    // i指向2 - 交换i和right指向的元素,right前移,i和left不动,因为不知道后面换上来的元素是什么
    // i指向0 - 交换i和left,i和left后移
    // i指向1 - i后移
    while(i <= right){
        console.log("i", i, "left", left, "right", right);
        console.log(nums);
        if(nums[i] === 2){
            temp = nums[right];
            nums[right--] = nums[i];
            nums[i] = temp;
        } else if(nums[i] === 0){
            temp = nums[left];
            nums[left++] = nums[i];
            nums[i++] = temp;
        } else if(nums[i] === 1){
            i++
        }
    }
};

var nums = [2,1,2,0,0,1];
sortColors(nums);
console.log(nums);