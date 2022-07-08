/**
 * 快速排序
 * 
 * 时间复杂度 O(NlogN) O(N^2)
 *      1. 最好情况: 每次平均划分数组直到长度为1,则一共递归logN次(例如长度为8的数组,共递归3次才能将子数组划分至1); 每次调用partition都遍历N个元素,则复杂度共O(NlogN)
 *      2. 最坏情况: [4, 3, 2, 1]以4划分,每次划分为1和(N-1)长度的数组,又向(N-1)递归; 则一共计算4+3+2+1 = n(n+1)/2次; O(N^2)
 * 空间复杂度 O(logN) O(N)
 *      递归使用栈
 *      1. 最好情况: 递归logN次, 递归树的深度为logN
 *      2. 最坏情况: 递归N-1次, O(N)
 *      若不使用递归则为O(1)
 * 
 * 随机快排
 *   在每次随机选取基准数, 每个数的选中概率是 1/N, 根据数学家的证明，随机快排的时间复杂度会收敛于 O(NlogN), 它并不代表不会出现 O(N ^ 2) 的情况, 而是将最坏的情况变成了随机概率事件
 */

function partition(arr, left, right){
    // var key = nums[Math.floor(Math.random()*(right-left+1) + left)],
    var key = arr[left],
        temp = 0;
    console.log("本轮key", key);
    while(left < right){
        console.log("指针开始移动");
        // 当指针出界时,arr[pointer]会返回undefined,退出while
        while(arr[right] > key) right--;
        console.log("right指针移动到",right);
        while(arr[left] <= key) left++;
        console.log("left指针移动到",left);
        if(left < right){
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            console.log(arr);
        }
    }
    console.log("开始交换重合位置", left, right, arr.indexOf(key));
    temp = arr[arr.indexOf(key)];
    arr[arr.indexOf(key)] = arr[right];
    arr[right] = temp;
    console.log("函数内排序完成 ", arr, "返回right", right);
    return right;

}

function quickSort(arr, start, end){
    if(start>=end) return;
    var p = partition(arr, start, end);
    console.log("排序完毕 start-end", start, end);
    console.log("排序结果 key为", p);
    quickSort(arr, start, p-1);
    quickSort(arr, p+1, end);
}

var arr = [4, 3, 2, 1];
console.log(arr);
quickSort(arr, 0, arr.length-1);
console.log(arr);