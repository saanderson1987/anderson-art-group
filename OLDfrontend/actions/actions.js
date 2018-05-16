import axios from 'axios';

class Action {
  constructor(resource) {
    this.resource = resource;
  }

  // all() {
  //   const resource = this.resource;
  //   return function(dispatch) {
  //     return resource.all()
  //       .then(data => dispatch({
  //         type: 'GET_ALL',
  //         data
  //       }));
  //   }
  // }

  all() {
    // const resource = this.resource;
    // return function(dispatch) {
    //   return axios.get('/api/companies')
    //     .then(response => dispatch({
    //       type: 'GET_ALL',
    //       data: response.data
    //     }));
    // }
    const apiCall = axios.get('/api/companies');
    return this.send(apiCall, 'GET_ALL');
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
