/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-21 17:00:01
 * @LastEditTime: 2022-07-21 17:07:21
 * @LastEditors:  
 */
/**
 * 92.反转链表II
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 
 * 头插法
 * cur永远指向待反转区的第一个节点(即left指的那个节点), 永远指向同一个元素, 但该元素位置会变
 * pre永远指向反转区的前一个节点(即left的前一个节点)
 * next永远指向cur节点的下一个节点(即当前要被插入反转区头部的那个节点), cur位置变化, next也跟着变
 * 
 * 时间复杂度 O(n) 最极端情况下, 从头到尾遍历一次链表
 * 空间复杂度 O(1) 只使用常数个变量
 */
var reverseBetween = function (head, left, right) {
  // 设置哑节点
  var dummy = new ListNode(-1)
  dummy.next = head
  var pre = dummy
  for (var i = 0; i < left - 1; i++) { // 让pre走到left的前一个节点
    pre = pre.next
  }

  var cur = pre.next,
    next = null
  for (var i = 0; i < right - left; i++) { // 每一次循环，将next节点放在反转链表的开头，一共执行right-left次，就可以全部反转完
    next = cur.next
    cur.next = next.next
    next.next = pre.next
    pre.next = next
  }
  return dummy.next
}