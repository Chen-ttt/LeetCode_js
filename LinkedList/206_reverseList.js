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

/**
 * 迭代
 *   使用三个指针完成: prev cur next分别指向上一个节点,当前处理的节点和下一个节点
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
reverseList = function(head) {
    if(head === null) return head; // Special case: []
    var prevNode = null,
        curNode = head,
        nextNode = null;
    while(curNode){
        nextNode = curNode.next; // 用next指向下一个节点, 不然当前节点反转后, 下一个节点将丢失
        curNode.next = prevNode; // 局部反转
        prevNode = curNode; // 将prev指针向前挪动
        curNode = nextNode; // 将cur指针向前挪动, 挪动后若指向null, 说明反转完成, 将不会进入下一轮循环
    }
    return prevNode; // 结束时prev即为新的头节点
};