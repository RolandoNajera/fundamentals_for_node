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

let getEmployee = async id => {
    let employeeDB = employees.find(employee => employee.id === id);
    console.log(employeeDB);
    if (!employeeDB) {
        throw new Error(`There is not employee with id: ${ id }`);
    } else {
        return employeeDB;
    }
};

let getSalary = async employee => {
    let salaryDB = salaries.find(salary => employee.id === salary.id);
    if (!salaryDB) {
        throw new Error(`There is no salary for the employee ${ employee.name }`);
    } else {
        return { name: employee.name, salaryAmount: salaryDB.amount };
    }
};

let getInformation = async id => {
    let employee = await getEmployee(id);
    let resp = await getSalary(employee);
    return `${ resp.name } has a salary of ${ resp.salaryAmount }`;

};

getInformation(3).then(res => { console.log(res); }).catch(err => console.log(err));