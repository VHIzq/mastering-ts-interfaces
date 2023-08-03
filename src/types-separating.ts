(() => {
  import axios from 'axios';
  import _ from 'lodash';

  _.sample([32, 232, 567]);

  const endpoint = 'https://jsonplaceholder.typicode.com/users';
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }

  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }

  interface Geo {
    lat: string;
    lng: string;
  }

  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  const printUser = (user: User) => {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
  };

  axios
    .get<User[]>(endpoint)
    .then((res) => {
      const { data } = res;
      data.forEach(printUser);
    })
    .catch((err) => {
      console.log(err);
    });
})();
