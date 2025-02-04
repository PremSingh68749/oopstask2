import Person from "./Person.js";

// This Interface is for getdetails method of Student Class.
interface studentDetailsType {
    name: String;
    age: Number;
    dob: Date;
    rollNo: Number;
    std: Number;
    division: String;
}


export default class Student extends Person {

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
