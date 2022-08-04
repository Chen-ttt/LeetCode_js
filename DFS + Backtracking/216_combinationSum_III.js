/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-04 16:23:07
 * @LastEditTime: 2022-08-04 16:23:16
 * @LastEditors:  
 */
/**
 * 216.组合总和III
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [],
    sum = 0

  let dfs = (path, start) => {
    if (path.length === k) {
      if (sum === n) result.push([...path])
      return
    }

    for (let i = start; i <= (9 - (k - path.length) + 1); i++) {
      if (sum + i > n) {
        // console.log("已有元素", path, " 本轮添加", i, " 剪枝")
        break
      }
      path.push(i)
      sum += i

      dfs(path, i + 1)

      path.pop()
      sum -= i
    }
  }

  dfs([], 1)
  return result
}