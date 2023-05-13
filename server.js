const inquirer = require('inquirer');

const prompt = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: '',
            message: 'What would you like to do?',
            choices: ["Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
        },

        {
            type: 'input',
            name: '',
            message: 'What is the name of the department?',
        },

        {
            type: 'input',
            name: '',
            message: 'What is the name of the role?',
        },

        {
            type: 'input',
            name: '',
            message: 'What is the salary of the role?',
        },

        {
            type: 'input',
            name: '',
            message: 'Which department does the role belong to?',
        },

        {
            type: 'input',
            name: '',
            message: 'What is the first name of the employee?',
        },

        {
            type: 'input',
            name: '',
            message: 'What is the last name of the employee?',
        },

        {
            type: 'input',
            name: '',
            message: 'What is the role of the employee?',
        },

        {
            type: 'input',
            name: '',
            message: 'Who is the manager of the employee?',
        },

        {
            type: 'input',
            name: '',
            message: 'Which role do you want to update for an employee?',
        },

        {
            type: 'input',
            name: '',
            message: 'Which role do you want to assign the selected employee?',
        },

    ]);
};