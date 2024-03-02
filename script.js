// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  console.log("This is running.");
  let employees = [];
  let addMoreEmployees = true;
  // TODO: Get user input to create and return an array of employee objects
  // get user input
  // ask for first name
  // ask for last name
  // ask for salary
  // make employee objects
  // add them to an array
  // My instructor Dan wrote this comment:  MUST RETURN ARRAY OF EMPLOYEE DATA
  
  while (addMoreEmployees) {
    let firstName = prompt('Enter first name:');
    let lastName = prompt('Enter last name:');
    let salaryInput = prompt('Enter salary:');
    let salary = parseFloat(salaryInput);

    if (isNaN(salary)) {
      salary = 0; // Default salary to 0 if input is not a valid number
    }
 
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    let continueInput = prompt('Do you want to add another employee? (yes/no)');
    if (continueInput.toLowerCase() !== 'yes') {
      addMoreEmployees = false;
    }
  }

  return employees;

}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // My instructor Dan wrote this comment:  use a for loop to go through all the objects
  // My instructor Dan wrote this comment:  get salaries from objects

  const displayAverageSalary = function (employeesArray) {
    let totalSalary = 0;

    for (let i = 0; i < employeesArray.length; i++) {
      totalSalary += employeesArray[i].salary;
    }

    const averageSalry = totalSalary / employeesArray.length;

    console.log(`Average Salary: $${averageSalry.toFixed(2)}`);
    console.log(`Number of Employees: ${employeesArray.length}`);
  }
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // My instructor Dan wrote this comment: don't forget: Math.floor(Math.random()*# of employees)

  const getRandomEmployee = function (employeesArray) {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];

    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
    console.log(`Salary: $${randomEmployee.salary.toLocaleString("en-US", { style: "currency", currency: "USD"})}`);
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
