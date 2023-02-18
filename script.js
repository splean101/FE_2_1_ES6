'use strict';

// -----------1-------------

const usersNames = ['Mike', 'Bob', 'Nilola'];
const users = {};
[users.Mike, users.Bob, users.Nicola] = usersNames;
console.log(users);

// -----------2-------------

const salaries = {
  Mike: 1500,
  Bob: 1800,
  Nicola: 1700,
};

function maxSalary(salaries) {
  let maxSalary = 0;
  let employeeName = '';
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      employeeName = name;
    }
  }
  return employeeName;
}

console.log(maxSalary(salaries));
