/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-24 14:37:45
 * @LastEditTime: 2022-07-24 14:51:44
 * @LastEditors:  
 */
/**
 * 11*.旋转数组中的最小数字
 * @param {number[]} numbers
 * @return {number}
 * 
 * 时间复杂度 O(logN) 和普通二分查找一样
 *          O(N) 最坏情况, 如果数组元素全部相同, 则right指针每次移动一步, 遍历全部元素
 * 空间复杂度 O(1)
 */

// !!! 需要注意, 核心思想是利用mid指针和right指针比较, 而不能和left指针比较
// 因为当left比mid数小时, 并不能排除任何一半的区域(例如输入[1 2 3 4]和输入[3 4 5 1 2]是两种截然不同的情况, 但用left指针比较的话, 都无法处理)
var minArray = function (numbers) {
  var left = 0,
    right = numbers.length - 1,
    mid = 0
  while (left < right) {
    mid = Math.floor((right - left) / 2) + left
    var midNum = numbers[mid]
    if (midNum > numbers[right]) {
      left = mid + 1 // mid元素较大, 因此mid左边区域包括mid均可以排除
    } else if (midNum < numbers[right]) {
      right = mid // mid元素较小, 因此mid右边区域可以排除, 但mid有可能是最小值, 需要被保留
    } else right--
    // 需要注意两者相等的情况, 此时不能完全排除任何一半的区域(例如输入[10 1 10 10 10]和输入[10 10 10 1 10])
    // 但此时可以明确排除right指向的那个数字, 无论他是不是最小值, 都有相等的mid可以代替, 因此将right向左移动
  }
  return numbers[left]
  // 比较到最后的情况一定是, 最后一次循环中, left和right重叠, 因此退出循环
  // 此时left和right指针均指向最小值
  // 但mid不一定, 因为left和right指针移动重叠之后就退出循环, 此时mid仍是上一轮计算出来的, 例如输入[3, 1] 
}