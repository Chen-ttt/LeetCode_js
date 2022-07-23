/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-22 18:51:32
 * @LastEditTime: 2022-07-23 15:57:04
 * @LastEditors:  
 */
/**
 * 25.K个一组反转链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 判断是否还有k个元素可供反转
var checkEnough = function (head, k) {
  for (let i = 0; i < k; i++) {
    if (!head) return false
    head = head.next
  }
  return true
}

var reverseK = function (head, k) {
  var prev = null,
    cur = head,
    next = null
  for (let i = 0; i < k; i++) { // 反转k个节点, 则只循环k次
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  // for循环停止时, prev为反转后的新头节点, cur为剩余链表的头节点, 需要被传回进行下一组反转, 不然就丢了
  return [prev, cur]
}

function reverseKGroup (head, k) {
  var dummy = new ListNode(-1) // 必须设置哑节点, 因为头节点会变
  dummy.next = head
  // 注意: 这句的作用是避免k大于链表长度的情况, 如果没有这句, 输入{1}, k=2时, 程序不执行while循环, 输出将为{}
  // 在其他正常测试用例下, dummy.next将被反转后的新的头节点覆盖

  var prevNode = dummy
  var newFrontNode = null,
    nextHead = null
  while (checkEnough(head, k)) { // 链表后面还有k个元素可反转, 则进入循环
    [newFrontNode, nextHead] = reverseK(head, k)
    prevNode.next = newFrontNode // 反转后, 主链表需要接入新的头节点
    // 为下一次反转做准备
    prevNode = head // prevNode永远指向反转区的前一个节点, 用于反转后接入新的头节点
    head = nextHead // head永远指向下一个待反转区的头节点
  }

  // 若上次反转后传回的剩余子链表的头节点仍有值, 则需要将剩下不足k的子链表接入主链表
  if (nextHead) prevNode.next = nextHead
  return dummy.next
}