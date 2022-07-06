/**
 * 1047. 删除字符串中的所有相邻重复项
 * @param {string} s
 * @return {string}
 * 
 * 时间复杂度 O(N) 遍历字符串,长度为N
 * 空间复杂度 O(N) 最坏情况下字符串全部入栈
 */
 var removeDuplicates = function(s) {
    const stack = [];
    for(const i of s){
        if(!stack.length || stack[stack.length-1] !== i) stack.push(i);
        else stack.pop();
    }
    return stack.join('');
};

var removeDuplicates = function(s) {
    const stack = [];
    for(const x of s) {
        let c = null;
        if(stack.length && x === (c = stack.pop())) continue;
        c && stack.push(c);
        stack.push(x);
    }
    return stack.join("");
};

var s = "abbaca";
console.log(removeDuplicates(s));