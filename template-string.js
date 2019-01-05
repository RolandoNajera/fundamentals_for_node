let name = 'deadpool';
let real = 'Wade winston';

console.log(name + ' ' + real); //old school
console.log(`${ name } ${ real }`);

function getName() {
    return `${ name } ${ real }`;
}

console.log(`NAme of: ${ getName() }`);