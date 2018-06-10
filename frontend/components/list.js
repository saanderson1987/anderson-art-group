import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewCompanyModal from './company/new_company_modal';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNewItemModal = this.toggleNewItemModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      location: props.location.pathname,
      isNewItemModalVisible: false
    };
  }

  componentDidMount() {
    this.props.getAll();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) this.props.getAll();
  }

  toggleNewItemModal(options) {
      // let isNewItemModalVisible;
      // if (options.isVisible) isNewItemModalVisible = options.isVisible;
      // else isNewItemModalVisible = this.state.isNewItemModalVisible ? false : true;
      // this.setState({isNewItemModalVisible});
    const isNewItemModalVisible = this.state.isNewItemModalVisible ? false : true;
    this.setState({isNewItemModalVisible});

  }

  toggle(options) {
    const isItemVisible = `is${options.modal}ModalVisible`;
    let isVisible;
    if (options.isVisible) isVisible = options.isVisible;
    else isVisible = this.state[isItemVisible] ? false : true;
    this.setState({[isItemVisible]: isVisible})
  }

  onClickModalOverlay(e) {
    this.toggle({modal: 'NewItem', isVisible: false});
    this.toggle({modal: 'Warning', isVisible: true});
  }

  render() {
    const listName =
      this.props.resource.name[0].toUpperCase() + this.props.resource.name.slice(1);
    const listNameElement = this.props.root ? null :
        <div className='list-name'>{listName}:</div>;

    const items = this.props.items;
    const itemList = items.map( (item, idx) => {
      const isFirst = idx === 0;
      return React.cloneElement(this.props.children, {item, isFirst, key: item.id});
    });

    const newCompanyModal = this.state.isNewItemModalVisible ?
        <NewCompanyModal
          isVisible={this.state.isNewItemModalVisible}
          toggle={this.toggleNewItemModal}
        />
      : null;

    const isRoot = this.props.root ? 'list-items--root' : '';

    return (
      <div className={'list'}>
        {listNameElement}
        <div className={`list-items ${isRoot}`}>
          <button className='button--new' onClick={(e) => this.toggleNewItemModal()}>
            <i className="fas fa-plus-circle"></i><span>Create new</span>
          </button>
          {itemList}
        </div>
        {newCompanyModal}
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
    getAll: () => dispatch(ownProps.resource.getByQuery({columns, ...query}))
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
