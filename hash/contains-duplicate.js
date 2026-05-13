/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const count = new Set();
    for (const num of nums) {
        if (count.has(num)) {
            return true;
        }
        count.add(num);
    }
    return false;
};