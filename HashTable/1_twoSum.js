/**
 * 1.两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度 O(n) n为nums元素数量,哈希表每次查找O(1),最坏情况下需要查找n次
 * 空间复杂度 O(n) 主要为哈希表的开销,最坏情况下需要将n个元素都加入Map/Array
 */


// 方法1 - Map实现
var twoSum = function(nums, target) {
    var map = new Map();
    for(var i=0; i<nums.length; i++){
        // 先查找再添加 - 避免出现自己加自己等于target的情况
        if(map.has(target-nums[i])){ // 判断map中是否有当前nums[i]对应的加数
            return [i, map.get(target-nums[i])];
        }
        map.set(nums[i], i); // 没有则将该键值对放入map,数组下标为value,数值为key,因为之后要用数值和目标值的差来查找
    }
    return [];
};

// 方法2 - Array实现
twoSum = function(nums, target){
    let hash = {};
    for(let i=0; i<nums.length; i++){
        if(hash[target-nums[i]] !== undefined){
            return [hash[target-nums[i]], i];
        }
        hash[nums[i]] = i; // 
    }
}

var nums = [2,7,11,15];
var target = 9;
console.log(twoSum(nums, target));