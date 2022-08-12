/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-04 13:36:00
 * @LastEditTime: 2022-08-12 02:04:39
 * @LastEditors:  
 */
/**
 * 46.全排列
 * @param {number[]} nums
 * @return {number[][]}
 */

// 排列问题 - 需要考虑顺序, 因此[1, 2]和[2, 1]是两个解
// 因此for循环需要每次都从0开始
// 但这会引起一个问题, 每次从0开始, 必定会重复的取到同一个元素, 因此需要used数组标记当前path已使用的元素, 以跳过这些元素

var permute = function (nums) {
  let result = [],
    path = [],
    used = new Array(nums.length).fill(false)

  let dfs = () => {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue // 如果该数组被标记为true, 表示当前path已使用, 跳过

      path.push(nums[i])
      used[i] = true

      dfs(i)

      path.pop()
      used[i] = false // 回溯时, 元素弹出, 标记复原为false
    }
  }

  dfs()
  return result
}