/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-12 23:36:09
 * @LastEditTime: 2022-08-13 00:33:41
 * @LastEditors:  
 */
/**
 * 200.岛屿数量
 * @param {character[][]} grid
 * @return {number}
 * 
 * 矩阵大小 M*N
 */

// 方法1 - DFS & 递归
// 在网格上做DFS 和在二叉树上做DFS, 唯一的不同就是, 二叉树中只需要递归地遍历左孩子节点和右孩子节点, 而网格中, 需要递归地遍历上下左右 四个节点
// 思路是
// 1. 在网格中用双层for循环遍历每个节点, 一旦遇到陆地, 立即进入dfs
// 2. 在dfs中:
//    a. 递归地遍历上下左右 四个节点, 遇到海洋或已被访问过的地方, 或者走到网格的边界时, 则递归出口; 
//                               遇到海洋, 则开启新的递归
//    b. 对于已遍历过的海洋, 标记为已访问; 防止重复性的访问同一节点, 递归永远无法结束
// 3. 最后, 岛屿的数量 即 进入dfs的次数

// 时间复杂度 O(M*N)
// 空间复杂度 O(M*N) 最坏情况下, 整个网格都是陆地
var numIslands = function (grid) {
  let count = 0,
    row = grid.length,
    col = grid[0].length

  const checkValid = (r, c) => { // 检查该节点是否在网格的合法范围
    return 0 <= r && r < row && 0 <= c && c < col
  }

  let dfs = (r, c) => {
    if (!checkValid(r, c)) { // 走到边界外, 跳过
      return
    }
    if (grid[r][c] !== "1") { // 不是陆地的节点, 跳过
      return
    }

    grid[r][c] = "2" // “2” 表示该节点已被访问
    dfs(r - 1, c) // 上
    dfs(r + 1, c) // 下
    dfs(r, c - 1) // 左
    dfs(r, c + 1) // 右
  }

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] !== "1") continue // 不是陆地, 跳过
      count++
      dfs(r, c)
    }
  }
  return count
}


// 方法2 - BFS & 队列
// 时间复杂度 O(M*N)
// 空间复杂度 O(min(M, N)) 最坏情况下, 整个网格都是陆地
var numIslands = function (grid) {
  let count = 0,
    rowLen = grid.length,
    colLen = grid[0].length,
    queue = []

  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      if (grid[row][col] !== "1") continue
      count++
      queue.push([row, col])
      grid[row][col] = "2"

      while (queue.length) {
        let r, c
        [r, c] = queue.shift()
        if (r - 1 >= 0 && grid[r - 1][c] === "1") {
          queue.push([r - 1, c])
          grid[r - 1][c] = "2"
        }
        if (r + 1 < rowLen && grid[r + 1][c] === "1") {
          queue.push([r + 1, c])
          grid[r + 1][c] = "2"
        }
        if (c - 1 >= 0 && grid[r][c - 1] === "1") {
          queue.push([r, c - 1])
          grid[r][c - 1] = "2"
        }
        if (c + 1 < colLen && grid[r][c + 1] === "1") {
          queue.push([r, c + 1])
          grid[r][c + 1] = "2"
        }
      }
    }
  }
  return count
}