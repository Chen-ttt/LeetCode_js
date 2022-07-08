/**
 * 归并排序
 */

function mergeSort(nums){
    var len = nums.length;
    if(len < 2) return nums; // 已经划分到最小

    var middle = Math.floor(len/2);
    var left = nums.slice(0, middle);
    var right = nums.slice(middle);
    console.log("以", middle, "划分", left, right);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result = [],
        lpointer = 0,
        rpointer = 0,
        lLen = left.length,
        rLen = right.length;
    while(lpointer < lLen && rpointer < rLen){
        if(left[lpointer] < right[rpointer]){
            result.push(left[lpointer++]);
        } else {
            result.push(right[rpointer++]);
        }
    }

    // 若左/右数组还有剩余, 则将左/右数组剩余的元素依次放入result
    while(lpointer < lLen) result.push(left[lpointer++]);
    while(rpointer < rLen) result.push(right[rpointer++]);
    console.log("合并完成", result);
    return result;
}

var nums = [1, 7, 6, 3, 5, 9, 2,8];
console.log("排序完成", mergeSort(nums));