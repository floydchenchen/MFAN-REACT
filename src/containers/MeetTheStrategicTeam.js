import React from 'react';
import { Text, Button } from 'react-atlas';
import Profile from '../components/Profile'

class MeetTheStrategicTeam extends React.Component {
  render() {
    return (
      <div>
        <div className="container" style={{marginTop:"20px"}}>
          <Text as="h3" style={{textAlign: "center"}} >About the Strategic Team</Text>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <Text as="p" style={{fontSize:"large"}}>Anyone committed to advancing the mission of MFAN, attending quarterly meetings, and
                participating in a work group is welcome to join the Strategic Team.</Text>
              <Text as="p" style={{fontSize:"large"}}>Learn more and considering joining by completing the
                <Text as="a" style={{fontSize:"large"}} href="../media/documents/mfan-strategic-team-information-and-interest-form.docx"> Strategic Team Information and Interest Form</Text>
                . Meetings are open to everyone. Join us at our next meeting.</Text>
              <Text as="p" style={{fontSize:"large"}}>2018 Meeting Dates: 1/8, 4/9, 7/9, 10/8 from 9-10:30 at UROC (2001 Plymouth Ave. N,
                Mpls)</Text>
              <div className="text-center">
                <Button primary target="_blank"
                        href="../media/documents/mfan-strategic-team-information-and-interest-form.docx">Click to download the
                  Strategic Team Information and Interest Form</Button>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="container" style={{marginTop:"20px"}}>

          <hr/>
        </div>
      </div>

    )
  }
}

export default MeetTheStrategicTeam;