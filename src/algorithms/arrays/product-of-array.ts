/**
 * Given an integer arrays, nums. Return a resultant array product
 * so that product[i] is equal to the product of all the elements
 * nums except nums[i];
 *
 * Time complexity O(n) where n is the length of the array
 * Space complexity O(n) where n is the length of the new array
 *
 * @condition - Algorithm must run in O(n) time without using the division operator
 *
 * @param {number[]} nums -The input array of integers
 * @returns {number[]} - A new array
 *
 * @constraints
 * 2 ≤ nums.length ≤ 10^3
 * -30 ≤ nums[i] ≤ 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer
 */


// Brute force approach with O(n^2) time complexity
// export function findProduct(nums: number[]): number[] {
//     if (!Array.isArray(nums)) {
//         throw new TypeError("Valid an array of integer is required") as never;
//     }

//     let product: number[] = [];
//     let left = 1;

//     nums.forEach((value, index) => {
//         let currentProduct = 1;

//         nums.slice(index + 1).forEach((num) => {
//             currentProduct *= num;
//         });

//         product.push(currentProduct * left);

//         left *= value;
//     });

//     return product;
// }

export function findProduct(nums: number[]): number[] {
    
    if (!Array.isArray(nums)) {
        throw new TypeError("Valid an array of integer is required") as never;
    }

    const n: number = nums.length;
    const result: number[] = new Array(n);
    result[0] = 1;

    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let rightProduct: number = 1;

    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}
