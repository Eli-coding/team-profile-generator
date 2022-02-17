const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
       

    }
    getOfficeNumber(){
      return this.officeNumber;
    }; //return property of this field that belongs to this class.
    getRole() {
      return "Manager";
    }; //return manager
}

module.exports = Manager;