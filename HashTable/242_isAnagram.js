/**
 * 242.有效的字母异位词
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 * 时间复杂度 O(n) n为s的长度
 * 空间复杂度 O(S) S为字符集的大小,此处S=26
 */

var isAnagram = function(s, t) {
    if(s.length!=t.length) return false;
    var hash = new Array(26).fill(0);
    var base = 'a'.charCodeAt(); // 'a'的ACSII码
    for(var i=0; i<s.length; i++){
        // 利用ASCII码将字符映射到数组下标
        hash[s[i].charCodeAt()-base]++;
        hash[t[i].charCodeAt()-base]--;
    }
    for(const i of hash){
        if(i) return false;
    }
    return true; // 数组元素全为0才返回true
};

var s1 = "anagram",
    s2 = "nagatam";
console.log(isAnagram(s1, s2));