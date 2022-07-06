/**
 * 150. 逆波兰表达式求值
 * @param {string[]} tokens
 * @return {number}
 */

// 方法一 - 单独使用函数计算局部表达式
function calculate(num2, num1, op){ // !!!先出栈的是第二个操作数,要注意顺序
    switch(op){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2 > 0? Math.floor(num1/num2) : Math.ceil(num1/num2);
        default:
            return undefined;
    }
}

var evalRPN = function(tokens) {
    var stack = [];
    for(var i of tokens){
        // 转换成功的是数字,入账
        if(Number(i)+'' !== 'NaN') stack.push(Number(i));
        // 遇到符号,出栈两个数,计算结果并入栈
        else if(i==="+" || i==='-' || i==='*' || i==='/'){
            stack.push(calculate(stack.pop(), stack.pop(), i));
        }
    }
    return stack[0];
};

// 方法二 - 使用map结构的键值对储存运算和对应的表达式
evalRPN = function(tokens){
    const s = new Map([
        ["+", (a, b) => a * 1  + b * 1],
        ["-", (a, b) => b - a],
        ["*", (a, b) => b * a],
        ["/", (a, b) => (b / a) | 0]
    ]);
    const stack = [];
    for (const i of tokens) {
        if(!s.has(i)){ // map中找不到说明是数字,入栈
            stack.push(i);
            continue;
        }
        stack.push(s.get(i)(stack.pop(),stack.pop())); // 寻找当前符号对应的表达式,并传入参数进行计算
    }
    return stack.pop();
};

var tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));