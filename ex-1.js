// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i = 0; i < array.length; i++) {
    let newSalary = increase5kSalary(array[i]);
    newEmployeeSalaries.push(newSalary);
  }
}

function increase5kSalary(num) {
  let newNum = num + 5000;
  return newNum;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, increase5kSalary);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
