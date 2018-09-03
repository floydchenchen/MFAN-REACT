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
            <Route exact path="/Events/Calendar"  render={ () => <Calendar />}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
