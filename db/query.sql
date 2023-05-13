SELECT role.title, role.salary, department.department_name AS department FROM role
JOIN department on role.department_id = department.id;

SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department_name, manager.first_name, manager.last_name FROM employee
JOIN role on employee.role_id = role.id
JOIN department on role.department_id = department.id
JOIN employee manager on employee.manager_id = manager.id;