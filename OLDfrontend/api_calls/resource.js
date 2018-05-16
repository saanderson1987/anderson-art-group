import axios from 'axios';

class Resource {
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
      axios.get(this.baseRoute)
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
      axios.get(`${this.baseRoute}/${id}`)
    );
  }

  create(record) {
    return this.send(
      axios.post(this.baseRoute, record)
    );
  }

  update(record) {
    return this.send(
      axios.put(`${this.baseRoute}/${record.id}`, record)
    );
  }

  delete(id) {
    return this.send(
      axios.delete(`${this.baseRoute}/${id}`)
    );
  }

  send(apiCall) {
    return apiCall
      .then(response => new Promise(resolve => resolve(response.data)));
  }
}

export default Resource;
