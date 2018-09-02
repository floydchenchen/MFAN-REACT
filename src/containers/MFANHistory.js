import React from 'react';
import MFANHistoryYear from '../components/MFANHistoryYear';
import MFANHistoryCard from '../components/MFANHistoryCard';


class MFANHistory extends React.Component {

  render () {
    return (
      <div className="container">
        {/* 2017 */}
        <MFANHistoryYear
          title="2017"
          list={["MFAN partnership expanded to over 400 food access advocates", "New website and Email Discussion Group launched"]}
        />
        <MFANHistoryCard
          title="Equity Success"
          p="MFAN leveraged funding to host Critical Conversations on Race in the Food System events facilitated by The Food Group December 2017 - April 2018."
          button="Learn More"
          href="/Resources/CriticalConversationonRace/"
          src="history-equity-success"
        />
        <MFANHistoryCard
          title="Food Shelf Success"
          p="SuperShelf (an idea incubated by MFAN partners) was awarded the first ever National Institute of Health grant for the hunger relief system at $3.2 million to evaluate and expand implementation to 16 food shelves across the state. Additional success came when the results of the SuperShelf pilot study showed significant improvement in food shelf and client healthfulness."
          button="Learn More"
          href="https://www.supershelfmn.org/"
          src="history-food-shelf-success"
        />
        {/* TODO: SET UP SERVER PATH FOR DOCUMENTS*/}
        <MFANHistoryCard
          title="Comprehensive Planning Success"
          p="The MFAN Comprehensive Planning Team developed the Community Health in Comprehensive Planning Checklist to further support food access advocates and planners to work together to advance equitable access to healthy food through the built environment."
          button="Learn More"
          customSrc
          href="/documents/community-health-in-comprehensive-planning-checklist.pdf"
          src="history-comprehensive-planning-success"
        />
        <MFANHistoryCard
          title="MFAN Bus Adventure"
          p="MFAN partners traveled together to Northwestern and West Central Minnesota to explore native and rural food systems, develop deeper connections, and bridge silos across our shared work."
          button="Learn More in MFAN Blog"
          href="/Blog/001"
          src="history-mfan-bus-adventure"
        />
        <MFANHistoryCard
          title="Metro Community Meal"
          p="MFAN hosted our first event to engage with community partners, elected officials, and food systems leaders to envision a food system we all deserve. Over 165 people attended. There was a family meal served with local produce, live art, a DJ, and lots of great conversation."
          button="Learn More in MFAN Blog"
          href="/Blog/002"
          src="history-metro-community-meal"
        />

        {/* 2016 */}
        <MFANHistoryYear
          title="2016"
          list={["MFAN partnership expanded to 350 food access advocates", "MFAN funding partners continued to expand. Hennepin, Ramsey, Dakota County, Washington, and Carver County SHIP pooled funding to support MFAN", "Calls to Action were launched"]}
        />
        <MFANHistoryCard
          title="Equity Success"
          p="MFAN leveraged funding to support a part-time position to coordinate the MFAN Equity Action Team. Together the team provided recommendations to improve the equity practices of the network. They also designed and facilitated an Equity Timeline experience where partners walked an over 50 foot timeline of policies and systems that have been put in place over the last several centuries to create the food system we have today."
          button="Learn More"
          href="/Resources/EquityinPolicyTimeline/"
          src="history-2016-equity-success"
        />
        <MFANHistoryCard
          title="Comprehensive Planning Success"
          p="The Comprehensive Planning Action Team incubated the idea for the Minnesota Food Charter Healthy Food Access Planning Guide. The guide provides tools, resources, proven policy strategies, and recommended planning and zoning language for comprehensive plans, so planners and community food advocates can collaborate to design communities that promote access to healthy, safe, affordable food. MFAN partners continue to collaborate on the implementation of the guide for comprehensive plans that were submitted in 2018."
          button="Learn More About The Planning Guide"
          href="https://mnfoodcharter.com/planningguide/"
          src="history-2016-comprehensive-planning-success"
        />
        <MFANHistoryCard
          title="Food Shelf Success"
          p="MFAN partners incubated the idea SuperShelf, which transforms food shelves, creating welcoming environments for communities to access appealing, healthy food. Partners leveraged funding to implement and evaluate SuperShelf transformations in 4 pilot food shelves in the metro."
          button="Learn More About The Evaluation Results"
          href="/documents/supershelf-pilot-results"
          src="history-2016-food-shelf-success"
        />

        {/* 2015 */}
        <MFANHistoryYear
          title="2015"
          list={["MFAN partnership expanded to 300 food access advocates", "Strategic Planning took place with development of mission, vision, and governance structure", "Website and blog were launched"]}
        />
        <MFANHistoryCard
          title="Food Shelf Success"
          p="MFAN partners identified a need to provide a more healthful and dignified experience for clients of metro area food shelves. As a result, 18 MFAN partners from food shelves, food banks, local public health, SNAP-Ed, and others came together to develop and launch the MFAN Promising Practice document for food shelves."
          button="Learn More"
          href="/documents/mfan-promising-practice.pdf"
          src="history-2016-food-shelf-success"
        />

        {/* 2014 */}
        <MFANHistoryYear
          title="2014"
          list={["MFAN met on a quarterly basis", "Partnership grew to 200 food access advocates", "MFAN funding partners expanded too! Hennepin, Ramsey, and Dakota County SHIP pooled funding to support MFAN", "We had our first collective action success"]}
        />
        <MFANHistoryCard
          title="Comprehensive Planning Success"
          p="Thrive MSP2040 is a visionary document that guides city and county comprehensive planning for 30 years. During a revisionary process MFAN partners identified a lack of food access language in the proposed document. To address this, 15 MFAN partners came together to provide revisionary language to the document, much of which was included in the final document and used today to guide the metro comprehensive planning process."
          button="Learn More"
          href="/documents/thrivemsp-2040.pdf"
          src="history-2016-equity-success"
        />

        {/* 2013 */}
        <MFANHistoryYear
          title="2013"
          list={["MFAN started meeting quarterly", "Partnership grew to 125 food access advocates", "Action Teams were launched"]}
        />

        <MFANHistoryYear
          title="2012"
          p="MFAN was launched by funding from Hennepin County SHIP and Blue Cross Blue Shield Center for Prevention, with the University of Minnesota Extension as the coordinator and fiscal host of the network. The first meeting took place in October and had 55 people in attendance."
        />
      </div>
    )
  }
}

export default MFANHistory;
