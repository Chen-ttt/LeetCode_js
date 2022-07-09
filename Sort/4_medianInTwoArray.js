/**
 * 4.寻找俩数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 时间复杂度 O(m+n) T((m+n)/2)
 * 空间复杂度 O(m+n) T((m+n)/2)
 */

// 归并排序思想

/**
 * 1. len 两数组长度和
 *      如果len是单数, 则中位数直接取最中间一位
 *      如果len是双数, 则中位数去中间两位的平均值
 * 2. median 中位数在新数组中的第几个(不是下标)
 *      如果len是单数, 则中位数是数组中的第median个, 下标为median-1
 *      如果len是双数, 则中位数为第median个元素和第median+1个元素的平均值
 * 3. 按照大小依次将两个数组的元素写入newArr, 直到newArr的长度比median大1, 以保证len为双数时计算第median个元素和第median+1个元素的平均值
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    var len = nums1.length + nums2.length,
        median = Math.ceil(len/2), // 如果中位数在新数组的第median位, 下标为median-1
        newArr = [],
        pointer1 = 0,
        pointer2 = 0;

    console.log(nums1[pointer1]===undefined);

    // 生成的新数组一定要比median多一位
    // 还需要防止数组越界, 无论哪个数组越界, if条件都为false, 则直接进入else代码; 若此时是nums2越界, 则会将undefined写入newArr
    while(newArr.length <= median && nums1[pointer1]!==undefined && nums2[pointer2]!==undefined){
        console.log("compare", nums1[pointer1], nums2[pointer2])
        if(nums1[pointer1] <= nums2[pointer2]){
            console.log("push", nums1[pointer1]);
            newArr.push(nums1[pointer1++]);
        }else{
            console.log("push", nums2[pointer2]);
            newArr.push(nums2[pointer2++]);
        }
    }

    // 将仍有元素的数组项写入newArr, 直到enough
    while(newArr.length <= median && nums1[pointer1]!==undefined) newArr.push(nums1[pointer1++]);
    while(newArr.length <= median && nums2[pointer2]!==undefined) newArr.push(nums2[pointer2++]);

    // Special case: 合并的新数组只有一个元素, 直接返回该元素, 否则newArr[newArr.length-2]取值将返回undefined
    if(len === 1) return newArr[0];
    // len单数 - 直接返回倒数第二个元素
    if(len%2 !== 0){
        return newArr[newArr.length-2];
    }
    // len双数 - 需要取平均值
    else{
        return (newArr[newArr.length-2]+newArr[newArr.length-1])/2;
    }
};

var nums1 = [],
    nums2 = [1];
console.log(findMedianSortedArrays(nums1, nums2));