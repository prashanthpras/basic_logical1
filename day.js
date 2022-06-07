//1.Find the Square Root

// let num=prompt("enter a number")
// let result=Math.sqrt(num)
// console.log(result)

//2.Calculate the Area of a Triangle

// let h=prompt("enter the height")
// let b=prompt("enter the base")
// let area=(h*b)/2;
// console.log(area)

//////////////////// Area When All Sides are Known////////////////////

// let a=prompt("enter the first side")
// let b=prompt("enter the second side")
// let c=prompt("enter the third side")
// let s=(a+b+c)/2
// let AreaOfTriangle=Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log(AreaOfTriangle)

//3. Swap Two Variables

//////a.using a Temporary Variable//////////// 

//let a=prompt("enter the first")
// let b=prompt("enter the second")
// let temp;
// temp=a
// a=b
// b=temp
// console.log(a)
// console.log(b)

/////b.Destructuring assignment///////////

// let a = prompt('Enter the first');
// let b = prompt('Enter the second');


// [a, b] = [b, a];

// console.log(a);
// console.log(b);

/////c.Arithmetic way/////

// let a=Number(prompt("enter the first"))
// let b=Number(prompt("enter the second"))

// a=a+b;
// b=a-b
// a=a-b
// console.log(a)
// console.log(b)

//4.kilometers to miles

// let kilometers=prompt("enter the kilomter")
// let factor=0.62
// let miles=0.62*kilometers;
// console.log(miles)

//5.convert celsius to fahrenheit

// let celsius=prompt("enter the celsius")
// let fahrenheit=(celsius*1.8)+32;
// console.log(fahrenheit)

//6. to Generate a Random Number

// const a = Math.random();
// console.log(a)

//7.Check Number Type with if...else if...else

// let number=parseInt(prompt("enter the number"))
// if(number==0){
//     console.log("number is zero")
// }else if (number>0){
//     console.log("number is positive")
// }else {
//     console.log("number is negative")
// }

//8.a.number is odd or even

// let number1=parseInt(prompt("enter the number"))
// if(number%2==0){
//     console.log("number is even")
// }else{
//     console.log("number is odd")
// }

//8.b.using ternary operator

// let number2=parseInt(prompt("enter the number"))
// let result=(number%2==0?"even":"odd")
// console.log(result)

//9.to Find the Largest Among Three Numbers

// let a=parseFloat(prompt("enter the value of a"))
// let b=parseFloat(prompt("enter the value of b"))
// let c=parseFloat(prompt("enter the value of c"))
// if(a>=b&&a>=c){
// console.log("a is the largest")
// }else if(b>=c&&b>=a){
// console.log("b is the largest")
// }else {
//     console.log("c is the largest")
// }

//or//

//9.b using Math.max()

// let a=parseFloat(prompt("enter the value of a"))
// let b=parseFloat(prompt("enter the value of b"))
// let c=parseFloat(prompt("enter the value of c"))
// let largest=Math.max(a,b,c)
// console.log(largest)

//10.Check Prime Number

// let number=parseInt(prompt("enter the number"))
// let flag=true
// for(let i=2;i<=number/2;i++)
// {
//     if(number%i==0){
//         flag=false
//         break;
//     }
// }
// if(flag)
// {
//     console.log("number is a prime")
// }else{
//     console.log("number is  not a prime")
// }
