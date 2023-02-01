let Nums = [1, 2, 1, 4, 1, 6, 1];
let sum = 0;

for (let i = 0; i < Nums.length; i++) { 
    if (i % 2 == 0) {
        sum += Nums[i];
    }
}
console.log(sum); 
