// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// function created that inherits from the employee

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }