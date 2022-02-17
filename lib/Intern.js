const Employee = require("./Employee");


class Intern  extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
        super(name, id, email);
    }


    getSchool(){

        return this.school;
    }
    getRole() {
        return "Intern"; //intern 
    }
}

module.exports = Intern;