let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(10);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(10);

let multiplyWithCloser = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByFour = multiplyWithCloser(4);
multiplyByFour(10);
