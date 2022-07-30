/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-30 23:32:10
 * @LastEditTime: 2022-07-30 23:33:48
 * @LastEditors:  
 */
/**
 * 112.路径总和 I
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false

  var dfs = (node, sum) => {
    if (node) {
      sum += node.val
      if (node.left || node.right) {
        // 和113不同的细节是这里, true/false需要被return
        return dfs(node.left, sum) || dfs(node.right, sum)
      } else {
        if (sum === targetSum) {
          return true
        }
      }
    }
  }

  return dfs(root, 0) === true
}