import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Company from '../../resources/company';
import JobList from '../job/job_list';

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.state = {expanded: false};
  }

  componentDidMount() {
    if (this.props.companyId) this.props.getCompanyById(this.props.companyId);
  }

  toggleExpansion(e) {
    const expanded = this.state.expanded ? false : true;
    this.setState({expanded});
  }

  render() {
    const company = this.props.company ? this.props.company : null;
    if (company) return (
      <div>
        <div>Notes: {company.notes}</div>
        <JobList companyId={this.props.companyId}/>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.companyId) return {
    // companies: Object.values(state.companies)
    company: state.companies[ownProps.companyId]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getCompanyById: (id) => dispatch(Company.getById(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyDetails));
