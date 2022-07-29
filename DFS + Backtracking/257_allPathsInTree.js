/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-29 12:50:04
 * @LastEditTime: 2022-07-29 12:58:18
 * @LastEditors:  
 */
/**
 * 257.二叉树的所有路径
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  var result = []

  // 定义的递归函数是嵌套的内层函数, 可以共享父级作用域, 改写result
  var searchPath = (node, path) => {
    // 1. 判断 -- 定义递归出口, 这里的出口是node为null时直接退出
    if (node) {
      path += node.val // 将当前节点加入path中

      // 2. 选择
      //  2a. 满足可以继续向下搜索的条件(node不是叶子节点), 递归进行下一步dfs
      if (node.left || node.right) {
        path += "->"
        searchPath(node.left, path) // 回溯将在递归过程中不断发生
        searchPath(node.right, path)
      } else { // 2b. 不满足条件, 这条路已经走到头了(node是叶子节点), 将这条路的结果放进result, 结束当前轮次的递归
        result.push(path)
      }
    }
  }

  searchPath(root, "")
  return result
}