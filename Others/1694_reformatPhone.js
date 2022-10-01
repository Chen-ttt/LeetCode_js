/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-10-01 22:05:51
 * @LastEditTime: 2022-10-01 22:06:06
 * @LastEditors:  
 */
/**
 * 1694.重新格式化电话号码
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  let arr = number.split("-")
  let raw = []
  arr.forEach(item => {
    if (item.length > 0) {
      item.split(' ').forEach(sub => {
        if (sub.length > 0) raw.push(sub)
      })
    }
  })

  raw = raw.join("")
  if (raw.length <= 3) return raw

  let round = Math.floor(raw.length / 3)
  if (raw.length % 3 === 1) round -= 1

  arr = []
  let pointer = 0
  for (let i = 0; i < round; i++) {
    pointer = i * 3
    arr.push(raw.substring(pointer, pointer + 3))
    pointer += 3
  }

  if (pointer < raw.length) {
    const rest = raw.length - pointer
    if (rest === 4) {
      arr.push(raw.substring(pointer, pointer + 2))
      arr.push(raw.substring(pointer + 2))

    } else {
      arr.push(raw.substring(pointer))
    }
  }

  return arr.join("-")
}