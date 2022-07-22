/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-22 16:36:11
 * @LastEditTime: 2022-07-22 16:57:28
 * @LastEditors:  
 */
/**
 * 27.判断回文链表
 * @param {ListNode} head
 * @return {boolean}
 * 
 * 递归!!!
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */

// 1. 使用递归之外的变量从前向后迭代 遍历
let frontPointer

// 2. 使用递归, 将前面所有元素调用函数压入调用栈, 从后 反向迭代节点
var judge = function (pointer) {
  if (pointer !== null) {
    var flag = judge(pointer.next)
    if (flag && pointer.val === frontPointer.val) { // 前后比较
      frontPointer = frontPointer.next // 正确则外层变量向后迭代
      return true
    } else return false // 不正确则向每层递归传递false结果
  } else return true
}

var isPalindrome = function (head) {
  frontPointer = head
  return judge(head)
}