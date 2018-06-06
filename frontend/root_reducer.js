import { combineReducers } from 'redux';

import Session from './resources/session';
const session = Session.reducer;
import Company from './resources/company';
const companies = Company.reducer;
import Job from './resources/job';
const jobs = Job.reducer;
import JobOrder from './resources/job_order';
const job_orders = JobOrder.reducer;

export default combineReducers({
  session,
  companies,
  jobs,
  job_orders
});
