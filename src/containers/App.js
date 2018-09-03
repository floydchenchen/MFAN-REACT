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
<<<<<<< HEAD
import Calendar from '../components/Calendar';



=======
import EventsHistory from '../containers/EventsHistory';
import UpcomingEvents from '../containers/UpcomingEvents';
import Calendar from '../containers/Calendar';
import 'react-vertical-timeline-component/style.min.css';
>>>>>>> 8d77af68e2d437c68c75e4a096ccc880c4a54a21

import 'bootstrap/dist/css/bootstrap.min.css';

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
<<<<<<< HEAD
            <Route exact path="/Events/Calendar"  render={ () => <Calendar />}/>
=======

            <Route exact path="/Events/EventsHistory"  render={ () => <EventsHistory />}/>
            <Route exact path="/Events/Calendar"  render={ () => <Calendar />}/>
            <Route exact path="/Events/UpcomingEvents"  render={ () => <UpcomingEvents />}/>
>>>>>>> 8d77af68e2d437c68c75e4a096ccc880c4a54a21
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
