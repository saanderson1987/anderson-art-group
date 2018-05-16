import axios from 'axios';

class Action {
  constructor(name) {
    this.name = name;
    this.baseRoute = `/api/${name}`;
    this.all = this.all.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  all() {
    return this.send(
      axios.get(this.baseRoute),
      'GET_ALL'
    );

  }

  getByQuery(queryParams) {
    return this.send(
      axios.get(this.baseRoute, {
        params: queryParams
      })
    );
  }

  getById(id) {
    return this.send(
      axios.get(`${this.baseRoute}/${id}`),
      'GET_ONE'
    );
  }

  create(record) {
    return this.send(
      axios.post(this.baseRoute, record),
      'GET_ONE'
    );
  }

  update(record) {
    return this.send(
      axios.put(`${this.baseRoute}/${record.id}`, record),
      'GET_ONE'
    );
  }

  delete(id) {
    return this.send(
      axios.delete(`${this.baseRoute}/${id}`),
      'DELETE_ONE'
    );
  }

  send(apiCall, type) {
    return function(dispatch) {
      return apiCall
        .then(response => dispatch({
          type,
          data: response.data
        }));
    }
  }
}

export default Action;
