import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideNav from '../components/SideNav';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    }
  },
};

class Header extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <SideNav />
        </List>
      </div>
    );

    return (
      <AppBar position="static" style={{background:"#003058"}}>
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="Menu" style={{color:"white"}}>
            <MenuIcon onClick={this.toggleDrawer('left', true)} />
          </IconButton>
          <Button variant="title" style={{color:"white"}}>
            <img src={require('../media/brand-logo.png')} alt="brand-logo" width="40px" height="auto"/>
          </Button>
          <Typography variant="title" className={classes.flex} style={{flexGrow:"1", color:"white"}}>
            {this.props.title}
          </Typography>
          <Link className={classes.link} to="/ContactUs/">
            <Button style={{color:"white"}}>Contact Us</Button>
          </Link>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
