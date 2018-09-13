import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
  media: {
    height: 140,
  },
  container: {
    marginBottom: '30px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    width: '100%',
    '&:hover': {
      textDecoration: 'none',
    }
  },
  paragraph: {
    margin: '50px 100px 50px 100px',
  }
});


class ActionTeams extends Component {

  renderCard = (data) => {
    const { classes } = this.props;
    const { title, text, img, redirect } = data;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {text}
          </Typography>
        </CardContent>

        <CardActions>
          <Link className={classes.button} to={redirect}>
            <Button className={classes.button} size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }

  renderParagraph = (data) => {
    const { classes } = this.props;

    return (
      <div className={classes.paragraph}>
        <div className={classes.title} style={{fontSize: '30px'}}>
          {data.title}
        </div>
        <div className={classes.text}>
          {data.text}
          {data.list}
        </div>
      </div>
    )
  }

  renderList = (data) => {
    return (
      <ul>
        {data.map(row => {
          return <li>{row}</li>
        })}
      </ul>
    );
  }

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
          Action Teams
        </div>
        <Grid className={classes.container} container spacing={32}>
          <Grid item xs={12} sm={4}>
            {this.renderCard({
              title: 'Local Government Action Team',
              text: 'The Local Government Action Team is a network of local food access advocates working on multiple issues and engaging across multiple policy levers within local government in the Twin Cities.',
              img: require('../../media/Partners/government-action-team.jpeg'),
              redirect: '/Partners/ActionTeams/LocalGovernmentActionTeam',
            })}
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.renderCard({
              title: 'Equity Action Team',
              text: 'Come together to help plan and participate in MFAN Critical Conversations on Race in the Food System event series. Next up will be the development and launch of an "MFAN Partner Equity Commitment" resource.',
              img: require('../../media/Partners/equity-action-team.jpeg'),
              redirect: '/Partners/ActionTeams/EquityActionTeam',
            })}
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.renderCard({
              title: 'Regulatory Action Team',
              text: 'The Regulatory Action Team  works collaboratively to understand and stimulate positive change in the regulatory system in Minnesota and how it affects equitable access to healthy food in the state.',
              img: require('../../media/Partners/regulatory-action-team.jpeg'),
              redirect: '/Partners/ActionTeams/RegulatoryActionTeam',
            })}
          </Grid>
        </Grid>
        {this.renderParagraph({
          title: 'Start An Action Team',
          text: 'Anyone with an idea for collective action to advance equitable access \
            to healthy food can start an MFAN Action Team. Short-term Action Teams \
            address pressing issues, such as a call to action to pass or influence \
            a piece of legislation. Long-term Action Teams evolve to address systemic \
            issues within an area of the food system.',
        })}
        <Divider />
        {this.renderParagraph({
          title: 'Guidelines',
          text: 'Action Teams can be started by anyone that meets the following guidelines:',
          list: guideline,
        })}
        <Divider />
        {this.renderParagraph({
          title: 'Responsibility',
          text: 'Action Team Lead responsibilities include but are not limited to the following:',
          list: responsibility,
        })}
      </div>
    );
  }
}

export default withStyles(styles)(ActionTeams);
