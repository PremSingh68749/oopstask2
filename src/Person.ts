import { convertStringToDate } from "./utils.js";

//This Interface to specify the type of getDetails method
interface personDetailsType {
    name: String;
    age: Number;
    dob: Date;
}


// This is the top level class Person that will be Inherited by Student and Employee Class.
export default class Person {
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