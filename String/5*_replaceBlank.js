/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-10 23:54:57
 * @LastEditTime: 2022-08-10 23:55:12
 * @LastEditors:  
 */
/**
 * 5*.替换空格
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let arr = s.split(" ")
  return arr.join("%20")
}