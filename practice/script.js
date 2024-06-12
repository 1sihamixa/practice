let numbers = [9,15,7,80,5,47,66]
let sum = numbers.reduce(function(acc, num) {
    return acc + num;
  }, 0);

document.getElementById("sum").innerHTML = sum;