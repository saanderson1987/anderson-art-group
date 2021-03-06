import { combineReducers } from 'redux';

import Session from './resources/session';
const session = Session.reducer;
import Company from './resources/company';
const companies = Company.reducer;
import ProspectCompany from './resources/prospect_company';
const prospects = ProspectCompany.reducer;
import ClientCompany from './resources/client_company';
const clients = ClientCompany.reducer;
import Job from './resources/job';
const jobs = Job.reducer;
import JobOrder from './resources/job_order';
const job_orders = JobOrder.reducer;

export default combineReducers({
  session,
  companies,
  prospects,
  clients,
  jobs,
  job_orders
});
