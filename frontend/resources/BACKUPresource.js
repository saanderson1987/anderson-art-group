import axios from 'axios';
import merge from 'lodash.merge';

class Resource {
  constructor(baseRouteName, name) {
    // this.all = this.all.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.reducer = this.reducer.bind(this);
    this.name = name ? name : baseRouteName;
    this.baseRoute = `/api/${baseRouteName}`;
    this.actions = {
      [`${this.name.toUpperCase()}_GET_MANY`]: (oldState, newData) => {
        return merge({}, oldState, newData);
      },
      [`${this.name.toUpperCase()}_GET_ONE`]: (oldState, newData) => {
        return merge({}, oldState, {[newData.id]: newData});
      },
      [`${this.name.toUpperCase()}_DELETE_ONE`]: (oldState, newData) => {
        let newState = merge({}, oldState);
        delete newState[newData.id];
        return newState;
      }
    };
  }

  all() {
    return this.send(
      axios.get(this.baseRoute),
      `${this.name.toUpperCase()}_GET_MANY`
    );

  }

  getByQuery(queryParams, subset='LAST_QUERY') {
    // subset = subset.toUpperCase();
    // this.setAction(subset);
    return this.send(
      axios.get(this.baseRoute, {
        params: queryParams
      }),
      `${this.name.toUpperCase()}_GET_MANY`
    );
  }

  setAction(subset) {
    this.actions[`${this.name.toUpperCase()}_${subset}_GET_MANY`] =
      (oldState, newData) => {
        return merge({}, oldState, {[subset.toLowerCase()]: newData});
      }
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
      `${this.name.toUpperCase()}_DELETE_ONE`
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
