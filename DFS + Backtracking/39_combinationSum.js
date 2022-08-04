/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-04 14:42:46
 * @LastEditTime: 2022-08-04 17:18:07
 * @LastEditors:  
 */
/**
 * 39.组合总和
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [],
    sum = 0
  const length = candidates.length

  candidates.sort((a, b) => a - b)
  // console.log(candidates)

  let dfs = (path, start) => {
    if (sum >= target) {
      if (sum === target) result.push([...path])
      return
    }

    for (let i = start; i < length; i++) {
      if (sum + candidates[i] > target) break
      path.push(candidates[i])
      sum += candidates[i]

      dfs(path, i)

      path.pop()
      sum -= candidates[i]
    }

  }

  dfs([], 0)
  return result
}