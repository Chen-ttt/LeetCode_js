/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-21 18:39:10
 * @LastEditTime: 2022-07-21 18:45:41
 * @LastEditors:  
 */
/**
 * 52.两个链表的第一个公共节点
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 
 * 双指针
 * 思想: 链表A的不重合部分长度为a, 链表B的不重合部分长度为b, 公共部分长度为c
 *      则a走到公共点时走了a+c+b, b走了b+c+a, 两指针会在同一时刻走到公共节点
 * 
 *      若两链表不重合, 则在a指针走了a+b, b走了b+a时, 两指针在链表尾部null相遇
 * 
 * !!! 方法总结: 对于链表中公共节点的问题, 核心是算出两个指针什么情况下移动的长度一样, 即什么时候相遇
 *              环形链表的入口问题也是一样的道理
 * 
 * 时间复杂度 O(n+m)
 * 空间复杂度 O(1)
 */
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null
  var pA = headA,
    pB = headB
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next // 走到头, 则换条跑道走
    pB = pB === null ? headA : pB.next
  }
  return pA
}