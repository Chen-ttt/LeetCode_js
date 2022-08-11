/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-11 22:36:52
 * @LastEditTime: 2022-08-11 22:49:14
 * @LastEditors:  
 */
/**
 * 78.子集
 * @param {number[]} nums
 * @return {number[][]}
 */

// 子集问题
// 子集问题收集所有节点的结果, 而组合问题、分割问题只收集叶子节点的结果
var subsets = function (nums) {
  let result = [],
    path = []

  let dfs = (startIndex) => {
    result.push([...path]) // 因此这里不需要规定递归出口, 只要调用dfs就将这种情况记下

    // 子集无关顺序, [1, 2]和[2, 1]是一种, 因此需要startIndex
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      dfs(i + 1)
      path.pop()
    }
  }

  dfs(0)
  return result
}