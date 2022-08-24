/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-24 20:57:52
 * @LastEditTime: 2022-08-24 21:06:26
 * @LastEditors:  
 */

function partition (arr, left, right) {
  let key = arr[left]
  const keyIndex = left

  while (left < right) {
    while (arr[right] > key) right--
    while (arr[left] <= key) left++

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]] // swap
    }
  }

  [arr[keyIndex], arr[right]] = [arr[right], arr[keyIndex]]
  return right
}

function quickSort (arr, start, end) {
  if (start >= end) return
  let p = partition(arr, start, end)
  quickSort(arr, start, p - 1)
  quickSort(arr, p + 1, end)
}


var arr = [4, 3, 2, 1, 9, 5, 0]
quickSort(arr, 0, arr.length - 1)
console.log(arr)