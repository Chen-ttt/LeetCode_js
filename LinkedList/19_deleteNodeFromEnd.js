/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-22 19:23:15
 * @LastEditTime: 2022-07-22 19:30:03
 * @LastEditors:  
 */
/**
 * 19.删除链表的倒数第N个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * 
 * 思路
 * 1. 快慢指针: fast指针将slow指针带到被删除元素的前一个节点, slow指针完成删除
 * 2. 遍历一次计算链表长度, 再遍历一次进行删除(复杂度一样, 但会遍历更多)
 * 3. 将所有元素入栈, 对第N个出栈的元素进行删除(空间复杂度为O(n), 使用了栈空间)
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head
  var dummy = new ListNode(-1) // 这题必须要设置哑节点, 不然删除第一个节点的case很难处理
  dummy.next = head
  var fast = slow = dummy
  for (let i = 0; i < n; i++) { // fast指针和slow指针需要相隔n个元素
    fast = fast.next
  }
  while (fast.next !== null) { // fast指针走到最后一个元素位置时停止
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next // delete
  return dummy.next
}