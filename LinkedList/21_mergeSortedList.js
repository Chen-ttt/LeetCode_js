/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-21 17:28:48
 * @LastEditTime: 2022-07-21 17:31:18
 * @LastEditors:  
 */
/**
 * 21.合并两个有序链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(-1)
  var cur = dummy

  // 直至其中一个链表的元素全部被遍历
  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }

  // 如果list1空了, 则将list2剩余部分直接接上去, 反之, 接list1的
  cur.next = list1 == null ? list2 : list1

  return dummy.next
}