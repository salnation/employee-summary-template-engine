// TODO: Write code to define and export the Employee class

// the rest of our javaScript pages for engineer.js, intern.js, and manager.js will inherit this class

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee