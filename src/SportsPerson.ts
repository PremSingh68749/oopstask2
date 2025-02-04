import Student from "./Student.js";

// Interface for getdetails in Student class.
interface sportsDetailsType {
    name: String,
    age: Number,
    dob: Date,
    rollNo: Number,
    std: Number,
    division: String,
    sportsType: String,
    weightClass: Number
}
//implementing multilevel inheritance;

export default class sportsPerson extends Student {
    private sportsType: String;
    private weightClass: Number;
    constructor(name: String, age: Number, dob: String, rollNo: Number, std: Number, division: String, sportsType: String, weightClass: Number) {
        super(name, age, dob, rollNo, std, division);
        this.sportsType = sportsType;
        this.weightClass = weightClass;
    }


    public getdetails(): sportsDetailsType {
        return { ...super.getDetails(), sportsType: this.sportsType, weightClass: this.weightClass }

    }
}
