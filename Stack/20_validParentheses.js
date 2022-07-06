/**
 * 20.有效的括号
 * @param {string} s
 * @return {boolean}
 * 
 * 时间复杂度 O(N) N为字符串长度,遍历了字符串
 * 空间复杂度 O(N) 最坏情况下,会将所有括号全部入栈,例如(((((
 */
 var isValid = function(s) {
    if (s.length % 2 == 1) return false;
    var stack = [];
    var map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    for(var i of s){
        if(i in map){ // 遇到左括号入栈
            stack.push(map[i]);
        } else if(i==='}' || i===']' || i===')'){ // 遇到右括号,弹出栈顶元素进行匹配
            if(stack.pop()!=i) return false;
        } else return false;
    }
    
    return !stack.length; // 栈空则有效
};

var s = "[()]{}";
console.log(isValid(s));
