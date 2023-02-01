let Nums = [1, 2, 3, 4, 5, 10, 50];
let sum = 0;

for (let i = 0; i < Nums.length; i++) { 
    if (Nums[i] > 10) {
        sum +=Nums[i];
    }
}
console.log(sum); 
