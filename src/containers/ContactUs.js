import React from "react";
import Form from '../components/Form';
import config from '../config';
import { Button, TextField, TextArea } from 'react-atlas';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const MAP_API_CONFIG = config.MAP_API || process.env.MAP_API;

const styles = theme => ({
  verticalFlexbox: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: 20
  },
  nestedGrid: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "50px !important",
  }
});

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxLength: 500
    };
  }

  handleMessageOnChange = (event) => {
    this.setState({ message: event.target.value })
  };

  render() {
    const {classes} = this.props;
    return (
      <div className="container">
        <div className="container" style={{marginBottom: "50px"}}>
          <iframe
            width="100%"
            height="450"
            frameBorder="0" style={{border: 0}}
            src={`https://www.google.com/maps/embed/v1/place?key=${MAP_API_CONFIG}&q=UROC,Minneapolis+MN`}
            allowFullScreen
          />
        </div>
        <Form action="/" onSubmit={(submitObject) => {console.log(submitObject)}}>
          <div className="container">
            <Grid container spacing={16} xs={12} sm={12} direction="row">
              <Grid item xs={10} sm={5}>
                <Grid container spacing={16} xs={12} sm={12} direction="column">
                  <Typography variant="headline">Contact Us</Typography>
                  <TextField name="name" label="Name: " required/>
                  <TextField name="email" type="email" label="Email: " required/>
                  <TextField name="subject" label="Subject: "/>
                  <TextArea name="message" label="Message: " required onChange={this.handleMessageOnChange} maxLength={this.state.maxLength}/>
                  <Typography>{1000 - this.state.maxLength - this.state.message.length} character(s) left</Typography>
                  <div className={classes.button}>
                    <Button primary type="submit">Submit</Button>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={10} sm={7} className={classes.nestedGrid}>
                <Typography variant="headline">UROP</Typography>
                <br/>
                <Typography variant="subheading">2001 Plymouth Ave N, Minneapolis, MN 55407</Typography>
                <br/>
                <Typography variant="subheading">jbain@umn.edu</Typography>
                <br/>
                <Typography variant="subheading">Tel: 612-239-5571</Typography>
              </Grid>
            </Grid>
          </div>
          <br/>
          <div></div>
        </Form>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ContactUs);