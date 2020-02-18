// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, 
// now write them out with while loops


// YOUR CODE HERE

//3_fizzbuzz_while
/*
var num = 1;
while (num <=30){   
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
    num ++;
}
*/

/*
//2_sum_while

var sum = 0
var num = 1
while(num <=10){
    sum = num + sum
    console.log("Num:" + num);
    num++
    console.log("Sum:" + sum);

}
*/


//1_print_odds_while
var num = 0
while(num <= 20){  
    if(num % 2 != 0){
    console.log(num);
    }
num++
}
