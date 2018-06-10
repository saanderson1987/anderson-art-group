import Resource from './resource';
import axios from 'axios';

const ProspectCompany = new Resource('companies', 'prospects');

ProspectCompany.getByQuery = function (queryParams, subset='LAST_QUERY') {
  if (queryParams && !queryParams.status) queryParams.status = 'prospect';
  return this.send(
    axios.get(this.baseRoute + '/prospects', {
      params: queryParams
    }),
    `${this.name.toUpperCase()}_GET_MANY`
  );
}

export default ProspectCompany;
