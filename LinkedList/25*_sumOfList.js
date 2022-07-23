/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-22 20:23:20
 * @LastEditTime: 2022-07-23 16:26:41
 * @LastEditors:  
 */
/**
 * 剑指offer25.链表中两数相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * 思想:
 * 将两个链表分别反转
 * 对反转后的链表从前向后遍历并相加, 即为从个位数开始运算
 * 
 * !!!也可以使用栈
 * 
 * 时间复杂度 O(m+n)
 * 空间复杂度 O(1)
 */

var reverse = function (head) {
  var prev = null,
    cur = head,
    next = null
  while (cur !== null) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

var addTwoNumbers = function (l1, l2) {
  var newl1 = reverse(l1)
  var newl2 = reverse(l2)

  var sum = 0,
    add = 0
  var lastNode = null

  // 对两链表共有长度的部分进行计算
  while (newl1 && newl2) {
    sum = newl1.val + newl2.val + add
    var curNode = new ListNode((sum) % 10) // 计算当前位的节点
    curNode.next = lastNode // 从前往后遍历, 即从低位往高位计算, 因此每次计算的结果都应该插入链表头部
    lastNode = curNode

    add = Math.floor(sum / 10)
    newl1 = newl1.next
    newl2 = newl2.next
  }

  // !!!注意以下两部分可以优化成一个calRemain函数, 用三元表达式调用, 只需要注意两链表长度一样的情况
  /**
   * if(!newl1 && !newl2) return newNode;
   * else{
   *    return newl1 === null ? calRemain(newl2, add, prevNode) : calRemain(newl1, add, prevNode);
    }
   */

  // 当链表1还有剩余部分
  while (newl1) {
    sum = newl1.val + add
    var curNode = new ListNode((sum) % 10)
    curNode.next = lastNode
    lastNode = curNode
    add = Math.floor(sum / 10)
    newl1 = newl1.next
  }

  // 当链表2还有剩余部分
  while (newl2) {
    sum = newl2.val + add
    var curNode = new ListNode((sum) % 10)
    curNode.next = lastNode
    lastNode = curNode
    add = Math.floor(sum / 10)
    newl2 = newl2.next
  }

  // 当两链表长度相等时, 只会进入第一个while, 不会执行第二、三个while
  // 若此时add仍有值, 则需要在最高位, 添加节点
  if (add !== 0) {
    var curNode = new ListNode(add)
    curNode.next = lastNode
  }
  return curNode
}