import axios from 'axios';
import Resource from './resource';

const Company = new Resource('companies');

export default Company;

// export const all = () => {
//   return axios.get('/api/companies')
//     .then(response => new Promise(resolve => resolve(response.data)));
// }
