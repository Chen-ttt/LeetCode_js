/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-22 18:51:32
 * @LastEditTime: 2022-07-22 19:02:54
 * @LastEditors:  
 */
/**
 * 25.K个一组反转链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 判断是否还有k个元素可供反转
var isEnough = function (head, k) {
  for (let i = 0; i < k; i++) {
    if (!head) return false
    else head = head.next
  }
  return true
}

// 反转函数
var reverse = function (head, k) {
  var prev = null,
    cur = head,
    next = null
  for (let i = 0; i < k; i++) {
    next = cur.next
    if (i === k - 1) {
      // 必须在反转最后一个元素的时候, 将下一组的头元素存下来, 不然反转之后会丢失后面的链表
      var nextFirstNode = cur.next
    }
    cur.next = prev
    prev = cur
    cur = next
  }
  return [prev, nextFirstNode] // [新的头节点, 下一组头节点]
}

var reverseKGroup = function (head, k) {
  var dummy = new ListNode(-1) // 设置哑节点
  var prev = dummy // 指向哑节点的指针
  while (isEnough(head, k)) {
    [newFront, nextFirstNode] = reverse(head, k)
    prev.next = newFront // 将反转后, 子链表新的头节点接入链表
    prev = head // 为下一次反转子链表做准备, prev永远指向下一组子链表的前一个节点, 即当前子链表反转之前的头节点, 反转之后的尾节点
    head = nextFirstNode // head指针永远指向下一组子链表的头节点
  }
  prev.next = nextFirstNode // 将剩余不足k的子链表接入主链表
  return dummy.next
}