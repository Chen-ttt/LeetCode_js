/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-05 17:26:11
 * @LastEditTime: 2022-08-05 17:28:18
 * @LastEditors:  
 */
/**
 * 376.摆动序列
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length

  let count = 1, // 将第一个点先算上
    curDiff = 0,
    prevDiff = 0

  for (let i = 0; i < nums.length - 1; i++) {
    // 结合下一个点判断nums[i]是不是峰, 是的话, 将下一个点计入序列, 因为求的是摆动序列的长度, 不是峰值个数
    curDiff = nums[i + 1] - nums[i]
    // 注意curDiff不能为0, 如果为0, 这不算摆动序列, 这个点不能算
    if ((curDiff > 0 && prevDiff <= 0) || (curDiff < 0 && prevDiff >= 0)) {
      count++
      prevDiff = curDiff
    }
  }
  return count
}