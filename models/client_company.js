const Model = require('./model.js');

const ClientCompany = new Model('company');

ClientCompany.createWhereClause = function (columns) {
  let whereClause = ` WHERE status = 'client' `;
  if (columns.length > 0) {
    columns.forEach((column, idx) => {
      if (idx > 0) whereClause += ' AND ';
      whereClause += `${column} = \${${column}}`;
    });
  }
  console.log(whereClause);
  return whereClause;
}

module.exports = ClientCompany;
