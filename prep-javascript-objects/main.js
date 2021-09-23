var person = {
  firstName: 'Bryan',
  lastName: 'Jun',
  hobby: 'golf'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'SWE';

console.log("The person's job is:", person.job);

person.previousJob = 'Banker';

console.log("The person's previous job is: ", person.previousJob);

console.log(person);
