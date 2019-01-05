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

let getEmployee = id => {

    return new Promise((resolve, reject) => {
        let employeeDB = employees.find(employee => employee.id === id);
        console.log(employeeDB);
        if (!employeeDB) {
            reject(`There is not employee with id: ${ id }`);
        } else {
            resolve(employeeDB);
        }
    });
};

let getSalary = employee => {
    return new Promise((resolve, reject) => {
        let salaryDB = salaries.find(salary => employee.id === salary.id);
        if (!salaryDB) {
            reject(`There is no salary for the employee ${ employee.name }`);
        } else {
            resolve({ name: employee.name, salaryAmount: salaryDB.amount });
        }
    });
};

getEmployee(3).then(employee => {
    console.log('Employee ', employee);
    getSalary(employee).then(salary => {
        console.log(salary);
    }, err => console.log(err));
}, err => console.log(err));