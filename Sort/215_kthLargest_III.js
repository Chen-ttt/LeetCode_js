/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-08 19:03:11
 * @LastEditTime: 2022-08-24 22:07:57
 * @LastEditors:  
 */
/**
 * 215.数组中第k个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 优化
 *   在每次随机选取基准数, 每个数的选中概率是 1/N, 根据数学家的证明，随机快排的时间复杂度会收敛于 O(NlogN), 它并不代表不会出现 O(N ^ 2) 的情况, 而是将最坏的情况变成了随机概率事件
 */

// 快速排序 -> 快速选择 -> 随机快排
function partition (arr, left, right) {
  const ranIndex = Math.floor(Math.random() * (right - left + 1) + left)
  const key = arr[ranIndex]

  while (left < right) {
    while (arr[right] > key) right--
    while (arr[left] <= key) left++

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
    }
  }

  let idx = arr.indexOf(key)
  // Note. idx和right相同时不能这样换, 会报错
  if (idx !== right) [arr[idx], arr[right]] = [arr[right], arr[idx]]
  return right
}

function quickSort (arr, start, end, kIndex) {
  if (start === end) return start
  if (start > end) return
  const p = partition(arr, start, end)

  if (p === kIndex) return p
  if (p > kIndex) {
    // sort prev part
    return quickSort(arr, start, p - 1, kIndex)
  } else {
    // sort later part
    return quickSort(arr, p + 1, end, kIndex)
  }
}

var findKthLargest = function (nums, k) {
  const index = quickSort(nums, 0, nums.length - 1, nums.length - k)
  return nums[index]
}

var nums = [7, 6, 5, 4, 3, 2, 1]
console.log(findKthLargest(nums, 5))