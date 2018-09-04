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

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '30px',
  },
  title: {
    textAlign: 'center',
    fontSize: '33px',
    marginBottom: '50px',
    color: 'rgb(0, 48, 88)',
  },
  media: {
    height: 140,
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
  }
});


class WaysToPartnerWithMFAN extends Component {

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

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          Ways to Partner with MFAN
        </div>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={4}>
            {this.renderCard({
              title: 'Attend A MFAN Event',
              text: 'Join us to learn together, build & strengthen relationships and generate collective action to advance equitable access to healthy food for all. #LearnConnectAct',
              img: require('../../media/Partners/ways-to-partner-attend-event.jpeg'),
              redirect: '/Events/UpcomingEvents',
            })}
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.renderCard({
              title: 'Join an MFAN Action Team',
              text: 'Join others in taking action to advance equitable access to healthy food for all. Current Action Teams include Local Government, Equity and Regulatory. Learn more about what it takes to start a new MFAN Action Team',
              img: require('../../media/Partners/ways-to-partner-action-team.jpeg'),
              redirect: '/Partners/ActionTeams',
            })}
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.renderCard({
              title: 'Join the MFAN Strategic Team',
              text: 'The MFAN Strategic Team meets quarterly to discuss and determine short and long-term strategy for the network. Meetings are open to everyone.',
              img: require('../../media/Partners/ways-to-partner-strategic-team.jpeg'),
              redirect: '/Partners/StrategicTeams',
            })}
          </Grid>
        </Grid>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={4}>
            {this.renderCard({
              title: 'Join the MFAN Partner Directory',
              text: 'IF you have attended at least one MFAN event, we consider you an MFAN partner. Add yourself and find other partners in the MFAN Partner Directory.',
              img: require('../../media/Partners/ways-to-partner-partner-directory.jpeg'),
              redirect: '/Partners/PartnerDirectory',
            })}
          </Grid>
        </Grid>
      </div>
    )

  }
}

export default withStyles(styles)(WaysToPartnerWithMFAN);
