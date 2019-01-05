setTimeout(() => {
    console.log('Hello world');
}, 3000);

let getUserById = (id, callback) => {
    let user = {
        name: 'Rolando',
        id
    }

    if (id === 20) {
        console.log(`The user with id ${ id } does not exist.`);
    } else {
        callback(null, user);
    }
}

getUserById(10, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('User from BD', user);
});