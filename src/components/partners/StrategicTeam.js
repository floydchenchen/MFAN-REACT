import React from 'react';
import { Text, Button } from 'react-atlas';
import Profile from '../Profile'
import TextTitle from '../TextTitle';

class StrategicTeam extends React.Component {

  strategicTeam = [
    {
      title:"Jamie Bain",
      p:["Jamie Bain is the coordinator of the Metro Food Access Network (MFAN) and works for the University of Minnesota Extension. She loves networks and affectionately considers herself a “network nerd”. She believes in the power of connectivity and loves the magic that happens when the people engage in critical conversations that lead to collaborative action. She also supports all food networks across the state through her role on the Engagement Team of the Minnesota Food Charter Network. Please reach out to Jamie with any questions about MFAN or your work with food networks in Minnesota and beyond."],
      email:"jbain@umn.edu",
      src:"jbain"
    },
    {
      title:"Nadja Berneche",
      p:[
        "A resident of St. Paul, Nadja Berneche has served on the Saint Paul-Ramsey County Food and Nutrition Commission for six years, currently serving as co-chair. She has worked on changing policies to support urban agriculture, healthy eating, and food access at state and local levels.",
        "She is also the Healthy Comprehensive Planning Director with Terra Soma, a strategic services firm with a specialty in food systems. In this role, a big part of her work is to bridge communication gaps. She often finds herself in the role of interpreter—explaining policy jargon to city and county planners, health advocates, and community members working to increase healthy food access. To create those long-range visions, she uses local community planning as tool to strategically identify and implement initiatives to increase access to healthy food and physical activity and to promote health equity.",
        "Prior to this, Nadja served as the Program Director for Gardening Matters, focusing on community-based food systems and urban agriculture policy. Nadja earned her Masters of Social Work and Masters of Public Policy from the University of Minnesota. She enjoys chasing her 3-year old son, two elder dogs, and chickens around the garden, rooting for University of Michigan football, and making carrot pickles."
      ],
      email:"nadja@terrasoma.com",
      src:"nberneche"
    },
    {
      title:"Jenny Breen",
      p:["Jenny Breen has been a professional chef and advocate for local and sustainably raised foods working directly with farmers and producers in the Twin Cities area since the mid 1980’s. She was co-owner of Good Life Cafe and Catering, a sustainable and whole foods business from 1996-2013. She is a 2009 Archibald Bush Foundation Leadership Fellow and completed her MPH in Nutrition at the University of Minnesota in 2011 while working to build strong networks within health and food systems for greater access to food, support for sustainable farming, and understanding of cooking as a health strategy. Her first cookbook \"Cooking up the Good Life\" emphasizes local, seasonal whole foods cooking for families, and was released in April of 2011 from the University of Minnesota Press. She currently teaches 3 courses at the University of Minnesota: an undergraduate cooking class called “Healthy Foods Healthy Lives, cooking on a Student’s Budget”, an undergraduate on line course called “food choices, healing the earth, healing ourselves”, and a graduate cooking course called “Food Matters, cook as if your life depends on it” for health professional students (with Dr Shafto), both through the Center for Spirituality and Healing. She contracts as a food and nutrition Public Health educator with local health departments, school districts and non profit food and farming organizations."],
      email:"breen026@umn.edu",
      src:"jbreen"
    },
    {
      title:"Jenna Carter",
      p:["Jenna Carter is the Senior Program Manager for Health Equity Advocacy in the Center for Prevention at Blue Cross and Blue Shield of Minnesota. In her role, she develops and leads statewide public health policy and advocacy strategies to reach the Center’s goals around health equity, healthy eating, and active living. Jenna has co-founded and developed external coalitions and networks including the Good Food Access campaign, Minnesota Food Funders Network, and the Metro Food Access Network. Jenna has a Master’s degree in Public Health Nutrition from the University of Minnesota and Bachelor’s degree in Nutritional Science from Iowa State University. In her free time, she loves traveling with her partner and children, as well as running, yoga and reading."],
      email:"Jenna.Carter@bluecrossmn.com",
      src:"jcarter"
    },
    {
      title:"Melanie Heckt",
      p:["Melanie is the Engagement Coordinator for the Northside Fresh Coalition at Appetite for Change doing a year of service as an AmeriCorps VISTA. She is also completing her degree in Food Systems and Nutrition at the University of Minnesota this fall. Melanie has experience working in urban agriculture and food policy at the city and state level. Melanie is passionate about working towards community owned food systems that nourish all people and the land.", "Melanie grew up in Andover, MN and has lived in Minneapolis the last four years. She is very close with her family, especially her two younger brothers. Melanie loves swing dancing, crocheting, and cooking with friends."],
      email:"melanie@afcmn.org",
      src:"mheckt"
    },
    {
      title:"Sophia Lenarz-Coy",
      p:["Sophia Lenarz-Coy is the Associate Director for Hunger Solutions. She is passionate about looking at hunger from a food systems perspective and wants to see that all Minnesotans have access to healthy, quality food. Sophia is a graduate of Smith College in Massachusetts and has worked in the nonprofit sector for many years, developing programs, managing staff, and finding innovative ways to solve the complex problem of hunger."],
      email:"slenarzcoy@hungersolutions.org",
      src:"slenarz-coy"
    },
    {
      title:"Chloe Richter",
      p:["Chloe Richter is a Registered and Licensed Dietitian with a Bachelor's of Science in Community-Medical Dietetics from Viterbo University. Chloe is a Community Health Specialist for Washington County Department of Public Health and Environment where she works with community groups to improve opportunities for nutrition and physical activity. She is passionate about encouraging health for people across the lifespan and enjoying food as a powerful tool for connection and health."],
      email:"chloe.richter@co.washington.mn.us",
      src:"crichter"
    },
    {
      title:"Rachel Smith",
      p:["Rachel Smith recently moved back to the Twin Cities from Oregon after completing her master’s degree in communications and media studies. While at the University of Oregon, she focused her research efforts on food equity and how the media can influence the health of underserved populations. As a marketing communications consultant, Rachel hopes to use her skills and experiences to support a more equitable food system across the state and looks forward to working alongside the amazing network of professionals dedicated to this cause. In her free time, Rachel loves exploring the outdoors with her partner Kevin and taking advantage of Minnesota’s distinct four seasons."],
      email:"rachel.damara.smith@gmail.com",
      src:"rsmith"
    },
    {
      title:"Lisa Wong",
      p:["Lisa Wong is a SNAP-Ed Educator with University of Minnesota Extension working in healthy food access in the North Metro. Prior to her work in Minnesota, she was a U.S. Peace Corps Community Health Specialist in Ethiopia. Her work focused primarily on food security, family planning, and gender equality. Lisa holds a B.S. in Nutrition from Cal Poly, San Luis Obispo, CA where she also focused her efforts on fair and direct trade as a means to enhance farmer's livelihoods. Aside from her professional experiences, her upbringing consisted of time spent in her family's Chinese restaurant and working long hot summers for almond and stone fruit farmers in California's Central Valley and more recently experimenting with fermentation and curing meats. Crossing paths with a wide range of people, she has always found food to be a unifying human ritual worth fighting for."],
      email:"lswong@umn.edu",
      src:"lwong"
    },
    {
      title:"Samty Xiong",
      p:["Samty Xiong is a second generation Hmong-American womxn who was born and raised in Wisconsin. Her childhood food memories include free and reduced lunches and breakfasts, butchering chickens with her family, feeling embarrassed about her mom's urban foraging of Solomon's seal and black nightshade, and growing and freezing vegetables for winter. She creates new food memories by learning to cook and bake from scratch, growing her appreciation for Hmong food traditions, and increasing equity at all levels of the food system. She believes ending racial injustice is key to ending food insecurity and hunger.", "As the Equity Specialist at The Food Group, Samty facilitates and drives strategies to strengthen equity as a core organizational value and works with partners to build industry capacity around equity. Prior to The Food Group, Samty served as an AmeriCorps VISTA at the City of Saint Paul Department of Human Rights and Equal Economic Opportunity where she supported the city's racial equity initiative. Her previous work also includes supporting refugees, asylum-seekers, and immigrants with the United Nations High Commissioner for Refugees and the International Institute of Minnesota. She holds Bachelor’s degrees in International Studies and African Languages & Literature and a Certificate in Middle East Studies."],
      email:"SXiong@thefoodgroupmn.org",
      src:"sxiong"
    },
  ];

  render() {
    return (
      <div>
        <div className="container" style={{marginTop:"20px"}}>
          <TextTitle as="h3" content="Strategic Team" />
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
          {this.strategicTeam.map(profile => {
            return ([
              <Profile title={profile.title} p={profile.p} email={profile.email} src={profile.src} />,
              <hr/>
            ])
          })}
        </div>
      </div>

    )
  }
}

export default StrategicTeam;
