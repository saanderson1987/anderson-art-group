import { combineReducers } from 'redux';
// import companies from './companies_reducer';
import {reducer as companies} from '../resources/company';

// const companies = Company.reducer;

export default combineReducers({
  companies
});
