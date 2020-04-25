# 26. 删除排序数组中的重复项

给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

``` js
/** 
 * 解题思路
 * 自己想得一个解题思路
 * 开始理解错误了题意，以为要删除，
 * 所有就判断indexOf是否等于当前下标，不是的话就i--，len也要减一，最后返回nums的长度
 *
*/
let nums = [1, 1, 2]
var removeDuplicates = function(nums) {
    let i = 0, len = nums.length;

    for (; i < len; i++) {
        let n = nums[i]
        if (nums.indexOf(n) !== i) {
            nums.splice(i, 1)
            i--
            len -= 1
        }
    }
    return nums.length
};
console.log(removeDuplicates(nums))
```

### 优化思路

``` js
/** 
 * 事实上正常的解题思路应该是双指针算法（也就是快慢指针）
 * 快指针i正常推进，slow代表慢指针，当前元素与上一个元素不等的话就将慢指针推进一格，并且快指针的值赋值为慢指针的下标。
 * 如果相等慢指针就不动，知道快指针找到不等的值得时候，做赋值操作
 * 仅限条件为数组是排序数组.
*/
let nums = [1, 1, 2]

function sort (nums) {
    let len = nums.length, slow = 1;

    for (let i = 1; i < len; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[slow++] = nums[i]
        }
    }

    return slow
}

console.log(sort(nums), nums)
```