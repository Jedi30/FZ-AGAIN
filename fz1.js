let answer=parseInt(prompt("Enter the number you like"))

for(i=1;i<=answer;i++){
    console.log(i);

if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
}    

if(i%3===0){
    console.log("Fizz");
}
else if (i%5===0) {
    console.log("Buzz");
}
}