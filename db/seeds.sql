INSERT INTO department(department_name)
VALUES ("Accounting"),
       ("Engineer"),
       ("HR"),
       ("Legal"),
       ("Sales"),
       ("Service");

INSERT INTO employee_role(title, salary, department_id)
VALUES ("Accountant", 90000, 1),
       ("Lead Engineer", 130000, 2),
       ("Web Developer", 80000, 2),
       ("Legal Lead", 120000, 4),
       ("Legal Advisor", 100000, 4),
       ("Sales Manager", 80000, 5),
       ("Sales Associate", 50000, 5),
       ("Customer Representative", 40000, 6);

       
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 5, 5),
       ("Mike", "Gar", 6, null),
       ("Tom", "Thompson", 7, 2),
       ("Su", "Fly", 2, null),
       ("James", "Char", 4, null),
       ("Robert", "Downey", 5, 5),
       ("Bill", "Burt", 3, 4);