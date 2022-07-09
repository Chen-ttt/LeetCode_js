/**
 * 206.反转链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * 递归 
 * 时间复杂度 O(n) n为链表长度
 * 空间复杂度 O(n) 取决于递归调用的栈空间
 */
 var reverseList = function(head) {
    if(head === null || head.next === null){ // 当链表为空或递归到最后一个节点, 返回当前节点
        return head;
    }
    var newHead = reverseList(head.next);
    head.next.next = head; // 让当前节点的下一节点反指向当前节点
    head.next = null; // 断开当前节点和下一节点的关系
    return newHead; // 永远传递的都是最后一个节点, 即新的头节点
};