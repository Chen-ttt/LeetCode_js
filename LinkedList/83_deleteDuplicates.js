/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-22 17:17:26
 * @LastEditTime: 2022-07-22 17:21:11
 * @LastEditors:  
 */
/**
 * 83.删除有序链表中的重复元素
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head
  var front = head

  // 只需要一个指针就可完成删除操作
  // 但当链表中出现连续多次的重复值(例如111123), 使用双指针更好
  // 快指针一直向前遍历, 直到遇到和慢指针 值不同的元素, 直接slow.next = fast
  while (front.next !== null) {
    if (front.val === front.next.val) {
      // delete
      front.next = front.next.next
    } else {
      front = front.next
    }
  }
  return head
}