import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import CustomVerticalTimelineElement from '../components/CustomVerticaltimelineElement';
import Icon2018 from '../components/Icons/Icon2018';
import Icon2017 from '../components/Icons/Icon2017';
import Icon2016 from '../components/Icons/Icon2016';
import Icon2015 from '../components/Icons/Icon2015';
import Icon2014 from '../components/Icons/Icon2014';
import Icon2013 from '../components/Icons/Icon2013';
import Icon2012 from '../components/Icons/Icon2012';


class EventsHistory extends React.Component {
  render() {
    return (
      <VerticalTimeline>
        <CustomVerticalTimelineElement
          bg="#5bc0de"
          icon={<Icon2018/>}
          time="2018"
          list={["The Power of a Network: What Can we Do Better Together?", "Developing Personal Policy Action Plans", "Racial Equity", "Working Across Sectors: From Silos to Synergies"]}
        />
        <CustomVerticalTimelineElement
          bg="#f0ad4e"
          icon={<Icon2017/>}
          time="2017"
          list={["Strategic Visioning Retreat","Q1 - State Food Legislation", "MFAN Bus Adventure", "Q2 - Farm Bill", "Q3 - Institutional Racism", "Q4 - Metro Community Meal", "Critical Conversations on Race in the Food System - Meeting #1"]}
        />
        <CustomVerticalTimelineElement
          bg="#d9534f"
          icon={<Icon2016/>}
          time="2016"
          list={["Q1 - State Food Legislation", "Q2 - Institutional Purchasing", "Q3 - Personal Equity Lens", "Equity in Policy Timeline", "Q4 - Network Equity Visioning"]}
        />
        <CustomVerticalTimelineElement
          bg="#999999"
          icon={<Icon2015/>}
          time="2015"
          list={["Q1 - Comprehensive Planning", "Q2 - Engaging in Policy 2", "Q3 - Equity in Engagement", "Q4 - Minnesota Food Charter Network Input"]}
        />
        <CustomVerticalTimelineElement
          bg="#3f903f"
          icon={<Icon2014/>}
          time="2014"
          list={["Q1 - Minnesota Food Charter Input", "Q2 - Engaging in Policy 1", "Q3 - Network Planning", "Q4 - Minnesota Food Charter as a Resource for Action"]}
        />
        <CustomVerticalTimelineElement
          bg="#7a43b6"
          icon={<Icon2013/>}
          time="2013"
          list={["Q1 - Meet the Partners", "Q2 - Strategic Priorities", "Q3 - Mission and Vision", "Q4 - Food Access Landscape"]}
        />
        <CustomVerticalTimelineElement
          bg="deeppink"
          icon={<Icon2012/>}
          time="2012"
          p="In 2012, MFAN was introduced. The mission of MFAN is to leverage collective capacity of partners to advance equitable access to healthy food for all Twin Cities metro residents."
        />
      </VerticalTimeline>
    )
  }
}

export  default EventsHistory;