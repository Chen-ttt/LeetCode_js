/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-29 13:31:47
 * @LastEditTime: 2022-07-29 13:35:45
 * @LastEditors:  
 */
/**
 * 113.路径总和 II
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

// 需要特别注意这题和257的区别! 这题需要传递的是数组, 数组是引用类型, 因此不能只传递一个引用
// 不然每次递归调用都会对同一个数组进行修改
var pathSum = function (root, targetSum) {
  var result = []
  var searchPath = (node, path, sum) => {
    if (node) {
      // 每次对path进行深拷贝, 并定义在当前作用域中
      var newPath = path.map(value => value) // 注意! 一定要写var声明, 不能只写赋值, 因为当前作用域没有newPath变量, 会改变父级作用域中的newPath
      newPath.push(node.val)
      sum += node.val

      if (node.left || node.right) { // node不是叶子节点
        searchPath(node.left, newPath, sum)
        searchPath(node.right, newPath, sum)
      } else { // 是叶子节点
        if (sum === targetSum) result.push(newPath)
      }
    }
  }

  searchPath(root, [], 0)
  return result
}