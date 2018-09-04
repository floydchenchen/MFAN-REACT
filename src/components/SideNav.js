// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    }
  }
});


class SideNav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // if each subList is open
      "About Us": false,
      "Events": false,
      "Partners": false,
      "Resources": false
    }
  }

  handleClick = (event, subList) => {
    event.stopPropagation();
    this.setState({ [subList]: !this.state[subList] });
  };

  listData =
    [
      "Home",
      {"About Us": ["About Us", "MFAN History", "Meet the Strategic Team", "Picture Gallery"]},
      {"Events": ["Upcoming Events", "Calendar", "Events History"]},
      {"Partners": ["Ways to Partner with MFAN", "Action Teams", "Strategic Team", "Partner Directory"]},
      {"Resources": ["Tools and Resources", "Critical Conversation on Race", "Equity in Policy Timeline"]},
      "Donate",
      "Blog",
      "Contact Us"
    ];

  stringToUrl = (str) => {
    if (str === "Home") {
      return "";
    }

    return "/" + str.split("").map(char => {
      if (char === " ") {
        return "";
      } else {
        return char;
      }
    }).join("");
  };



  handleNestedList = (item, subArray, urlPrefix) => {
    if (typeof item === "string") {
      return (
        <Link className={this.props.classes.link} to={urlPrefix + this.stringToUrl(item) + "/"} >
          <ListItem button className={subArray ? this.props.classes.nested : null}>
            <ListItemText primary={item}/>
          </ListItem>
        </Link>
      )
    } else {
      return [
        <ListItem button onClick={(event) => this.handleClick(event, Object.keys(item)[0])}>
          <ListItemText primary={Object.keys(item)[0]}/>
          {this.state[Object.keys(item)[0]] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>,
        <Collapse in={this.state[Object.keys(item)[0]]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item[Object.keys(item)[0]].map(subItem => this.handleNestedList(subItem, true, "/" + Object.keys(item)[0].replace(" ", "")))}
          </List>
        </Collapse>
      ]
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.listData.map(item => this.handleNestedList(item, false, ""))}
      </div>
    )
  }
}

export default withStyles(styles)(SideNav);
