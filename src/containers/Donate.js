import React from 'react'
import flower from '../media/flower.mp4';
import { Button } from 'react-atlas';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import bigLogo from '../media/mfan-logo-600x600.png';
import Typography from '@material-ui/core/Typography';
import CustomCard from '../components/CustomCard';


const styles = theme => ({
  videoContainer: {
    position: "relative",
    width: "100%",
    marginTop: -20
  },
  video: {
    maxWidth: "100%",
    width: "100%",
    height: "auto"
  },
  buttonContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  button: {
    color: "white",
    fontSize: "20px"
  },
  bigLogo: {
    maxWidth: "100%",
    width: "100%",
    height: "auto"
  },
  flexbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  bigLogoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Donate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return [
        <div className={classes.videoContainer}>
          <video className={classes.video} autoPlay loop>
            <source src={flower} type="video/mp4"/>
          </video>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              href="https://crowdfund.umn.edu/civicrm/contribute/transact?id=5&pcpId=1106&reset=1download"
              link
            >
              Donate Now Via URaiseMN
            </Button>
            <Button
              className={classes.button}
              href="https://crowdfund.umn.edu/mfan"
              link
            >
              Visit Our Page on URaiseMN
            </Button>
          </div>
        </div>,
      <div className="container">
        <Grid container spacing={16} xs={12} sm={12} direction="row">
          <Grid item xs={12} sm={5} className={classes.bigLogoContainer}>
            <img className={classes.bigLogo} src={bigLogo} alt="big logo"/>
          </Grid>
          <Grid item xs={12} sm={7} className={classes.flexbox}>
            {/*<Typography variant="headline">Support a network committed to an equitable food system</Typography>*/}
            {/*<Typography variant="body1">Minnesota’s metro cities and counties do not operate in a vacuum. We operate in a regional economy that drives the success of the state. MFAN is comprised of over 400 food systems partners from the seven-county metro region who seek to advance equitable access to healthy food for everyone in the region. We come together to learn, connect, and take collective action through policy and systems approaches that advance our mission.</Typography>*/}
            {/*<br/>*/}
            {/*<Typography variant="headline">Your donation makes an immediate impact</Typography>*/}
            {/*<Typography variant="body1">MFAN is an inviting, innovative, and fun network seeking to advance a bold mission of equitable access to healthy food for all. Your donation will be used to support the network by funding supplies such as food, childcare, and room rental for meetings as well as providing stipends for partners to provide leadership to emerging Action Teams.</Typography>*/}
            <CustomCard
              title="Support a network committed to an equitable food system"
              p={["Minnesota’s metro cities and counties do not operate in a vacuum. We operate in a regional economy that drives the success of the state. MFAN is comprised of over 400 food systems partners from the seven-county metro region who seek to advance equitable access to healthy food for everyone in the region. We come together to learn, connect, and take collective action through policy and systems approaches that advance our mission."]}
            />
            <CustomCard
              title="Your donation makes an immediate impact"
              p={["MFAN is an inviting, innovative, and fun network seeking to advance a bold mission of equitable access to healthy food for all. Your donation will be used to support the network by funding supplies such as food, childcare, and room rental for meetings as well as providing stipends for partners to provide leadership to emerging Action Teams."]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} xs={12} sm={12}>
          <CustomCard
            title="MFAN Success"
            p={[
              "Transforming metro area food shelves to create welcoming and appealing environments to access healthy and culturally appropriate foods through the SuperShelf initiative and our Food Shelf Action Team.",
              "Shifting comprehensive planning language in all seven counties to include language about access to healthy food through our Local Government Action Team.",
              "Engaging in Critical Conversations on Race in the Food System to support partners in no longer upholding and only dismantling institutional racism in the metro area.",
              "Connecting community members, elected officials, and food systems leaders through the Metro Community Meal where over 165 people came together in November 2017 to envision a food system we all deserve over a family-style meal."
            ]}
          />
        </Grid>
      </div>
    ]
  }
}

export default withStyles(styles, { withTheme: true })(Donate);