/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-24 16:48:14
 * @LastEditTime: 2022-07-24 17:35:31
 * @LastEditors:  
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 144.二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */

// 1. 递归
// 时间O(N) 每个节点遍历一次
// 空间 平均情况O(logN) - 节点平均分布, 栈空间的使用取决于树的深度, 平均分布情况下log(N+1)
//     最坏情况O(N) - 所有节点成链状
var travel = function (node, result) {
  if (node) {
    result.push(node.val)
    travel(node.left, result)
    travel(node.right, result)
  }
}

var preorderTraversal = function (root) {
  var result = []
  travel(root, result)
  return result
}

// 2. 迭代
// JS中就用数组当栈用! 其实和递归是等价的, 只是迭代中显式地将栈模拟出来了
// 时间O(N)
// 空间 平均情况O(logN) 和递归一样, 因为有显式栈的开销
//     最坏情况O(N)
var preorderTraversal = function (root) {
  let result = []
  if (!root) return result

  let top
  let stack = [root]

  while (stack.length) {
    top = stack.pop()
    result.push(top.val)

    if (top.right) stack.push(top.right) // 先进后出, 一定要先放右孩子
    if (top.left) stack.push(top.left)
  }
  return result
}