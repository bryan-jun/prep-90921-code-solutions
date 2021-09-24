var person = {
  firstName: 'Bryan',
  lastName: 'Jun',
  hobby: 'Golf'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log('Full name is ', fullName);

person.job = 'SWE';

console.log('His job is ', person.job);

person.previousJob = 'Banker';

console.log('His previous job is ', person.previousJob);

console.log(person);
