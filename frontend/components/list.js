import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import isEqual from 'lodash.isequal';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: props.location.pathname};
  }

  componentDidMount() {
    this.props.getAll();
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.query, this.props.query)) this.props.getAll();
  }

  render() {
    const createNew = this.props.createNew;

    const listName =
      this.props.resource.name[0].toUpperCase() + this.props.resource.name.slice(1);
    const listNameElement = this.props.root ? null :
        <div className='list-name'>{listName}:</div>;
    const isRoot = this.props.root ? 'list-items--root' : '';
    const items = this.props.items;
    const itemList = items.map( (item, idx) => {
      // const isLast = idx === items.length - 1;
      const isFirst = idx === 0;
      return React.cloneElement(this.props.children, {item, isFirst});
    });
    // <div><i class="fas fa-plus-circle"></i>Create New</div>
    return (
      <div className={'list'}>
        {listNameElement}
        <div className={`list-items ${isRoot}`}>
        <button className='button--new'><i className="fas fa-plus-circle"></i><span>Create new</span></button>
          {itemList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: Object.values(state[ownProps.resource.name])
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const columns = ownProps.columns ? ownProps.columns : 'name';
  const query = ownProps.query ? ownProps.query : {};
  return {
    getAll: () => dispatch(ownProps.resource.getByQuery({columns, ...query})),
    createNew: (item) => dispatch(ownProps.resource.create(item))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));


// <button onClick={function() {createNew(newJob);}}>Create new {this.props.itemName}</button>

// function makeList (resource, ListItem) {
//   const mapStateToProps = state => {
//     return {
//       items: Object.values(state[resource.name])
//     }
//   };
//   const mapDispatchToProps = dispatch => {
//     return {
//       getAll: () => dispatch(resource.all()),
//       createNew: (item) => dispatch(resource.create(item))
//     }
//   };
//   class List extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//
//     componentDidMount() {
//       this.props.getAll();
//     }
//
//     render() {
//       const newJob = {
//         name: 'TestJob5',
//         po_num: '123ABC',
//         company_id: 1
//       };
//       const listName = resource.name[0].toUpperCase() + resource.name.slice(1);
//       const createNew = this.props.createNew;
//       const items = this.props.items;
//       const itemList = items.map(item => {
//         return <ListItem item={item}/>
//       });
//       return (
//         <div>
//           {listName}:
//           <ul>
//             {itemList}
//           </ul>
//           <button onClick={function() {createNew(newJob);}}>Create new {this.props.itemName}</button>
//         </div>
//       );
//     }
//   }
//
//   return withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
// }
//
// export default makeList;
