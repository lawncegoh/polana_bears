import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {
  Container,
} from "reactstrap";

const titleStyling = {
  title:{
      color:"white",
      alignContent:"center",
      justifyContent:"center",
      display:"flex"
  }
}

function Roadmap() {
  return (
    <>
    <Container>
      <div style={titleStyling.title}>
        <h1>Roadmap</h1>
      </div>
      <br />
      <VerticalTimeline className="time-line">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#061133', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #061133' }}
            date="Before the phases"
            iconStyle={{ background: '#061133', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">The Beginnings</h3>
            <ul>
              <li>Human hunters infiltrated PolanaLand and massacred several elderly Polana bears</li>
              <li>Polana Bears go into isolation</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#061133', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #0611330' }}
            date="Phase 1"
            iconStyle={{ background: '#061133', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">After a century</h3>
            <ul>
              <li>Birth of 10,000 Polana Bears</li>
              <li>Discord, Instagram and Twitter channels set up properly</li>
              <li>Website coded and backend linkage to Solana chain set up</li>
              <li>Rarity tool developed internally</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#061133', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #061133' }}
            date="Phase 2"
            iconStyle={{ background: '#061133', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Humans attack PolanaLand</h3>
            <ul>
              <li>Adding bears to Candy Machine</li>
              <li>Instagram and Twitter giveaways</li>
              <li>Rollout of referral programs to join whitelist</li>
              <li>Community giveaways as well as influencers' marketing</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#061133', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #061133' }}
            date="Phase 3"
            iconStyle={{ background: '#061133', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">First contact made</h3>
            <ul>
              <li>Public sale of Polana Bears through our mint site</li>
              <li>Unsold bears would be burnt</li>
              <li>Move on to listing on secondary trading markets</li>
              <li>Statistics of bears sold to be tracked and reviewed</li>
            </ul>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#061133', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #061133' }}
            date="Phase 4"
            iconStyle={{ background: '#061133', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">First Peaceful Contact</h3>
            <ul>
              <li>Low tier bears to be bought off the secondary markets</li>
              <li>Possible DAO continuation for holders of bears</li>
              <li>Further community giveaways and future project suggestions</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#061133', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #061133' }}
            date="Phase 5"
            iconStyle={{ background: '#061133', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Rewarding #PolanaSeekers</h3>
            <p>
              How many % of secondary-market royalties are dedicated to marketing and floor sweeps
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#061133', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #061133' }}
            date="November 2012"
            iconStyle={{ background: '#061133', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>
              Creative Direction, User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#061133', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #061133' }}
            date="2002 - 2006"
            iconStyle={{ background: '#061133', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
              Creative Direction, Visual Design
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </Container>
    </>
    );
}

export default Roadmap;