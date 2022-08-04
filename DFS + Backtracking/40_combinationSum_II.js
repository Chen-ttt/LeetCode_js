/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-04 18:07:51
 * @LastEditTime: 2022-08-04 18:08:07
 * @LastEditors:  
 */
/**
 * 40.组合总和II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [],
    sum = 0
  const length = candidates.length

  candidates.sort((a, b) => a - b)

  let flag = new Array(length).fill(false)

  let dfs = (path, start) => {
    if (sum >= target) {
      if (sum === target) result.push([...path])
      return
    }

    for (let i = start; i < length; i++) {
      if (i > 0 && candidates[i] === candidates[i - 1] && !flag[i - 1]) continue
      path.push(candidates[i])
      sum += candidates[i]
      flag[i] = true

      dfs(path, i + 1)

      path.pop()
      sum -= candidates[i]
      flag[i] = false
    }
  }

  dfs([], 0)
  return result
}