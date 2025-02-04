import Person from "./Person.js";

interface Emp {
    department: String;
    salary: Number;
    getSalary(): Number;
    getDepartments(): String;

}

// Interface for return type checking of getdetails method
interface empDetailsType {
    name: String;
    age: Number;
    dob: Date;
    department: String;
    salary: Number;

}

//multiple inheritance using interface 

export default class Employee extends Person implements Emp {

    department: String;
    salary: Number;
    constructor(name: String, age: Number, dob: String, department: String, salary: Number) {
        super(name, age, dob);
        this.department = department;
        this.salary = salary;
    }

    public getSalary(): Number {
        return this.salary;
    }
    public getDepartments(): String {
        return this.department;
    }
    //Overriding the getDetails method to include department and salary in the returned object.    

    public getDetails(): empDetailsType {

        return { ...super.getDetails(), department: this.department, salary: this.salary }

    }


}

