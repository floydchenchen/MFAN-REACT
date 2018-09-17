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
    fontSize: '38px',
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
    width: 400,
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
    paragraph: {
      margin: '10px',
    }
  }
});


class LocalGovernmentActionTeam extends Component {

  render() {
    const { classes } = this.props;

    const guideline = (
      <ul>
        <li>There is mission alignment with the network.</li>
        <li>There are at least three-four others that have committed to partnering to the work.</li>
        <li>The team has completed the <a href="https://docs.wixstatic.com/ugd/d53ec1_c3ee16f497604d49952eb0ade61e0924.docx?dn=Anti-Racism%20Criteria%20Worksheet.docx" target="_blank" type="document">Anti-Racism & Organizing Criteria Worksheet</a> and submitted to the Strategic Team.</li>
      </ul>
    );

    const responsibility = (
      <ul>
        <li>There is mission alignment with the network.</li>
        <li>There are at least three-four others that have committed to partnering to the work.</li>
        <li>The team has completed the <a href="https://docs.wixstatic.com/ugd/d53ec1_c3ee16f497604d49952eb0ade61e0924.docx?dn=Anti-Racism%20Criteria%20Worksheet.docx" target="_blank" type="document">Anti-Racism & Organizing Criteria Worksheet</a> and submitted to the Strategic Team.</li>
        <li>Provide leadership and accountability to Action Team partners, following <a target='_blank' href={require("../../media/documents/mfan-action-team-expectation.pdf")}>MFAN Action Team Expectations</a>.</li>
        <li>Complete <a target='_blank' href={require("../../media/documents/mfan-action-team-planning-guide.pdf")} type="document">MFAN Action Team Planning Guide</a>.</li>
      </ul>
    );

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          Local Government Action Team
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
                  The Local Government Action Team consists of about 10-15
                  partners representing funding agencies, local public health,
                  and various nonprofit and grassroots organizations.
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
                    <li>The Local Government Action Team is a network of local food access advocates working on multiple issues and engaging across multiple policy levers within local government in the Twin Cities.</li>
                    <li>Action Lead: Nadja Berneche from Terra Soma</li>
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
                      <a target='_blank' href={require('../../media/documents/community-health-in-comprehensive-planning-checklist.pdf')}>
                        Community Health in Comprehensive Planning Checklist
                      </a>
                    </li>
                    <li>
                      <a target='_blank' href="http://mnfoodcharter.com/planningguide/">
                        Minnesota Food Charter Food Access Planning Guide
                      </a>
                    </li>
                    <li>
                      <a target='_blank' href='http://www.seattle.gov/Documents/Departments/OSE/Seattle_food_comp_plan_FINAL_082012.pdf'>
                        Integrating Food Policy in Comprehensive Planning: Strategies and Resources for the City of Seattle
                      </a>
                    </li>
                    <li>
                      <a target='_blank' href="https://www.planning.org/research/foodaccess/">
                        Planning for Food Access and Community Based Food Systems: A National Scan and Evaluation of Local Comprehensive and Sustainability Plans
                      </a>
                    </li>
                    <li>
                      <a target='_blank' href="http://cccfoodpolicy.org/sites/default/files/resources/planning_to_eat_sunybuffalo.pdf">
                        Planning to Eat? Innovative Local Government Plans and Policies to Build Healthy Food Systems in the United States
                      </a>
                    </li>
                    <li>
                      <a target='_blank' href="http://changelabsolutions.org/sites/default/files/Urban_Ag_SeedingTheCity_FINAL_%28CLS_20120530%29_20111021_0.pdf">
                        Seeding the City: Land Use Policies to Promote Urban Agriculture
                      </a>
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
          <h2 className={classes.title} style={{fontSize: '30px'}}>2017 SUCCESS</h2>
          <div>
            The MFAN Comprehensive Planning Team developed the Community Health
            in Comprehensive Planning Checklist to further support food access advocates
            and planners to work together to advance equitable access to healthy food through
            the built environment.
          </div>
        </div>
          <Divider />
        <div className={classes.paragraph}>
          <h2 className={classes.title} style={{fontSize: '30px'}}>2016 SUCCESS</h2>
          <div>
            The Comprehensive Planning Action Team incubated the idea for the
            Minnesota Food Charter Healthy Food Access Planning Guide.
            The guide provides tools, resources, proven policy strategies,
            and recommended planning and zoning language for comprehensive plans,
            so planners and community food advocates can collaborate to design communities
            that promote access to healthy, safe, affordable food. MFAN partners continue
            to collaborate on the implementation of the guide for comprehensive plans
            that will be submitted in 2018.
          </div>
        </div>
          <Divider />
        <div className={classes.paragraph}>
          <h2 className={classes.title} style={{fontSize: '30px'}}>2014 SUCCESS</h2>
          <div>
            Thrive MSP2040 is a visionary document that guides city and county comprehensive
            planning for 30 years. During a revisionary process MFAN partners identified a lack of
            food access language in the proposed language. To address this, 15 MFAN partners came
            together to provide revisionary language to the document, much of which was included in
            the final document used today to guide the metro comprehensive planning process.
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LocalGovernmentActionTeam);
