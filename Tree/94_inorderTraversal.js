/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-24 21:45:01
 * @LastEditTime: 2022-07-24 22:02:28
 * @LastEditors:  
 */
/**
 * 94.二叉树的中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */

// 迭代
var inorderTraversal = function (root) {
  var result = []
  if (!root) return result

  var stack = []
  var p = root,
    top

  // 对于其中每一棵子树, 永远是以左中右的顺序出栈
  // 1. 中间根节点先入栈
  // 2. 左孩子入栈
  // 3. 左孩子出栈
  // 4. 根节点出栈(此时如果有右孩子,用p指针保存)
  // 5. 若p有值, 右孩子入栈
  // 6. 右孩子出栈
  while (stack.length || p) {
    // 此处的判定条件加上了p, 是因为当根节点左边的子树全部遍历完后, 栈空; 
    // 此时如果p保存着根节点的右孩子, 则仍需遍历; 
    // 只有确认栈空并且p为null(即最后一个出栈的元素没有右孩子), 才能退出循环

    // 内层while作用: 以当前节点为根, 沿左边走到尽头, 将所有左节点入栈
    while (p) {
      stack.push(p)
      p = p.left
    } // 结束循环时, p为null

    top = stack.pop()
    result.push(top.val) // 将每一轮出栈的top都视为根, 此时可以确认这个根没有左孩子, 下面确认根有没有右孩子
    if (top.right) {
      p = top.right // 由于根已经出栈, 必须用p保存下根的右孩子, 在下一轮进行遍历, 否则就丢了
    }
  }
  return result
}