/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-21 18:03:07
 * @LastEditTime: 2022-07-21 18:06:02
 * @LastEditors:  
 */
/**
 * 剑指offer 22.链表中倒数第k个节点
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 
 * 双指针
 * 时间复杂度 O(n) n为链表长度, 遍历一次
 * 空间复杂度 O(1)
 */
var getKthFromEnd = function (head, k) {
  var fast = head,
    slow = head

  for (let i = 0; i < k - 1; i++) {
    fast = fast.next
  }

  while (fast.next != null) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}