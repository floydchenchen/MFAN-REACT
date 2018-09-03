import React from "react";
import { Button, TextField, Hint, Label, Dropdown, Option, Checkbox, Switch, TextArea, CheckboxGroup, Radio, RadioGroup } from 'react-atlas';
import Form from '../components/Form';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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
    justifyContent: "center",
    alignItems: "center"
  }
});

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventTitle: this.props.eventTitle
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <div className="container">
        <Form action="/" onSubmit={(submitObject) => {console.log(submitObject)}}>
          <div className="container">
            <Grid container spacing={16} xs={12} sm={12} direction="row">
              <Grid item xs={10} sm={5}>
                <Grid container spacing={16} xs={12} sm={12} direction="column">
                  <TextField name="firstName" label="First Name: " required/>
                  <TextField name="lastName" label="Last Name: " required/>
                  <TextField name="email" type="email" label="Email: " required/>
                  <TextField name="organization" label="Organization (if Applicable): "/>
                  <TextField name="anything" label="Anything we should know? "/>
                  <div className={classes.button}>
                    <Button primary type="submit">Submit</Button>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={10} sm={7} className={classes.nestedGrid}>
                <Typography variant="headline">MFAN relies on donations to operate. Donate today!</Typography>
                <br/>
                <Button primary href="/Donate/">Donate Today!</Button>
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
export default withStyles(styles, { withTheme: true })(EventForm);