import axios from 'axios';

const apiUrl = 'https://api.github.com';

export const getUser = (user) => {
  return axios.get(`${apiUrl}/users/${user}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export const getRepos = (user) => {
  return axios.get(`${apiUrl}/users/${user}/repos`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}