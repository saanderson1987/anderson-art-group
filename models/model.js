const db = require('../db.js');
const pgp = require('pg-promise')();

class Model {
  constructor(name) {
    this.tableString = name;
    this.table = new pgp.helpers.TableName(name);
  }

  test() {
    const name = 'name';
    const query = pgp.as.format('SELECT ${columns:name} FROM ${table}', {
      columns: ['id', name],
      table: this.table
    });
    return this.format(db.any(query));
  }

  // all(columns) {
  //   // const query = pgp.as.format('SELECT * FROM $1', this.table);
  //   let query;
  //   if (columns) {
  //     columns = columns.split(',');
  //     if (!columns.includes('id')) columns.push('id');
  //     query = pgp.as.format('SELECT ${columns:name} FROM ${table}', {
  //       columns: columns,
  //       table: this.table
  //     });
  //   } else query = pgp.as.format('SELECT * FROM $1', this.table);
  //   return this.format(db.any(query));
  // }

  createWhereClause(columns) {
    let whereClause = '';
    if (columns.length > 0) {
      whereClause = ' WHERE ';
      columns.forEach((column, idx) => {
        if (idx > 0) whereClause += ' AND ';
        whereClause += `${column} = \${${column}}`;
      });
    }
    return whereClause;
  }
  getByQuery(queryParams) {
    let selectClause = 'SELECT *';
    if (queryParams.columns) {
      const selectColumns = queryParams.columns.split(',');
      if (!selectColumns.includes('id')) selectColumns.push('id');
      queryParams.columns = selectColumns;
      selectClause = 'SELECT ${columns:name}';
    }

    let columns = Object.assign({}, queryParams);
    delete columns.columns;
    columns = Object.keys(columns);
    const whereClause = this.createWhereClause(columns);
    // let whereClause = '';
    // if (columns.length > 0) {
    //   whereClause = ' WHERE ';
    //   columns.forEach((column, idx) => {
    //     if (idx > 0) whereClause += ' AND ';
    //     whereClause += `${column} = \${${column}}`;
    //   });
    // }

    queryParams.table = this.table;

    const query = pgp.as.format(selectClause + ' FROM ${table}' + whereClause, queryParams);
    console.log(query);
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
