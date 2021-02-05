// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
/*Method 1*/
function multiplyBy100(num) {
  return numbers.map((elem) => {
    return elem * 100;
  });
}

/*Method 2*/
let multiplyByHundred = function multiply(numbers) {
  return numbers.map((elem) => {
    return elem * 100;
  });
};

/* Method 3*/
let multiplyingBy100 = function (numbers) {
  return numbers.map((elem) => {
    return elem * 100;
  });
};

/*Method 4*/
let multiplyingByHundred = (numbers) => {
  return numbers.map((elem) => {
    return elem * 100;
  });
};

/*Method 5*/
let multipliedBy100 = (numbers) => numbers.map((elem) => elem * 100);

/*Method 6*/
function timesHundred(num) {
  return num * 100;
}
