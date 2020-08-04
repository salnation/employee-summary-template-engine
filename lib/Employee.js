// TODO: Write code to define and export the Employee class

// the rest of our javascript pages for engineer.js, intern.js, and manager.js will inherit this class

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }