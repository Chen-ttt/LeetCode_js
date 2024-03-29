/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-08 18:33:20
 * @LastEditTime: 2022-08-08 18:50:27
 * @LastEditors:  
 */
/**
 * 1109.预定航班统计
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 * 
 * 时间复杂度 O(m + n) m次区间操作, 求前缀和时处理n趟航班
 * 空间复杂度 O(1) 不需要额外空间(返回值所用的空间不计入复杂度)
 */

// 思路: 差分数组 + 前缀和
// 1. 根据初始数据计算差分数组, d[i] = n[i] - n[i-1]
// 2. 对于每次区间操作, 只需要计算区间边缘影响到的差值即可
//    假设, 对[L, R]区间内所有元素都加k, 则
//    a. d[L] += k
//    b. d[R + 1] -= k
// 3. 对差分数组求前缀和, 即可得到结果 d[i] += d[i - 1]

// 该方法的重点在于
// 每次对区间进行操作, 只会影响该区间第一个元素和它前一个元素的差值, 该区间最后一个元素和它之后那个元素的差值
// 除此之外, 中间所有元素的差值都不变
// 因此只要保证在若干次操作之后, 差分数组中的差值都正确, 那每个元素的最终结果就是 前一个位置的结果 + 该位置的差值
// 同时, 在计算时是从前往后遍历, 因此也保证了每次计算i位置的最终结果时, d[i -1]是前一个位置的正确答案, 而不是差值

var corpFlightBookings = function (bookings, n) {
  // 本题中的所有航班预订在初始时都是0, 因此差分数组不需要计算, 全是0
  let nums = new Array(n).fill(0)

  // 每次区间操作, 计算区间边缘对差值的影响
  for (const op of bookings) {
    nums[op[0] - 1] += op[2] // 注意, 这题的下标是从1-n, 因此数组操作时要注意-1
    if (op[1] < n) {
      nums[op[1]] -= op[2] // 注意, 如果d[R + 1]已经在数组之外, 那就不需要计算了, 不会对结果造成任何影响, 因为每个结果都和前缀和当前位置的差有关系
    }
  }

  // 对差分数组求前缀和
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}
