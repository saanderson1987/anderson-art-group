import Resource from './resource';
import axios from 'axios';

class VendorCompanyResource extends Resource {
  getByQuery(queryParams={}, subset, route) {
    queryParams.status = 'vendor';
    return super.getByQuery(queryParams, subset, route);
  }

  create(record, subset, route) {
    record.status = 'vendor';
    return super.create(record, subset, route);
  }

}

const VendorCompany = new VendorCompanyResource('companies', 'vendors');
export default VendorCompany;
