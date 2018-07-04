const Model = require('./model.js');
const InstallationJobOrder = require('./installation_job_order');
const pgp = require('pg-promise')();

class InstallationModel extends Model {

  getByQuery(queryParams) {
    queryParams.joinTable = new pgp.helpers.TableName('installation_job_order');
    queryParams.joinClause = ' INNER JOIN ${joinTable} on installation_job_order.installation_id = t1.id'
    return super.getByQuery(queryParams);
  }

  new(record) {
    const newInstallationRecord = {...record};
    delete newInstallationRecord.job_order_id;
    super.new(newInstallationRecord).then(newRecord => {
      const newInstallationJobOrderRecord = {
        job_order_id: record.job_order_id,
        installation_id: newRecord.id
      };
      InstallationJobOrder.new(newInstallationJobOrderRecord).then(() => {
        return new Promise((resolve, reject) => {
          resolve(newRecord);
        });
      })
    })
  }
}

const Installation = new InstallationModel('installation');
module.exports = Installation;

// select installation_job_order.job_order_id, t1.installation_date, t1.completed, t1.id
// from installation as t1
// inner join installation_job_order on installation_job_order.installation_id = t1.id
// where installation_job_order.job_order_id = 1;
