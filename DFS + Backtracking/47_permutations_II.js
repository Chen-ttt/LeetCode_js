/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-12 02:17:53
 * @LastEditTime: 2022-08-12 02:18:58
 * @LastEditors:  
 */
/**
 * 47.全排列II
 * @param {number[]} nums
 * @return {number[][]}
 */

// 只需要加一个去重 - 在同一层级上去重
var permuteUnique = function (nums) {
  let result = [],
    path = [],
    used = new Array(nums.length).fill(false)

  nums.sort((a, b) => a - b)

  let dfs = () => {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue

      path.push(nums[i])
      used[i] = true

      dfs()

      path.pop()
      used[i] = false
    }
  }

  dfs()
  return result
}