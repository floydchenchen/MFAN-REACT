import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../public/App.css';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Footer from '../containers/Footer';
import PictureGallery from '../containers/PictureGallery';
import AboutUs from '../containers/AboutUs';
import MeetTheStrategicTeam from '../containers/MeetTheStrategicTeam';
import MFANHistory from '../containers/MFANHistory';
import Calendar from '../components/Calendar';
import EventsHistory from '../containers/EventsHistory';
import UpcomingEvents from '../containers/UpcomingEvents';
import WaysToPartnerWithMFAN from '../components/partners/WaysToPartnerWithMFAN';
import ActionTeams from '../components/partners/ActionTeams';
import StrategicTeam from '../components/partners/StrategicTeam';
import PartnerDirectory from '../components/partners/PartnerDirectory';
import LocalGovernmentActionTeam from '../components/partners/LocalGovernmentActionTeam';
import EquityActionTeam from '../components/partners/EquityActionTeam';
import RegulatoryActionTeam from '../components/partners/RegulatoryActionTeam';
import 'react-vertical-timeline-component/style.min.css';
import Blog from './Blog/Blog';
import Donate from '../containers/Donate';
import ContactUs from '../containers/ContactUs';

import 'react-vertical-timeline-component/style.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/react-atlas/lib/atlasThemes.min.css';

const PUBLIC_URL = process.env.PUBLIC_URL || "";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Metro Food Access Network"
    }
  }

  render() {
    return (
      <Router basename={PUBLIC_URL}>
        <div className="app">
          <Header title={this.state.title} />
          <div className="main" style={{marginTop:"20px", marginBottom:"20px"}}>
            <Route exact path={ PUBLIC_URL + "/"}  render={ () => <Main />}/>
            <Route exact path={ PUBLIC_URL + "/AboutUs/AboutUs"}  render={ () => <AboutUs />}/>
            <Route exact path={ PUBLIC_URL + "/AboutUs/MeettheStrategicTeam"}  render={ () => <MeetTheStrategicTeam />}/>
            <Route exact path={ PUBLIC_URL + "/AboutUs/PictureGallery"}  render={ () => <PictureGallery />}/>
            <Route exact path={ PUBLIC_URL + "/AboutUs/MFANHistory"}  render={ () => <MFANHistory />}/>
            <Route exact path={ PUBLIC_URL + "/Events/EventsHistory"}  render={ () => <EventsHistory />}/>
            <Route exact path={ PUBLIC_URL + "/Events/Calendar"}  render={ () => <Calendar />}/>
            <Route exact path={ PUBLIC_URL + "/Events/UpcomingEvents"}  render={ () => <UpcomingEvents />}/>

            <Route exact path={ PUBLIC_URL + "/Partners/WaysToPartnerWithMFAN"} component={WaysToPartnerWithMFAN} />
            <Route exact path={ PUBLIC_URL + "/Partners/ActionTeams"} component={ActionTeams} />
              <Route exact path={ PUBLIC_URL + "/Partners/ActionTeams/LocalGovernmentActionTeam"} component={LocalGovernmentActionTeam} />
              <Route exact path={ PUBLIC_URL + "/Partners/ActionTeams/EquityActionTeam"} component={EquityActionTeam} />
              <Route exact path={ PUBLIC_URL + "/Partners/ActionTeams/RegulatoryActionTeam"} component={RegulatoryActionTeam} />
            <Route exact path={ PUBLIC_URL + "/Partners/StrategicTeam"} component={StrategicTeam} />
            <Route exact path={ PUBLIC_URL + "/Partners/PartnerDirectory"} component={PartnerDirectory} />

            <Route exact path={ PUBLIC_URL + "/Blog"} render={ () => <Blog />} />
            <Route exact path={ PUBLIC_URL + "/Donate"}  render={ () => <Donate />}/>
            <Route exact path={ PUBLIC_URL + "/ContactUs"}  render={ () => <ContactUs />}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
