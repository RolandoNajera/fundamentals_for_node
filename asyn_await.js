/** Asyn and Await */

//let getName = async() => { return 'Rolando'; };

let getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Rolando');
        }, 3000);
    });
};

let greeting = async() => {
    let name = await getName();
    return `Hola ${ name }`
};

greeting().then(message => console.log(message))
    .catch(err => console.log(err));