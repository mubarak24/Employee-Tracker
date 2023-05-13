const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

const prompt = () => {
    return inquirer.prompt([

        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ["Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
        },

        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department?',
            when: (answers) => answers.choice === 'Add Department'
        },

        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the role?',
            when: (answers) => answers.choice === 'Add Role'
        },

        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?',
            when: (answers) => answers.choice === 'Add Role'
        },

        {
            type: 'input',
            name: 'department_role',
            message: 'Which department does the role belong to?',
            when: (answers) => answers.choice === 'Add Role'
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is the first name of the employee?',
            when: (answers) => answers.choice === 'Add Employee'
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is the last name of the employee?',
            when: (answers) => answers.choice === 'Add Employee'
        },

        {
            type: 'input',
            name: 'role',
            message: 'What is the role of the employee?',
            when: (answers) => answers.choice === 'Add Employee'
        },

        {
            type: 'input',
            name: 'manager',
            message: 'Who is the manager of the employee?',
            when: (answers) => answers.choice === 'Add Employee'
        },

        {
            type: 'input',
            name: 'update',
            message: 'Which role do you want to update for an employee?',
            when: (answers) => answers.choice === 'Update Employee Role'
        },

        {
            type: 'input',
            name: 'role',
            message: 'Which role do you want to assign the selected employee?',
            when: (answers) => answers.choice === 'Update Employee Role'
        },

    ]).then (function (answers){
        console.log(answers);
        // make if statements to check what the answers.choice is
        db.query("select * from department", function (err, data){
            if (err) throw err
            console.table(data);
            //re-run prompt
        })
    });
};

db.connect((err) => {
    if (err) throw err
    prompt ();
});