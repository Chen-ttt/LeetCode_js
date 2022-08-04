/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-04 13:36:00
 * @LastEditTime: 2022-08-04 13:36:12
 * @LastEditors:  
 */
/**
 * 46.全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []

  const length = nums.length
  let flag = new Array(length).fill(false)

  var dfs = (path) => {
    if (path.length === length) {
      result.push([...path])
      return
    }

    for (let i = 0; i < length; i++) {
      if (flag[i]) continue

      path.push(nums[i])
      flag[i] = true

      dfs(path)

      path.pop()
      flag[i] = false
    }
  }

  dfs([])
  return result
}