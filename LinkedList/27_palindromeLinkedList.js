/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-22 16:36:11
 * @LastEditTime: 2022-07-22 16:36:42
 * @LastEditors:  
 */
/**
 * 27.判断回文链表
 * @param {ListNode} head
 * @return {boolean}
 */

// 链表反转
var reverseList = function (node) {
  var pre = null,
    cur = node.next,
    nextNode = null
  while (cur !== null) {
    nextNode = cur.next
    cur.next = pre
    pre = cur
    cur = nextNode
  }
  node.next = pre
  return node.next
}

var isPalindrome = function (head) {
  // 1. 快慢指针找到链表中点
  var fast = head,
    slow = head
  // 2. 奇数长度则快指针走到倒数第一个节点, 偶数则走到倒数第二个
  // 原因: 为了之后反转链表, 必须保存反转区的前一个节点, 因此当长度为偶数时, slow指针要停在两个中间节点的前一个节点
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
    // console.log(fast);
  }
  // console.log("slow stop at", slow.val);

  // 3. 反转链表的后半部分
  var start = reverseList(slow)
  // console.log("After reverse:", head, start);
  // 4. 用两个指针遍历前半部分和后半部分, 比较
  while (start !== null) {
    if (head.val === start.val) {
      head = head.next
      start = start.next
    } else return false
  }
  return true
}