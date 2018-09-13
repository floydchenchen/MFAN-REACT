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
  },
  text: {
    fontSize: '1em',
    fontWeight: 300,
    margin: '0 30px 0 30px',
  },
  img: {
    maxWidth: '100%',
    height: 300,
    borderRadius: '4px',
    margin: '20px',
  },
  container: {
    marginBottom: '30px',
  },
  paper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
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
          Equity Action Team
        </div>
        <div style={{margin: '30px', fontSize: '0.85em'}}>
          The Equity Action Team currently aligns with the overall theme of the
          <a target='_blank' href='http://mnfoodcharter.com/the-charter/'> Minnesota Food Charter </a>
          and the companion
          <a target='_blank' href='http://mnfoodcharter.com/wp-content/uploads/2014/10/MinnesotaFoodCharterHealthEquityGuide.pdf'> Health Equity Guide </a>
          of advancing equity in the MN food system.
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
                  <ul>
                    <li>To help design and participate in the Critical Conversations on Race in the Food System event series of MFAN.</li>
                    <li>Following the Critical Conversations, partners will come together to develop an "MFAN Equity Commitment" campaign. The campaign will include a list of BIPOC and LGBTQ owned/operated businesses for individuals, organizations, and institutions to commit to spending their resources at, including food businesses, IT support, office supplies, maintenance, etc.</li>
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
                    <li>The Equity Action Team consists of about 15 partners representing funding agencies, local public health, and various nonprofit, social justice, and grassroots organizations.</li>
                    <li>Action Lead: Samty Xiong from The Food Group</li>
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
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <img
                className={classes.img}
                src={require('../../media/Partners/local-government-action-team-tools.jpeg')}
              />
              <CardContent className={classes.column}>
                <Typography className={classes.subtitle} variant="headline" component="h2">
                  Tools & Resources
                </Typography>
                <Typography className={classes.text} component="p">
                  <ul>
                    <li>
                      <Link to='/Resources/'>
                        Community Health in Comprehensive Planning Checklist
                      </Link>
                    </li>
                  </ul>
                </Typography>
                <a className={classes.button} target='_blank' href="https://drive.google.com/drive/folders/0B6v2FLpdM5X1MVhMTl9lYWtlZk0">
                  <Button className={classes.button} size="small" color="primary">
                    Find Notes from Previous Meetings
                  </Button>
                </a>
              </CardContent>
            </Paper>
          </Grid>
        </Grid>
        <div className={classes.paragraph}>
          <h2 className={classes.title}>2017 & 2018 SUCCESS</h2>
          <div>
            MFAN hosted a series of six Critical Conversations on Race in the Food System.
            The series covered issues on communicating about race, White Supremacy Culture,
            and Organizational Equity. Over 120 MFAN partners attended at least one of the sessions.
            The series took place from December 2017 - April 2018.
          </div>
        </div>
          <Divider />
        <div className={classes.paragraph}>
          <h2 className={classes.title}>2016 SUCCESS</h2>
          <div>
            MFAN leveraged funding to support a part-time position to coordinate
            the MFAN Equity Action Team. Together the team provided recommendations
            to improve the equity practices of the network.  They also designed and facilitated
            an Equity in Policy Timeline experience where partners walked an over 50 foot
            timeline of policies and systems that have been put in place over the last several
            centuries to create the food system we have today.
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EquityActionTeam);
