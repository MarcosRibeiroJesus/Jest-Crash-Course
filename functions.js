const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Marcos'};
        user['lastName'] = 'Ribeiro';
        return user;
    },
    load: (load1, load2) => load1 + load2,
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'Error fetching data'),

}

module.exports = functions;