import React from 'react';
import '../public/Footer.css';

class FooterPage extends React.Component {
  render(){
    return(
      <footer id="myFooter">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 myCols">
              <h5>CONTACT US</h5>
              <ul>
                <li><a href="mailto:jbain@umn.edu"><i className="fa fa-envelope"></i> jbain@umn.edu</a></li>
                <li><a href="tel:6122395571"><i className="fa fa-phone"></i> 612-239-5571</a></li>
              </ul>
            </div>
            <div className="col-sm-4 myCols">
              <h5>YOUR MFAN EXPERIENCE</h5>
              <ul>
                <li><a target="_blank" href="https://umn.qualtrics.com/jfe/form/SV_736gtWxJtu97tjL"><i
                  className="fa fa-clipboard"></i> Tell Us About Your Experience</a></li>
                <li><a href="/upcoming-events"><i className="fa fa-user-plus"></i> Join an MFAN Event</a></li>
              </ul>
            </div>
            <div className="col-sm-4 myCols">
              <h5>SIGN ME UP</h5>
              <ul>
                <li><a target="_blank"
                       href="http://umn.us13.list-manage.com/subscribe?u=f970df448d8fb34ec887829a1&id=09405788a4"><i
                  className="fa fa-bullhorn"></i> Add Me To MFAN Contact List</a></li>
                <li><a href="/contact-us"><i className="fa fa-comment"></i> Leave Us a Message</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="social-networks">
          <a href="https://twitter.com/MetroFoodAccess" className="twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/metrofoodaccessnetwork/" className="facebook"><i
            className="fab fa-facebook"></i></a>
        </div>
        <div className="footer-copyright">
          <p> MFAN <i className="far fa-copyright"></i> 2018 </p>
        </div>
      </footer>
      );
  }
}

export default FooterPage;