//Importing string to Date method form utils
import { convertStringToDate } from "./utils.js";

//This Interface to specify the type of getDetails method
interface personDetailsType {
    name: String;
    age: Number;
    dob: Date;
}


// This is the top level class Person that will be Inherited by Student and Employee Class.
class Person {
    private name: String;
    private age: Number;
    private dob: Date;

    constructor(name: String, age: Number, dob: String) {
        this.name = name;
        this.age = age;
        this.dob = convertStringToDate(dob);
    }

    public getName(): String {
        return this.name;
    }

    public getAge(): Number {
        return this.age;
    }
    public getDob(): Date {
        return this.dob;
    }

    // Protected method will be overridden by derived classes
    protected getDetails(): personDetailsType {
        return { name: this.name, age: this.age, dob: this.dob };
    }

}

// This Interface is for getdetails method of Student Class.
interface studentDetailsType {
    name: String;
    age: Number;
    dob: Date;
    rollNo: Number;
    std: Number;
    division: String;
}


class Student extends Person {

    private rollNo: Number;
    private std: Number;
    private division: String;

    constructor(name: String, age: Number, dob: String, rollNo: Number, std: Number, division: String) {
        // Calling the constructor of parent class.
        super(name, age, dob);
        this.rollNo = rollNo;
        this.std = std;
        this.division = division;

    }

    // Overriding the getDetails method to include rollNo, std and division in the returned object.
    public getDetails(): studentDetailsType {
        return { ...super.getDetails(), rollNo: this.rollNo, std: this.std, division: this.division }

    }

}

// Creating an instance of Sub Class Student and calling its methods.
const testStudent: Student = new Student("Prem Singh", 21, '02-08-2003', 36, 12, 'A');

console.log('subClass Method:', testStudent.getDetails());

//calling methods from super class 
console.log('superClass Method:', { name: testStudent.getName(), age: testStudent.getAge(), dob: testStudent.getDob(), });



export { };