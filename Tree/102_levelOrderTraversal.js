/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-25 12:06:02
 * @LastEditTime: 2022-07-25 12:11:22
 * @LastEditors:  
 */
/**
 * 102.二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */

// 核心思想: 利用队列先进先出实现
var levelOrder = function (root) {
  const result = []
  if (!root) return result

  const queue = [root]
  var first

  while (queue.length) { // 每次执行到这里, 队列中的元素都是当前层级中的所有节点
    const size = queue.length // 统计该层节点个数
    const levelNode = []
    // 该for循环将遍历该层每个节点, 并将其孩子节点入队列以在下一个while循环中遍历
    for (let i = 0; i < size; i++) {
      first = queue.shift() // 首元素出队列
      levelNode.push(first.val)

      if (first.left) queue.push(first.left) // 因为先进先出, 所以左孩子先入队
      if (first.right) queue.push(first.right)
    }

    result.push(levelNode) // 遍历完毕, 将当前层的节点放入result, 最终result是一个数组的数组
  }
  return result
}