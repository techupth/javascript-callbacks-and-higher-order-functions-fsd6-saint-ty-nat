// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i = 0; i < array.length; i++) {
    operation(array[i]);
  }
}
function Salaries5k(salary) {
  const newSalary = salary + 5000;
  newEmployeeSalaries.push(newSalary);
}
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, Salaries5k);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
