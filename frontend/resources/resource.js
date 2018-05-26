import axios from 'axios';
import merge from 'lodash/merge';

class Resource {
  constructor(name) {
    this.all = this.all.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.reducer = this.reducer.bind(this);
    this.name = name;
    this.baseRoute = `/api/${name}`;
    this.actions = {
      [`${name.toUpperCase()}_GET_MANY`]: (oldState, newData) => {
        return merge({}, oldState, newData);
      },
      [`${name.toUpperCase()}_GET_ONE`]: (oldState, newData) => {
        return merge({}, oldState, {[newData.id]: newData});
      }
    };
  }

  all() {
    return this.send(
      axios.get(this.baseRoute),
      `${this.name.toUpperCase()}_GET_MANY`
    );

  }

  getByQuery(queryParams) {
    return this.send(
      axios.get(this.baseRoute, {
        params: queryParams
      }),
      `${this.name.toUpperCase()}_GET_MANY`
    );
  }

  getById(id) {
    return this.send(
      axios.get(`${this.baseRoute}/${id}`),
      `${this.name.toUpperCase()}_GET_ONE`
    );
  }

  create(record) {
    return this.send(
      axios.post(this.baseRoute, record),
      `${this.name.toUpperCase()}_GET_ONE`
    );
  }

  update(record) {
    return this.send(
      axios.put(`${this.baseRoute}/${record.id}`, record),
      `${this.name.toUpperCase()}_GET_ONE`
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

  reducer(oldState = {}, action) {
    if (!this.actions[action.type]) return oldState;
    return this.actions[action.type](oldState, action.data);
  };

}

export default Resource;
