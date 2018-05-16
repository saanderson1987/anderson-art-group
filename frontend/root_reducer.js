import { combineReducers } from 'redux';

import Company from './resources/company';
const companies = Company.reducer;

export default combineReducers({
  companies
});
