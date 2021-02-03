// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//Method 1
//let multipliedBy100=numbers.map((num)=>{return num*100});

//Method 2
let multiplyBy100=numbers.map(function(num1){
    return num1*100});

//Method 3
let multiplyByHundred=numbers.map(num2=>num2*100)

//Method 4
let multiplyingBy100=numbers.map(function timesHundred(num3){
    return  num3*100;
})

//Method 5
function multiplyingByHundred(digit){
    return digit*100;
}
let hundredTimes=numbers.map(multiplyingByHundred);


