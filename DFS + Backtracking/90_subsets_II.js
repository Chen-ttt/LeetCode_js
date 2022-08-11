/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-11 23:05:24
 * @LastEditTime: 2022-08-11 23:09:01
 * @LastEditors:  
 */
/**
 * 90.子集II
 * @param {number[]} nums
 * @return {number[][]}
 */

// 子集问题
// 本题需要注意的点: 有重复元素, 但不可以有重复的解
// 即, 广度上, 同一层次, 不允许使用相同的元素, 但深度上, 同一条路, 可以使用相同的元素
// 因此, 1. 排序
//       2. 用flag记录每个元素是否在这条路上被使用过
var subsetsWithDup = function (nums) {
  let result = [],
    path = [],
    flag = new Array(nums.length).fill(false) // false表示当前元素未被使用

  // 排序是前提, 保证nums[i]只需要和nums[i-1]对比, 就能知道是否重复, 否则需要和数组所有元素都对比
  nums.sort((a, b) => a - b)

  let dfs = (startIndex) => {
    result.push([...path])

    for (let i = startIndex; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !flag[i - 1]) continue
      path.push(nums[i])
      flag[i] = true
      dfs(i + 1)
      path.pop()
      flag[i] = false
    }
  }

  dfs(0)
  return result
}