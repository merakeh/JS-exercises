function solve(inputArr) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < inputArr.length; i++) {
        inputArr[i] = Number(inputArr[i]); 
        if (inputArr[i] % 2 === 0) {
            even += inputArr[i];
        } else {
            odd += inputArr[i];
        }
    }  
    let result = even - odd;
    console.log(result);  
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8, 10]);