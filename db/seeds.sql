INSERT INTO department (department_name)
VALUES ('Engineering'),
('Finance'),
('Legal'),
('Sales');


INSERT INTO role (title, department_id, salary)
VALUES ('Sales Lead', 1, 100000),
('Salesperson', 1, 80000),
('Lead Engineer', 2, 150000),
('Software Engineer', 2, 120000),
('Account Manager', 3, 160000),
('Accountant', 3, 125000),
('Legal Team Lead', 4, 250000),
('Lawyer', 4, 190000);


INSERT INTO employee (first_name, last_name, title, department_name, salary, manager_id)
VALUES ('John', 'Doe', 'Sales Lead', 'Sales', 100000, null),
('Mike', 'Chan', 'Salesperson', 'Sales', 80000, 'John Doe'),
('Ashley', 'Rodriguez', 'Lead Engineer', 'Engineering', 150000, null),
('Kevin', 'Tupik', 'Software Engineer', 'Engineering', 120000, 'Ashley Rodriguez'),
('Kunal', 'Singh', 'Account Manager', 'Finance', 160000, null),
('Malia', 'Brown', 'Accountant', 'Finance', 125000, 'Kunal Singh'),
('Sarah', 'Lourd', 'Legal Team Lead', 'Legal', 250000, null),
('Tom', 'Allen', 'Lawyer', 'Legal', 190000, 'Sarah Lourd');