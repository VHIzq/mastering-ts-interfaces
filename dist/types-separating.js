"use strict";
(() => {
    import axios from 'axios';
    import _ from 'lodash';
    lodash_1.default.sample([32, 232, 567]);
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    const printUser = (user) => {
        console.log(user.name);
        console.log(user.email);
        console.log(user.phone);
    };
    axios_1.default
        .get(endpoint)
        .then((res) => {
        const { data } = res;
        data.forEach(printUser);
    })
        .catch((err) => {
        console.log(err);
    });
})();
