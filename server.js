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
  