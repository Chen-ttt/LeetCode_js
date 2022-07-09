/**
 * 876.链表的中间结点
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 时间复杂度 O(n) n为结点数, 需要遍历一遍列表
 * 空间复杂度 O(1) 只要常数空间存放快慢指针
 */

/**
 * 快慢指针
 * 用两个指针slow fast一起遍历链表, slow一次走一步, fast一次走两步
 *   当有偶数个节点, fast指向null, slow在中间
 *   当有奇数个节点, fast指向最后一个元素, slow在中间两个元素的后面那个
 * 因此 当fast指向null或者最后一个元素时, 结束循环
 */
 var middleNode = function(head) {
    var slowPointer = head,
        quickPointer = head;
    while(quickPointer && quickPointer.next){
        slowPointer = slowPointer.next;
        quickPointer = quickPointer.next.next;
    }
    return slowPointer;
};