/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-29 14:18:06
 * @LastEditTime: 2022-07-29 14:32:33
 * @LastEditors:  
 */
/**
 * 17.电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 * 
 * 假设digits中有m个对应三个字母的数字, n个对应四个字母的数字
 * 时间复杂度 O(m**3 * n**4)
 * 空间复杂度 O(m+n)
 */
var letterCombinations = function (digits) {
  var result = [],
    i = 0

  if (digits.length === 0) return result

  // 用哈希构建映射关系, 查找复杂度为O(1)
  var list = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"]
  ]

  // i是读取digits的指针, 且用于控制递归出口
  var dfs = (i, path) => {
    // 1. 递归出口 - 已走到digits末尾, 将这条路的结果放入result并结束当前递归, 结束后即可回溯到上一节点
    if (i >= digits.length) {
      result.push(path)
    } else { // 2. 没有走到末尾, 需要继续递归
      // 3. 由于每个数字对应的字母个数不同, 因此只能循环进行递归, 每次取一种可能的字母
      for (let ch of list[digits[i] - 2]) { // 注意. 这里有隐式类型转换
        dfs(i + 1, path + ch)
        // 注意. 不可以用++i, 因为会改变当前作用域中i的值, 在下一次回溯到这里的时候, i会递增
        // 而在每次for循环的递归中, 其实i都应该是不变的, 因此使用i+1
      }
    }
  }

  dfs(0, "")
  return result
}