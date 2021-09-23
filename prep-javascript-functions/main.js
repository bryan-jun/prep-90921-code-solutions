function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name;

}

var greeting = getGreeting('Bryan');
console.log('greeting', greeting);

function addAndMultiplyby5(num1, num2) {
  return 5 * (num1 + num2);
}

var aM5 = addAndMultiplyby5(1, 2);
console.log('am5', aM5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var mD5 = multiplyAndDivideBy5(1, 2);
console.log('mD5', mD5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(3, 1);
console.log('difference', difference);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}

var circumference = getCircleCircumference(3);
console.log('circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Bryan', 'Jun');
console.log('full Name', fullName);

function cube(number) {
  return number * number * number;
}

var cubeR = cube(3);
console.log('cube ', cubeR);
