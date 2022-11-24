/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-08 03:03:16
 * @LastEditTime: 2022-11-24 17:01:20
 * @LastEditors:  
 */
/**
 * 56.合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 根据各区间的左端点排序
  intervals.sort((a, b) => (a[0] - b[0]))

  let result = []
  let pointer = 0 // pointer指向每轮合并过程 所选择的右端点 所在的区间
  let cur = [intervals[0][0], 0]

  for (let i = 1; i < intervals.length; i++) {

    if (intervals[pointer][0] <= intervals[i][0] && intervals[i][0] <= intervals[pointer][1]) {
      // 当前区间和pointer指向的区间发生重叠
      if (intervals[pointer][1] <= intervals[i][1]) {
        // 当前区间提供了更大范围, 移动指针以更新右端点
        pointer = i
      }
    } else { // 未发生重叠
      // 将当前已合并完毕的区间存入result
      cur[1] = intervals[pointer][1]
      result.push(cur)

      // 下一轮将以当前区间为基准 合并新的区间, 因此移动指针并给cur赋值
      pointer = i
      cur = [intervals[i][0], 0]
    }

  }

  // 处理最后一个区间
  cur[1] = intervals[pointer][1]
  result.push(cur)

  return result

}

var intervals = [[1, 3], [9, 18], [8, 10], [2, 6]]

console.log(merge(intervals))