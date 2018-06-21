import Resource from './resource';
import axios from 'axios';

class ClientCompanyResource extends Resource {
  getByQuery(queryParams, subset, route) {
    if (!route) queryParams.status = 'client';
    return super.getByQuery(queryParams, subset, route);
  }
}

const ClientCompany = new ClientCompanyResource('companies', 'clients');
export default ClientCompany;
