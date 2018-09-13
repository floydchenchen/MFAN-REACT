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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Metro Food Access Network"
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header title={this.state.title} />
          <div className="main" style={{marginTop:"20px", marginBottom:"20px"}}>
            <Route exact path="/"  render={ () => <Main />}/>
            <Route exact path="/AboutUs/AboutUs"  render={ () => <AboutUs />}/>
            <Route exact path="/AboutUs/MeettheStrategicTeam"  render={ () => <MeetTheStrategicTeam />}/>
            <Route exact path="/AboutUs/PictureGallery"  render={ () => <PictureGallery />}/>
            <Route exact path="/AboutUs/MFANHistory"  render={ () => <MFANHistory />}/>
            <Route exact path="/Events/EventsHistory"  render={ () => <EventsHistory />}/>
            <Route exact path="/Events/Calendar"  render={ () => <Calendar />}/>
            <Route exact path="/Events/UpcomingEvents"  render={ () => <UpcomingEvents />}/>

            <Route exact path="/Partners/WaysToPartnerWithMFAN" component={WaysToPartnerWithMFAN} />
            <Route exact path="/Partners/ActionTeams" component={ActionTeams} />
              <Route exact path="/Partners/ActionTeams/LocalGovernmentActionTeam" component={LocalGovernmentActionTeam} />
              <Route exact path="/Partners/ActionTeams/EquityActionTeam" component={EquityActionTeam} />
              <Route exact path="/Partners/ActionTeams/RegulatoryActionTeam" component={RegulatoryActionTeam} />
            <Route exact path="/Partners/StrategicTeam" component={StrategicTeam} />
            <Route exact path="/Partners/PartnerDirectory" component={PartnerDirectory} />

            <Route exact path="/Blog" render={ () => <Blog />} />
            <Route exact path="/Donate"  render={ () => <Donate />}/>
            <Route exact path="/ContactUs"  render={ () => <ContactUs />}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
