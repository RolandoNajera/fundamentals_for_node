let employees = [{
    id: 1,
    name: 'Rolando'
}, {
    id: 2,
    name: 'Sugar'
}, {
    id: 3,
    name: 'Peter'
}];

let salaries = [{
    id: 1,
    amount: 1500
}, {
    id: 2,
    amount: 2500
}]

let getEmployee = (id, callback) => {
    let employeeDB = employees.find(employee => employee.id === id);
    console.log(employeeDB);
    if (!employeeDB) {
        callback(`There is not employee with id: ${ id }`);
    } else {
        callback(null, employeeDB);
    }
};

let getSalary = (employee, callback) => {
    let salaryDB = salaries.find(salary => employee.id === salary.id);
    if (!salaryDB) {
        callback(`There is no salary for the employee ${ employee.name }`);
    } else {
        callback(null, { name: employee.name, salaryAmount: salaryDB.amount });
    }
};

getEmployee(1, (err, employee) => {
    if (err) {
        return console.log(err);
    }
    getSalary(employee, (err, employeeSalary) => {
        if (err) {
            return console.log(err);
        }
        console.log(employeeSalary);
    });
    console.log(employee);
});