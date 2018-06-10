import Resource from './resource';
import axios from 'axios';

const ClientCompany = new Resource('companies', 'clients');

ClientCompany.getByQuery = function (queryParams, subset='LAST_QUERY') {
  if (queryParams && !queryParams.status) queryParams.status = 'client';
  return this.send(
    axios.get(this.baseRoute + '/clients', {
      params: queryParams
    }),
    `${this.name.toUpperCase()}_GET_MANY`
  );
}

export default ClientCompany;
