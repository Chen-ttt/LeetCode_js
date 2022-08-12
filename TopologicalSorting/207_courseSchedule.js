/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-12 17:40:43
 * @LastEditTime: 2022-08-12 18:04:48
 * @LastEditors:  
 */
/**
 * 课程表
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// BFS + 队列
var canFinish = function (numCourses, prerequisites) {
  // 1. 构建入度表和表示课程关系的字典(key为先修课程, value为该课程的所有后续课程 组成的数组)
  let inDegree = new Array(numCourses).fill(0)
  let map = {}

  for (const pair of prerequisites) {
    inDegree[pair[0]]++
    if (map[pair[1]]) { // 先修课程pair[1]已被统计过, 则直接加入该后续课程pair[1]
      map[pair[1]].push(pair[0])
    } else {
      map[pair[1]] = [pair[0]] // 若查不到 该先修课程pair[1], 则添加该属性, 注意, value一定是数组
    }
  }

  // 2. 将入度为0(即现在可以修的课)放入队列
  let queue = []
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }

  // 3. 依次出队, 同时将出队元素的所有后续课程的入度 - 1, 减完后若入度为0, 则表示现在可以修了, 放入队列
  let count = 0
  while (queue.length) { // 当队列元素全部出队列, 则结束循环
    const currentNode = queue.shift()
    count++

    const destNodes = map[currentNode]
    if (destNodes) {
      for (let n of destNodes) {
        inDegree[n]--
        if (inDegree[n] === 0) {
          queue.push(n)
        }
      }
    }
  }
  return count === numCourses // 若此时收集到的已出队元素的个数少于课程总个数, 则说明, 仍有元素未入队列, 图中剩余元素组成了环
}