/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-29 18:29:00
 * @LastEditTime: 2022-07-29 18:36:04
 * @LastEditors:  
 */
/**
 * 22.生产括号
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var result = []
  if (n === 0) return result

  // leftNum和rightNum表示当前字符串中左边括号和右边括号的数量
  // 用于表示优越条件

  // i表示括号个数, 是n的两倍, 用于控制递归出口
  var dfs = (i, path, leftNum, rightNum) => {
    // 1. 优越条件判断 -- 剪枝
    // 由于每次都先添加左括号, 所以在递归过程中, 左括号一旦少于右括号, 就表示这条路生成的括号们是不合理的
    // 及时放弃, 回溯
    if (leftNum >= rightNum) {
      if (i <= 0) { // 2. 递归出口 -- 走到头, 满足优越条件, 记录
        if (leftNum === rightNum) result.push(path)
      } else {
        // 3. 还没走到头, 继续递归
        dfs(i - 1, path + "(", leftNum + 1, rightNum)
        dfs(i - 1, path + ")", leftNum, rightNum + 1)
      }
    }
  }

  dfs(n * 2, "", 0, 0)
  return result
}