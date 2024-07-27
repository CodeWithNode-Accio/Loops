// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// Input:
// Two lines of input each containing a single integer.
// Output:
// A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Example:

// Case 1:
// Input:
// 10
// 20
// Output:
// 0

// Case 2:
// 30
// 45
// Output:
// 40*42*44 = 29568



// 100 - 200


let a = 50
let b = 60

let flag = false


// 562
let prod = 1
for(let i = a; i<=b; i++){
   let lastTwoDigit = i%100 // 62
   let secondLast = parseInt(lastTwoDigit/10) // 6.2

   if(i%2==0 && secondLast == 4){
       console.log(i)
        prod = prod * i
      flag = true
   }
   
}

// console.log("product",prod)

if(flag == false){
   console.log(0)
}
else{
    console.log(prod)
}