// Create an algorithm that will loop from 1 to 30
// If a number is divisible by 3 it will print "Fizz"
// if a number is divisible by 5 it will print "Buzz"
// If a number if divisible by 3 AND 5 it will print "FizzBuzz"
// If it is not divisible by either the number will print out

//The expected output will be 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz .... etc 





//YOUR CODE HERE
for (var num = 1; num <= 30; num ++) {    
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(num % 3 === 0){
        console.log("Fizz");
    }
    else if(num % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }
}