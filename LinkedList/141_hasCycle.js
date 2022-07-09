/**
 * 141.环形链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * 时间复杂度 O(n)
 *      1. 当链表中不存在环时, 快指针将先于慢指针到达链表尾部, 链表中每个节点至多被访问两次 2n
 *      2. 当链表中存在环时, 每一轮移动后, 快慢指针的距离将减小一; 而初始距离为环的长度，因此至多移动n轮
 * 空间复杂度 O(1) 只需要参数空间来储存俩个指针
 */

// 快慢指针 - 利用环的特性, 变成追及问题, 每一轮移动后, 快慢指针的距离将减小1, 快指针总会追上慢指针
 var hasCycle = function(head) {
    var slow = head,
        fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;
};