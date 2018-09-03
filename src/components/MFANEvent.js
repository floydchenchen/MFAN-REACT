import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Collapse from '@material-ui/core/Collapse';
import classnames from 'classnames';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import { Button } from 'react-atlas';
import EventForm from '../containers/EventForm';

const styles = theme => ({
  card: {
    width: "100%",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cover: {
    width: 300,
    height: 300,
    maxWidth: "100%",
    margin: 20
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

class MFANEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const {classes, theme} = this.props;
    return [
      <div className="container">
        <Card className={classes.card}>
          <div>
            <Grid container spacing={16} direction="row" justify="center" alignItems="center">
              <Grid item xs={10} sm={5}>
                <CardMedia
                  className={classes.cover}
                  image={this.props.image}
                />
              </Grid>
              <Grid item xs={10} sm={7}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="headline">{this.props.title}</Typography>
                    <Typography variant="subheading" color="textSecondary">
                      {this.props.time} | {this.props.location}
                    </Typography>
                    <br/>
                    {this.props.p.map(paragraph => <Typography variant="body1">{paragraph}</Typography>)}
                    <br/>
                    <Grid item xs={10} sm={6}>
                      <Button primary className={classes.button} onClick={this.handleExpandClick}>
                        {this.state.expanded ? "Collapse" : "Register Now"}
                      </Button>
                    </Grid>
                  </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="Share">
                      <ShareIcon/>
                    </IconButton>
                    <IconButton
                      className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                      })}
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="Show more"
                    >
                      <ExpandMoreIcon/>
                    </IconButton>
                  </CardActions>
                </div>
              </Grid>
            </Grid>
          </div>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="display1">
                Time & Location
              </Typography>
              {this.props.timeAndLocation.map(paragraph => <Typography paragraph>{paragraph}</Typography>)}
              <Typography paragraph variant="display1">
                About The Event
              </Typography>
              {this.props.aboutTheEvent.map(paragraph => <Typography paragraph>{paragraph}</Typography>)}
            </CardContent>
            <EventForm />
          </Collapse>
        </Card>
      </div>,
      <br/>
    ]
  }
}

export default withStyles(styles, { withTheme: true })(MFANEvent);