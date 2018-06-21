import axios from 'axios';

const Session = {

  isAuthenticated: function() {
    return function(dispatch) {
      return axios.get('/api/isAuthenticated')
        .then(response => dispatch({
          type: 'IS_AUTHENTICATED',
          data: response.data
        }));
    }
  },

  reducer: function(oldState = {}, action) {
    return {isAuthenticated: action.data};
  }
}

export default Session;
