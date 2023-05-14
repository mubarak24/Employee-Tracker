const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
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

function addDepartment() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'department_name',
        message: 'What is the name of the department?'
      }
    ]).then((answers) => {
      connection.query('INSERT INTO department SET ?', {name: answers.department_name}, (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} department inserted!\n`);
        prompt();
      });
    });
  }
  
  function addRole() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'role_title',
        message: 'What is the title of the role?'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?'
      },
      {
        type: 'input',
        name: 'department_id',
        message: 'What is the department ID of the role?'
      }
    ]).then((answers) => {
      connection.query('INSERT INTO role SET ?', {title: answers.role_title, salary: answers.salary, department_id: answers.department_id}, (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} role inserted!\n`);
        prompt();
      });
    });
  }
  
  function addEmployee() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?"
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?"
      },
      {
        type: 'input',
        name: 'role_id',
        message: "What is the employee's role ID?"
      },
      {
        type: 'input',
        name: 'manager_id',
        message: "What is the employee's manager ID?"
      }
    ]).then((answers) => {
      connection.query('INSERT INTO employee SET ?', {first_name: answers.first_name, last_name: answers.last_name, role_id: answers.role_id, manager_id: answers.manager_id}, (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} employee inserted!\n`);
        prompt();
      });
    });
  }
  
  function updateEmployeeRole() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'employee_id',
        message: "What is the ID of the employee whose role you want to update?"
      },
      {
        type: 'input',
        name: 'new_role_id',
        message: "What is the ID of the new role?"
      }
    ]).then((answers) => {
      connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [answers.new_role_id, answers.employee_id], (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} employee updated!\n`);
        prompt();
      });
    });
  }

  
  // Establish a connection with the database and then call prompt function
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    prompt();
  });
  