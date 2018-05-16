import merge from 'lodash/merge';

// const CompaniesReducer = (oldState = [], action) => {
//   switch (action.type) {
//     case 'GET_ALL':
//       return [...oldState, ...action.data];
//     default:
//       return oldState;
//   }
// };

class Reducer {
  constructor() {
    this.actions = {
      GET_ALL: (oldState, newData) => {
        return [...oldState, ...newData];
      }
      // GET_ALL: merge({}, oldState, action.data),
      // GET_ONE: merge({}, oldState, {[action.data.id]: action.data})
    };
    this.reducer = this.reducer.bind(this);
  }

  reducer(oldState = [], action) {
    if (!this.actions[action.type]) return oldState;
    return this.actions[action.type](oldState, action.data);
  };

}

const CompaniesReducer = new Reducer();

export default CompaniesReducer.reducer;
