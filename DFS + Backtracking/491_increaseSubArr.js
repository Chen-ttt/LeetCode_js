/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-12 01:35:48
 * @LastEditTime: 2022-08-12 01:51:08
 * @LastEditors:  
 */
/**
 * 491.递增子序列
 * @param {number[]} nums
 * @return {number[][]}
 */

// 该题和90看起来相似, 但是有很大不同
// 共同点是, 有相同元素, 但不能存在相同的解

// 90题采用先排序, 在用used数组标记元素的使用情况
// 而这道题需要找递增子序列, 因此不能改变原本数组的顺序, 不能排序

// 那么在不排序的情况下, 如何知道相同元素的使用情况呢？
// 不再像以前一样 按顺序记录使用情况, 而是把数组当作哈希表来用, 使相同元素映射到相同的下标, 已查找到是否有相同元素以及其使用情况


var findSubsequences = function (nums) {
  let result = [],
    path = []

  let dfs = (startIndex) => {
    if (path.length > 1) {
      result.push([...path])
    }

    // 这里是细节: 每一层都拥有一个新的used数组, 意味着在深度方向, 同一条路上每遇到一个新的节点, 都有一个新的used, 那么该节点一定会被放进path
    // 但等到该节点的子树全部处理完后, 再退回到该节点的父节点时, 该节点被标记为true, 那么同一层级的相同元素将被continue
    let used = []
    for (let i = startIndex; i < nums.length; i++) {
      // 当前元素小于path的最后一个元素, 不能构成递增, 跳过
      if ((path.length > 0 && nums[i] < path[path.length - 1])
        // 当前元素的相同值 在同一层次已被使用, 跳过
        || used[nums[i] + 100]) continue
      path.push(nums[i])
      used[nums[i] + 100] = true
      dfs(i + 1)
      path.pop()
    }
  }

  dfs(0)
  return result
}