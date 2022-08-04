/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-04 14:42:46
 * @LastEditTime: 2022-08-04 14:42:55
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

  let dfs = (path, start) => {
    // console.log(start, path)
    if (sum >= target) { // 递归出口
      // console.log("return")
      if (sum === target) result.push([...path])
      return
    }

    for (let i = start; i < length; i++) {
      sum += candidates[i]
      path.push(candidates[i])

      dfs(path, i)

      sum -= candidates[i]
      path.pop()
    }
  }

  dfs([], 0)
  return result
}