/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-24 15:08:08
 * @LastEditTime: 2022-07-24 16:24:55
 * @LastEditors:  
 */
/**
 * 162.寻找峰值
 * @param {number[]} nums
 * @return {number}
 */
// 方法1. 复杂度 O(n)
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0
  var slow = 0,
    fast = 1
  while (fast < nums.length) {
    if (nums[slow] <= nums[fast]) {
      slow++
      fast++
    } else if (nums[slow] > nums[fast]) {
      return slow
    }
  }
  return slow
}

// 方法2. 二分查找 O(logN)
// 处理边界
var checkEdge = function (length, mid) {
  if ((mid - 1) < 0 && (mid + 1) > length - 1) return 1 // 左右都越界, 此时mid就是峰值
  else if ((mid - 1) < 0) return 0 // 右边越界, mid指针有可能是从其他地方移动过来的, 那么mid就是峰值, 也有可能初始就在这里, 此时需要比较
  else if ((mid + 1) > length - 1) return 1 // 左越界, 此时mid就是峰值
  else return 2 // 没越界, 需要继续比较
}

var findPeakElement = function (nums) {
  if (nums.length === 1) return 0
  var left = 0,
    right = nums.length - 1,
    mid = 0
  while (left < right) {
    mid = Math.floor((right - left) / 2) + left
    var flag = checkEdge(nums.length, mid) // 判断是否抵达边界

    if (flag === 2) {
      if (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) return mid
      else if (nums[mid + 1] > nums[mid]) {
        left = mid + 1
      } else if (nums[mid + 1] < nums[mid]) {
        right = mid - 1
      }
    }

    else if (flag === 1) return mid

    else {
      if (nums[mid + 1] > nums[mid]) {
        left = mid + 1
      } else return mid
    }
  }
  return left
}