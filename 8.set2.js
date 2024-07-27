//q1:  From 1-20 print all numbers div by 3 


// for(let i = 1; i<=20; i++){
//       if(i%3 == 0){
//             console.log(i)
//       }
// }

// q2: Take a number n,  print all numbers from 1- n/2 which divides n completely

// let n = 61

// for(let i = 1; i<=parseInt(n/2); i++){
//      if(n%i ==0){
//             console.log(i)
//      }
// }


// q3: Take  a number , 60, find all factors of that numbers

// 60 => 1, 60

// let n = 60 

// for(let i = 1; i<=60; i++){
//     if(n%i == 0){
//         console.log(i)
//     }
// }


// q4: Take a number and check if it is prime or not

// let n = 7

// factors , count of factors = 2 => prime number

// let count = 0
// for(let i = 1; i<=n; i++){
//       if(n%i == 0){
//         //   console.log(i)
//         count = count+1
//       }
// }

// console.log(count)

// if(count == 2){
//     console.log("Prime")
// }
// else{
//     console.log("Not Prime")
// }



// q5: Find product of all numbers from 1-10

// let prod = 1
// for(let i = 1; i<=5; i++){
//    prod = prod * i
// }

// console.log(prod)

// i = 1, prod = 1 => prod =1

// i = 2, prod =1 =>  prod = 2

// i = 3, prod = 2, => prod = 6

// i = 4, prod = 6 => prod = 24

// i = 5, prod = 24 => prod = 120

// q6: take a number and prints it multiplication table(10 times)



// 2*1 = 2
// 2*2 = 4
// 2*3 = 6
// 2*4 = 8

// let n = 5


// for(let i = 1; i<=10; i++){
//     // console.log(n*i)
//     console.log( n,"x",i,"=",n*i) 
// }