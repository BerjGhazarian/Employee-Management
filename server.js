const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "password",
      database: "employee_db",
    },
    console.log(`Connected to the employee database.`)
  );

  function mainMenu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "viewOptions",
          message: "What would you like to do?",
          choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "I'm Done",
          ],
        },
      ])
      .then(answers => {
        switch (answers.viewOptions) {
          case "View All Departments":
            return viewAllDepts();
          case "View All Roles":
            return viewAllRoles();
          case "View All Employees":
            return viewAllEmployees();
          case "Add Department":
            return addDepartment();
          case "Add Role":
            return addRole();
          case "Add Employee":
            return addEmployee();
          case "Update Employee Role":
            return updateEmpRole();
          default:
            process.exit()
        }
      });
  }

  function viewAllDepts() {
    const sql = `SELECT id AS id, department_name AS department FROM department ORDER 
    BY department.department_name`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
      mainMenu();
    });

    function viewAllRoles() {
       const sql = `SELECT er.id, er.title, er.salary, d.department_name AS department FROM employee_role er 
       JOIN department d ON er.department_id = d.id`
     
       db.query(sql, (err, rows) => {
         if (err) {
           console.log(err);
           return;
         }
         console.table(rows)
         mainMenu();
       })
     }
     function viewAllEmployees() {
        const sql = `SELECT e.id, e.first_name, e.last_name, er.title AS role, er.salary, d.department_name AS department, 
        m.first_name AS manager FROM employee e LEFT JOIN employee_role er ON e.role_id = er.id LEFT JOIN department d ON er.department_id = d.id LEFT JOIN 
        employee m ON m.id = e.manager_id ORDER BY e.first_name`
      
        db.query(sql, (err, rows) => {
          if (err) {
            console.log(err);
            return;
          }
          console.table(rows)
          mainMenu();
        })
      }
      function addDepartment() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "addDept",
              message: "What is the name of the department?",
            },
          ])
          .then(answers => {
            // need to send the answer into the department database
            const sql = `INSERT INTO department(department_name) VALUES(?)`;
            const params = answers.addDept;
      
            db.query(sql, params, (err, result) => {
              if (err) {
                console.log(err);
                return;
              }
              console.info(`added ${answers.addDept} to the database`);
              mainMenu();
            });
          });
      }
      