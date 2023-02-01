let Nums = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

for (let i = 0; i < Nums.length; i++) { 
    if (Nums[i] % 2 != 0) {
        sum += Nums[i];
    }
}
console.log(sum); 
