const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqlroot',
  database: 'company_db'
});

function prompt() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        "View All Departments", 
        "View All Roles", 
        "View All Employees", 
        "Add Department", 
        "Add Role", 
        "Add Employee", 
        "Update Employee Role",
        "Quit"
      ]
    }
  ]).then((answers) => {
    switch (answers.choice) {
      case "View All Departments":
        viewDepartments();
        break;

      case "View All Roles":
        viewRoles();
        break;

      case "View All Employees":
        viewEmployees();
        break;

      case "Add Department":
        addDepartment();
        break;

      case "Add Role":
        addRole();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "Update Employee Role":
        updateEmployeeRole();
        break;

      case "Quit":
        connection.end();
        console.log('Goodbye!');
        break;

      default:
        console.log(`Invalid action: ${answers.choice}`);
        prompt();
    }
  });
}

function viewDepartments() {
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.table(results);
    prompt();
  });
}

function viewRoles() {
  connection.query(`SELECT * FROM role`, (err, results) => {
    if (err) throw err;
    console.table(results);
    prompt();
  });
}

function viewEmployees() {
  connection.query(`
    SELECT * FROM employee`, (err, results) => {
    if (err) throw err;
    console.table(results);
    prompt();
  });
}
  
  // Establish a connection with the database and then call prompt function
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    prompt();
  });
  