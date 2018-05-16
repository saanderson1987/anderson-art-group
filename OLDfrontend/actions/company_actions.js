import Action from './action.js';
// import Company from '../api_calls/companies_api_call';

const companyActions = new Action('companies');
export default companyActions;

// export const all = () => dispatch => {
//   return Company.all().then(companies => dispatch({
//     // type: 'GET_ALL_COMPANIES',
//     type: 'GET_ALL',
//     companies
//   }));
// };
