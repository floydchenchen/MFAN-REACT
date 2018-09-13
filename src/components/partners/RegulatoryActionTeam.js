import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '30px',
    fontSize: '18px',
  },
  title: {
    textAlign: 'center',
    fontSize: '33px',
    marginBottom: '50px',
    color: 'rgb(0, 48, 88)',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '27px',
    fontWeight: 500,
    padding: '10px',
  },
  text: {
    fontSize: '1em',
    fontWeight: 300,
    margin: '0 30px 0 30px',
  },
  img: {
    margin: 'auto',
    maxWidth: '100%',
    height: 300,
    borderRadius: '4px',
  },
  container: {
    marginBottom: '30px',
  },
  paper: {
    height: '100%',
    display: 'flex',
    verticalAlign: 'middle',
    justifyContent: 'space-between',
    padding: '10px',
  },
  column: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    width: '100%',
    '&:hover': {
      textDecoration: 'none',
    },
    textTransform: 'none',
    fontSize: '1em',
  },
  paragraph: {
    margin: '50px 100px 50px 100px',
  },
  '@media (max-width: 918px)': {
    img: {
      width: '70vw',
      margin: 'auto',
    },
    paper: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  }
});


class EquityActionTeam extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          Regulatory Action Team
        </div>
        <div style={{margin: '30px', fontSize: '0.85em'}}>
          The Regulatory Action Team currently aligns with the following Minnesota Food Charter strategy: <br/>
          <div style={{margin: '10px 0 0 20px', fontWeight: 'bold'}}>Streamline food safety and licensing protocols and work towards the modification of regulations which pose barriers to healthy food access.</div>
        </div>
        <Grid className={classes.container} container spacing={32}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <img
                className={classes.img}
                src={require('../../media/Partners/local-government-action-team-partner.jpeg')}
              />
              <CardContent className={classes.column}>
                <Typography className={classes.subtitle} variant="headline" component="h2">
                  Partners
                </Typography>
                <Typography className={classes.text} component="p">
                  <div style={{marginBottom: '10px'}}>This Action Team is working collaboratively to understand and stimulate positive change in the regulatory system in Minnesota and how it affects equitable access to healthy food in the state in the following ways:</div>
                  <ul>
                    <li>Tracking adoption of the issues submitted to the Minnesota Department of Health regarding the Food Code.</li>
                    <li>GIS mapping of WIC vendors in the suburbs to determine if vendors exceed federal distance standards. If they do, other vendors would be added, thereby increasing food access.</li>
                    <li>Supporting efforts to determine how food demos can be carried out in food shelf settings.</li>
                    <li>Amending MN licensing exclusion section 28A.15 to include healthful foods and beverages.</li>
                  </ul>
                </Typography>
                <div style={{height: '30px'}}/>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <img
                className={classes.img}
                src={require('../../media/Partners/local-government-action-team-action.jpeg')}
              />
              <CardContent className={classes.column}>
                <Typography className={classes.subtitle} variant="headline" component="h2">
                  Action
                </Typography>
                <Typography className={classes.text} component="p">
                  <ul>
                    <li>The Regulatory Action Team consists of 4-5 partners representing state agencies, local public health, and nonprofit organizations.</li>
                    <li>Action Lead: Dianne Blaydes from Hennepin County Public Health</li>
                  </ul>
                </Typography>
                <a className={classes.button} href="mailto:nadja@terrasoma.com">
                  <Button className={classes.button} size="small" color="primary">
                    Contact Action Lead via Email
                  </Button>
                </a>
              </CardContent>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(EquityActionTeam);
