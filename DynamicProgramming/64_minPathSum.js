/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-09-18 02:17:36
 * @LastEditTime: 2022-09-18 02:17:38
 * @LastEditors:  
 */
/**
 * 64. 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const row = grid.length
  const col = grid[0].length
  let dp = new Array(row).fill(0).map(item => new Array(col).fill(0))

  dp[0][0] = grid[0][0]


  for (let i = 1; i < row; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0]
  }

  for (let i = 1; i < col; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1]
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j]
    }
  }

  return dp[row - 1][col - 1]
}