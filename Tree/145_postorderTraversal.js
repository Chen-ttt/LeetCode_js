/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-24 17:21:01
 * @LastEditTime: 2022-11-18 15:24:47
 * @LastEditors:  
 */
/**
 * 145.二叉树的后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */

// 1.递归
var travel = function (node, result) {
  if (node) {
    travel(node.left, result)
    travel(node.right, result)
    result.push(node.val)
  }
}

var postorderTraversal = function (root) {
  var result = []
  travel(root, result)
  return result
}

// 2.迭代 - 核心思想: 以中左右的方式遍历得到逆后序, 再将逆后序反转得到后序
var postorderTraversal = function (root) {
  var result = []
  if (!root) return result

  var stack = [root]
  var top

  while (stack.length) {
    top = stack.pop()
    result.push(top.val)

    if (top.left) stack.push(top.left)
    if (top.right) stack.push(top.right)
  }

  while (result.length) {
    stack.push(result.pop())
  }
  return stack
}