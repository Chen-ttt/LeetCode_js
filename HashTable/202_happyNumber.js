/**
 * 202.快乐数
 * @param {number} n
 * @return {boolean}
 * 时间复杂度 O(logn)
 * 空间复杂度 O(logn)
 */

// 方法1
var calSqrt = function(num){
    var s = num + '';
    var sum = 0;
    for(var i=0; i<s.length; i++){ // 数位分离,求平方和
        sum += Number(s[i]) ** 2;
    }
    return sum;
}
var isHappy = function(n) {
    var set = new Set();
    // 出现1,意味着该数是快乐数
    // 出现重复结果,说明循环开始,意味着该数不是快乐数,结束循环
    while(n!=1 && !set.has(n)){
        set.add(n); // 每轮结果加入哈希表
        n = calSqrt(n);
    }
    return n===1;
};

// 方法2
calSqrt = function(n){
    let sum = 0;
    while (n) {
        sum += (n % 10) ** 2; // 取个位数并平方
        n =  Math.floor(n/10); // 舍去个位数;Math.floor为向下取整
    }
    return sum;
}

var num = 19;
console.log(isHappy(num));