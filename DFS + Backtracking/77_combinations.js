/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-04 15:54:06
 * @LastEditTime: 2022-08-04 15:54:11
 * @LastEditors:  
 */
/**
 * 77.组合
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = []

  let dfs = (path, start) => {
    // console.log(path)
    if (path.length === k) {
      result.push([...path])
      return
    }

    for (let i = start; i <= (n - (k - path.length) + 1); i++) {
      path.push(i)
      // console.log(start, i, path)
      dfs(path, i + 1)
      path.pop()
    }
  }

  dfs([], 1)
  return result
}