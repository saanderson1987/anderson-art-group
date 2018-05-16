const db = require('../db.js');
const pgp = require('pg-promise')();

class Model {
  constructor(name) {
    this.tableString = name;
    this.table = new pgp.helpers.TableName(name);
  }

  all() {
    const query = pgp.as.format('SELECT * FROM $1', this.table);
    return this.format(db.any(query));
  }

  getByQuery(queryParams) {
    console.log(queryParams);
    const columns = Object.keys(queryParams);
    let whereClause = ' WHERE ';
    columns.forEach((column, idx) => {
      if (idx > 0) whereClause += ' AND ';
      whereClause += `${column} = \${${column}}`;
    });
    queryParams.table = this.table;

    const query = pgp.as.format('SELECT * FROM ${table}' + whereClause, queryParams);
    return this.format(db.any(query));
  }

  getById(id) {
    if (this.isInvalidId(id)) return this.error('id');
    const query = pgp.as.format('SELECT * FROM ${table} WHERE id = ${id}', {
      table: this.table,
      id
    });
    return this.returnIfIdExists(db.one(query));
  }

  new(record) {
    const columns = Object.keys(record);
    const colSet = new pgp.helpers.ColumnSet(columns, {table: this.tableString});
    const query = pgp.helpers.insert(record, colSet) + ' RETURNING *';
    return db.one(query);
  }

  update(record) {
    record['?id'] = record.id;
    delete record.id;
    const columns = Object.keys(record);
    const colSet = new pgp.helpers.ColumnSet(columns, {table: this.tableString});
    const query = pgp.helpers.update(record, colSet) + ' WHERE id = ' + record['?id'] + ' RETURNING *';
    return this.returnIfIdExists(db.one(query));
  }

  delete(id) {
    const query = pgp.as.format('DELETE FROM ${table} WHERE id = ${id} RETURNING id', {
      id: id,
      table: this.table
    })
    return this.returnIfIdExists(db.one(query));
  }

  isInvalidId(id) {
    // return id === null || id === undefined || typeof id !== 'number';
    const parsedId = Number(id);
    Number.isNaN(parsedId);
  }

  returnIfIdExists(query) {
    return query
      .then((data) => {
        return new Promise((resolve, reject) => {
          resolve(data);
        });
      })
      .catch((err) => {
        if (err.code === 0) return this.error('id');
      });
  }

  error(type) {
    // @param {string} type
    if (!type) type = 'errorMessageType';
    const message = {
      errorMessageType: 'Error: wrong error message type',
      id: "Error: Please enter a valid id",
    };
    return new Promise((resolve, reject) => {
      reject({ message: message[type] });
    });
  }

  format(query) {
    return query
      .then((records) => {
        const obj = {};
        records.forEach((record) => {
          obj[record.id] = record;
        });
        return new Promise((resolve, reject) => {
          resolve(obj);
        });
      });
  }

}

module.exports = Model;
