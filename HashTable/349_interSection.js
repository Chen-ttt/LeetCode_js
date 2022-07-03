/**
 * 349. 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 哈希表可快速判断一个元素是否出现集合里,查找为O(1)
 * 时间复杂度 O(m+n) m和n分别为两个数组的长度,将nums2的元素储存进set需要O(n),遍历nums1的元素并判断是否在哈希表中需要O(m)
 * 空间复杂度 O(m+n) 
 */
 var intersection = function(nums1, nums2) {
    var set2 = new Set(nums2);
    return [... new Set(nums1.filter(num => set2.has(num)))];

    // var interSet = new Set(nums1.filter(num => set2.has(num)));
    // return [...interSet];
};

intersection = function(nums1, nums2) {
    const arr = [];
    nums1 = [... new Set(nums1)];
    nums2 = [... new Set(nums2)];
    
    for(let i of nums1) {
        nums2.includes(i) && arr.push(i)
    }
    return arr
};


nums1 = [1, 2, 3, 1];
nums2 = [2, 3];
console.log(intersection(nums1, nums2));