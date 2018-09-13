import React from 'react';
import MFANEvent from '../components/MFANEvent';

const styles = theme => ({});

class UpcomingEvents extends React.Component {

  render() {
    return (
      <div className="container">
        <MFANEvent
          image="https://www.google.com/logos/doodles/2018/labor-day-2018-5651792808378368-l.png"
          title="MFAN Ripple Effect Mapping"
          time="Fri, Sep 07"
          location="The Wedge Table"
          p={["In order to continue to work towards our important mission, MFAN must be able to \"sell\" the importance of the network to it's stakeholders. Ripple Effect Mapping is a fun and interactive way to understand the intended and UNintended outcomes of our work through storytelling and conversation."]}
          timeAndLocation={["Sep 07, 12:00 PM – 2:30 PM", "The Wedge Table, 2412 Nicollet Ave, Minneapolis, MN 55404, USA"]}
          aboutTheEvent={["You are being asked to attend because you have been an important partner to the network in our five years of engaging food systems advocates in the metro region to advance equitable access to healthy food for all.", "In order to continue to work towards our important mission, MFAN must be able to \"sell\" the importance of the network to it's stakeholders. Ripple Effect Mapping is a fun and interactive way to understand the intended and UNintended outcomes of our work through storytelling and conversation.", "Please join us for a lunch and great conversation that will help MFAN continue to support equitable access to healthy food for all."]}
        />
        <MFANEvent
          image="https://www.google.com/logos/doodles/2018/labor-day-2018-5651792808378368-l.png"
          title="MFAN Q4: MFAN's Strategic Priorities - Racial Equity & Policy/Advocacy"
          time="Wed, Nov 14"
          location="Location is TBD"
          p={["Making connections and taking leadership in the strategic priorities of MFAN - Racial Equity & Policy/Advocacy."]}
          timeAndLocation={["Nov 14, 9:00 AM – 1:00 PM", ""]}
          aboutTheEvent={[]}
        />
      </div>
    );
  }
}

export  default UpcomingEvents;