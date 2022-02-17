class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName();
    getId();
    getEmail();
    getRole();

}

class Manager {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;


    }

    getRole(); //return manager
}


class Engineer {
    constructor(name, id, email, gitHub) {
        this.github = gitHub;

    }

    getGithub();

    getRole(); //return engineer

}

class Intern {
    constructor(name, id, email, school) {
        this.school = school;
    }

    getRole(); //intern 
}