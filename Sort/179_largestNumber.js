/**
 * 179. 最大数
 * @param {number[]} nums
 * @return {string}
 */

/**
 * map()方法创建一个新数组, 这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成
 * 
 * arr.map(function callback(currentValue, index, array]，thisArg) 
 *   1. currentValue - 数组中正在处理的当前元素。
 *   2. index - 数组中正在处理的当前元素的索引。 可选
 *   3. array - map方法调用的数组; 如果thisArg参数提供给map, 则会被用作回调函数的this值. 否则undefined会被用作回调函数的this值
 */

/**
 * sort()方法对数组进行排序, 原地排序, 不产生新数组
 * 默认调用数组项的toString方法并比较字符串, 按照升序排列数组
 * 
 * 回调函数 返回值小于0则交换ab, 大于0则不交换
 * !!! (a, b) 在原数组的顺序是反的
 *     例如对于[10，2], 则第一轮排序, a=2 b=10
 */
 var largestNumber = function(nums) {
    if(Number(nums.join(''))){
        return nums.map(x => x.toString()).sort((a,b) => {
            if(a+b > b+a){ // 不可以单独比较a和b, 例如3和30比较, js认为30更大, 拼接结果就是303, 但并没有330大; 因此需要比较330和303
                return -1; // swap
            }
            else return 1; // 不动
        }).join('');
    }
    return '0';
};

var nums = [3,30,34,5,9];
console.log(largestNumber(nums));