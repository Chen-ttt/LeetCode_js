/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-12 22:23:24
 * @LastEditTime: 2022-08-12 22:41:13
 * @LastEditors:  
 */
/**
 * 444.序列重建
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */

// 本题的目的 - 通过几个子序列, 构建最短超序列, 确定该超序列的唯一性
// 为什么可以用拓扑排序呢？
// 1. 子序列的特点 即元素顺序和超序列相符, 顺序也就对应着有向图中的方向(拓扑排序对图 按照方向进行遍历, 所得结果:后面的元素 用于无法指向前面的元素)
// 2. 子序列的元素 总是超序列的一部分, 用子序列 重构 超序列的过程, 也就是用子图 重构 有向图的过程

// 因此:
// 1. 给定 若干个子序列, 通过序列的元素顺序 构建出有向图
// 2. 对有向图进行拓扑排序, 即 以入度为标准划分层次, 进行层级遍历, 即可保证 所得拓扑排序结果 就是 重构超序列结果

// 最需要注意的点: 3. 如何保证超序列的唯一性？也就是保证拓扑排序结果的唯一性
// 任何一个时刻, 队列中都不能同时存在2个及以上的节点
// 当队列中同时存在多个节点, 意味着该层级有多个并列点, 这些节点的入度都已为0, 他们是可以互换位置的, 因此会导致有多种排序方式（所以平时的拓扑排序, 通常都不具有唯一性）

var sequenceReconstruction = function (nums, sequences) {
  let inDegree = new Array(nums.length + 1).fill(0)
  let graph = new Array(nums.length + 1).fill(0).map(() => new Set())

  for (let s of sequences) {
    for (let i = 1; i < s.length; i++) {
      inDegree[s[i]]++
      graph[s[i - 1]].add(s[i]) // 细节: 用以Set为元素组成的数组, 作为图的结构, 复杂度大大降低, 比用对象来存储图 要快得多
    }
  }

  let queue = []
  for (let i = 1; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }

  while (queue.length) {
    if (queue.length > 1) return false // 重点

    const curNode = queue.shift()

    const list = graph[curNode]
    for (let tailNode of list) {
      inDegree[tailNode]--
      if (inDegree[tailNode] === 0) queue.push(tailNode)
    }
  }
  return true
}