import React from 'react';
import { Card, List, ListItem, Button, Text } from 'react-atlas';
import Grid from '@material-ui/core/Grid';


class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="container" style={{marginTop: "20px"}}>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <Card
              title="Mission & Vision"
              image={require("../media/AboutUs/about-us-mission.jpeg")}

            >
              <p>MFAN members envision a safe, just, healthy food system for all.</p>
              <p>The mission of MFAN is to leverage collective capacity of partners to advance equitable
                access to healthy food for all Twin Cities metro residents.</p>
              <p>MFAN fulfills its mission through the following core functions.</p>
              <ul>
                <li>Learn from each other.</li>
                <li>Strengthen connections.</li>
                <li>Generate collective action.</li>
              </ul>
            </Card>
          </div>

          <div className="col-sm-12 col-md-4">
            <Card
              title="Mission & Vision"
              image={require("../media/AboutUs/about-us-core-value.jpeg")}
            >
              <p>MFAN members hold the following core values.</p>
              <ul>
                <li>Focus on policy, systems, and environmental approaches to food access.</li>
                <li>Provide a welcoming entry point for all members.</li>
                <li>Equity at the forefront of all decisions.</li>
                <li>Honor all voices.</li>
                <li>Collaboration is the key to success, relationship building is a valued part of the work.</li>
                <li>Open invitation to leadership.</li>
                <li>Intentionally engage diverse stakeholders.</li>
              </ul>
            </Card>
          </div>

          <div className="col-sm-12 col-md-4">
            <Card
              title="Strategic Priorities"
              image={require("../media/AboutUs/about-us-strategic-priorities.jpeg")}
            >
              <p>MFAN uses the following strategic priorities to guide actions.</p>
              <ul>
                <li>To build skills and knowledge of network partners to advance equitable access to healthy food for
                  all.
                </li>
                <li>To define and integrate equity into all network actions.</li>
                <li>To mobilize the network for policy change.</li>
                <li>To clarify the structure and function of the network and address sustainability.</li>
                <li>To engage relationships to advance the mission of the network.</li>
              </ul>
            </Card>
          </div>
        </div>
        <div style={{marginTop:"50px", marginBottom:"50px"}}>
          <Grid container spacing={16} direction="row" justify="center" alignItems="center">
            <Grid item xs={10} sm={6}>
              <Grid container spacing={16} direction="column" justify="center" alignItems="center">
                <Card title="What Our Partners Say" style={{border:"None"}}>
                  <p>All the meetings have been very helpful in my learning about and connecting with others working on food access. The networking is priceless as we all go out and do this work. By working together and not recreating the wheel over and over again we can truly make a difference.</p>
                  <p>Connecting with other local public health and various organizations around the Twin Cities [through MFAN] has been a great way to work across county boundaries. It has been helpful for me to feel more connected with other counties who are doing similar work and facing similar barriers. It has been really food for starting conversations and figuring out solutions together rather than alone. Things seem more do-able when you have a group of people working on things</p>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Grid container spacing={24} direction="column" justify="center" alignItems="center">
                <img src={require("../media/AboutUs/about-us.jpeg")} alt="about-us" style={{maxWidth:"90%"}}/>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Text as="h3" style={{textAlign: "center"}}>Our Funders</Text>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <List>
                <ListItem>
                  <Button link href="http://www.health.state.mn.us/divs/oshii/ship/communities/hennepin.html">Hennepin County SHIP</Button>
                </ListItem>
                <ListItem>
                  <Button link href="https://www.ramseycounty.us/residents/health-medical/public-health-initiatives/statewide-health-improvement-program-ship">St. Paul/Ramsey County SHIP</Button>
                </ListItem>
                <ListItem>
                  <Button link href="https://www.co.dakota.mn.us/Government/publiccommittees/SHIP">Dakota County SHIP</Button>
                </ListItem>
              </List>
            </div>

            <div className="col-sm-12 col-md-6">
              <List>
                <ListItem>
                  <Button link href="http://www.health.state.mn.us/divs/oshii/ship/communities/washington.html">Washington County SHIP</Button>
                </ListItem>
                <ListItem>
                  <Button link href="http://www.health.state.mn.us/divs/oshii/ship/communities/carver.html">Carver County SHIP</Button>
                </ListItem>
                <ListItem>
                  <Button link href="https://extension.umn.edu/teaching-nutrition-education/supplemental-nutrition-assistance-program-education-snap-ed">University of Minnesota Extension SNAP-Ed</Button>
                </ListItem>
              </List>
            </div>
          </div>

        </div>
      </div>
    )
  }
};

export default AboutUs;
