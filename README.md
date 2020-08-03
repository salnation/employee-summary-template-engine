OOP Homework: Template Engine - Employee Summary

The Challenge: 

- To build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each of these employees

What is this application?

- This is a software engineering team generator command line application.
- The application will prompt the user for information about the team manager and then information about the team members. 
- The user can input any number of team members, and they may be a mix of engineers and interns.

Why do managers want this?

- So they can generate a webpage that displays their team's basic info.
- Also, so they have quick access to emails and GitHub profiles.

This application will require:

- the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) 

- This will be used to prompt the user for their email, id, and specific information based on their role with the company.


Files included in the repository:

- Create multiple HTML templates for each type of user:

  * `main.html`

  * `engineer.html`
  
  * `intern.html`
  
  * `manager.html`
