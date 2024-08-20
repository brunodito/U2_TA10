function getSum (nums){
    const sum = nums.reduce((contador, valorActual) => contador + valorActual, 0)
    return sum 
}
const arrayAleatorio = [34, 7, 23, 89, 56, 12, 45, 78, 90, 2];
console.log(getSum(arrayAleatorio))