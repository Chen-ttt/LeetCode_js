/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-10-17 21:34:20
 * @LastEditTime: 2022-10-17 21:34:24
 * @LastEditors:  
 */
/**
 * 1535.找出数组游戏的赢家
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// 注意: 不可以每次真的将元素放入队尾, 复杂度过高

var getWinner = function (arr, k) {
  let max = Math.max(arr[0], arr[1])
  let winTime = 1

  let pointer = 2

  while (pointer < arr.length && winTime < k) {
    // 判断当前元素是否可以更新最大值
    if (arr[pointer] > max) {
      // 如果更新了最大值, 重置winTime
      max = arr[pointer]
      winTime = 1
    } else {
      winTime++ // 否则, 增加胜利次数
    }

    // 当前胜利次数达到要求, 直接返回当前解
    if (winTime >= k) return max

    pointer++
  }

  return max
}