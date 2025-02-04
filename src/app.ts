import Student from "./Student.js";
import Employee from "./Employee.js";
import sportsPerson from "./SportsPerson.js";
// Creating an instance of Sub Class Student and calling its methods.
const testStudent: Student = new Student("Prem Singh", 21, '02-08-2003', 36, 12, 'A');

console.log('subClass Method:', testStudent.getDetails());

//calling methods from super class 
console.log('superClass Method:', { name: testStudent.getName(), age: testStudent.getAge(), dob: testStudent.getDob(), });

const testEmp: Employee = new Employee("jhon", 22, "03-05-2002", "software development", 450000);

console.log('multiple inheritance method:', testEmp.getDetails());

const testSportsPerson: sportsPerson = new sportsPerson("robert", 22, "23-5-2002", 37, 12, "A", "Wrestling", 70)
console.log("Multilevel Inheritance", testSportsPerson.getDetails());
export { };



