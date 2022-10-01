/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-10-01 20:58:20
 * @LastEditTime: 2022-10-01 21:00:08
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
 * 124. 二叉树中的最大路径和
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let result = -Infinity

  let dfs = (node) => {
    if (node === null) return 0

    let leftValue = Math.max(0, dfs(node.left))
    let rightValue = Math.max(0, dfs(node.right))

    let sum = node.val + leftValue + rightValue

    result = Math.max(result, sum)

    return Math.max(leftValue, rightValue) + node.val
  }

  result = Math.max(dfs(root), result) // 这个result一定要放在第二个参数上
  return result
}