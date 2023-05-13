const inquirer = require('inquirer');

const prompt = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: '',
            message: 'What would you like to do',
            choices: ["Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
        },

    ]);
};