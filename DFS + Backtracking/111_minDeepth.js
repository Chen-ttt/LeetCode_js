/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-30 23:56:09
 * @LastEditTime: 2022-07-30 23:59:03
 * @LastEditors:  
 */
/**
 * 111.二叉树的最小深度
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0

  var dfs = (node, num) => {
    if (node) {
      if (node.left || node.right) {
        return Math.min(dfs(node.left, num + 1), dfs(node.right, num + 1))
      } else {
        return num + 1
      }
    } else return Infinity // 注意这里, 返回Infinity, 相当于只要走到null节点, 就直接排除这条路;
    // 如果什么都不返回, Math.min将收到undefined, 比较结果将为NaN
  }

  return dfs(root, 0)
}