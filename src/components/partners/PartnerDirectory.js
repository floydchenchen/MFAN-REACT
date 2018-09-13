import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";

const styles = theme => {

}

const columns = [
 {
  name: "Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "Company",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "City",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "State",
  options: {
   filter: true,
   sort: false,
  }
 },
];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  // None
};


class PartnerDirectory extends Component {

  render() {
    const { classes } = this.props;

    return (
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default withStyles(styles)(PartnerDirectory);
