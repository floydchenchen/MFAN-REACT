import React from 'react';
import { Card } from 'react-atlas';
import Grid from '@material-ui/core/Grid';
import CustomCard from '../components/CustomCard';


const CardsWrapper = () => {
  return(
    <div style={{margin:"50px 0 50px 0"}}>
      <Grid container spacing={16} direction="row" justify="center" alignItems="center">
        <Grid item xs={10} sm={6}>
          <Grid container spacing={16} direction="column" justify="center" alignItems="center">
            <CustomCard
              title="All Are Welcome"
              p="Anyone interested in advancing equitable access to healthy food in the seven-county metro region (and beyond!) are welcome to attend."
            />
            <CustomCard
              title="What to Expect"
              p="We have very interactive meetings where partners come to learn together, build and strengthen relationships, and take action on issues related to advancing equity in the food system."
            />
            <CustomCard
              title="Logistics"
              p="Meetings take place quarterly from 9-12pm at various locations around the seven-county metro region."
            />
            <CustomCard
              title="Special Projects​"
              p="In 2016 the MFAN Equity Action Team designed and facilitated an Equity in Policy Timeline event. The team constructed a 50-foot timeline of the policies that have been put in place over the centuries to create today’s food system. At the meeting, partners “walked the timeline.” Along the way, they saw tangible representations of reasons why study after study show Minnesota has one of the worst rates of food access, especially for black, indigenous, and people of color."
              button="Read More"
              href="#"
            />
          </Grid>
        </Grid>
        <Grid item xs={10} sm={6}>
          <Grid container spacing={24} direction="column" justify="center" alignItems="center">
            <img src={require("../media/main-together.jpeg")} alt="main-together" style={{maxWidth:"100%"}}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default CardsWrapper;