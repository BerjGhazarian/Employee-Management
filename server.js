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