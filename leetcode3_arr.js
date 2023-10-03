/*Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.*/
let arr = [1,2,3];
let count = 0;
let j = 1;
outer:
for (let i = 0; i < arr.length; i++) {
    inner:
    for (j = 1; j < arr.length; j++) {
        if (arr[i] == arr[j] & i != j & i < j) {
            count += 1;
            continue inner;
        } else {
            continue inner;
        }
    }
}
console.log(count);