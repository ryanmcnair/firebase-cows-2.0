import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// STUDENTS: Refactor this to use new Promise syntax
const getCows = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/cows.json`)
    .then((response) => {
      const themCows = response.data;
      const cowsArray = [];
      if (themCows) {
        Object.keys(themCows).forEach((cowId) => {
          cowsArray.push(themCows[cowId]);
        });
      }
      resolve(cowsArray);
    })
    .catch((error) => reject(error));
});

export default { getCows };
