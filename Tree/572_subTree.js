/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-17 17:05:26
 * @LastEditTime: 2022-08-17 17:21:07
 * @LastEditors:  
 */
/**
 * 572.另一棵树的子树
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var isSubtree = function (root, subRoot) {
  let flag = false // 1. 用于标记匹配是否成功, false表示匹配不成功

  let stack = [root] // 2. 栈, 用于遍历树
  let top

  // 6. 在每次找到相同的根节点时调用dfs函数, 用于比较两棵树是否一样
  // 比较过程中 需考虑以下三种情况 abc
  let dfs = (r1, r2) => {
    if (!flag) return // 递归出口1

    if (r1 === null && r2 === null) return // 递归出口2. 两节点都是null, 都走到尽头

    if (r1 && r2) { // a. 两节点都有值, 且值相等, 继续递归比较
      if (r1.val === r2.val) {
        dfs(r1.left, r2.left)
        dfs(r1.right, r2.right)
      } else { // b. 两节点都有值, 但不相等, 将flag标记为false, 下一次dfs时就会直接return
        flag = false
      }
    } else { // c. 两节点中 有一个有值, 一个没值, 匹配失败, 将flag标记为false, 下一次dfs时就会直接return
      flag = false
    }
  }

  // 3. 对主树进行前序遍历, 栈空则表示遍历结束
  while (stack.length) {
    top = stack.pop()
    if (top.val === subRoot.val) { // 4. 遍历过程中, 一旦找到和子树根节点一样的节点, 立即进入dfs进行比较
      flag = true
      dfs(top, subRoot)
      if (flag) break // 5. 如果dfs之后, flag没有被修改过, 仍是true, 表示匹配成功, 直接结束循环
    }

    if (top.right) stack.push(top.right)
    if (top.left) stack.push(top.left)
  }

  // 7. 最后flag为false的两种情况: 
  //    a. 主树中都没有找到和subRoot一样的节点, 根本没有进入过dfs, 因此flag一直是false
  //    b. 进入过dfs, 但匹配失败时, flag会被设置为false
  return flag
}