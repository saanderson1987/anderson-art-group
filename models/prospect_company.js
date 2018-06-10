const Model = require('./model.js');

const ProspectCompany = new Model('company');

ProspectCompany.createWhereClause = function (columns) {
  let whereClause = `WHERE status = 'prospect'`;
  if (columns.length > 0) {
    whereClause = ' WHERE ';
    columns.forEach((column, idx) => {
      if (idx > 0) whereClause += ' AND ';
      whereClause += `${column} = \${${column}}`;
    });
  }
  console.log(whereClause);
  return whereClause;
}

module.exports = ProspectCompany;
