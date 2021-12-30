import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCheck, FaHourglassHalf } from 'react-icons/fa';

import {
  Container,
} from "reactstrap";

const titleStyling = {
  title: {
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    display: "flex"
  }
}

const cardStyling = {
  check: {
    color: "green",
  },
  hourGlass: {
    color: "yellow",
  },
}


function Roadmap() {
  return (
    <Container>
      <div style={titleStyling.title}>
        <h1>Roadmap</h1>
      </div>

      <div className="roadmap-image"></div>
      <br />
      <VerticalTimeline className="time-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#061133', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #061133' }}
          date="Phase 0"
          iconStyle={{ background: '#061133', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">The Beginnings</h3>
          <br/>
          <h6><FaCheck style={cardStyling.check}/> {' '} Human hunters infiltrated PolanaLand and massacred several elderly Polana bears </h6>
          <h6><FaCheck style={cardStyling.check}/> {' '} Polana Bears go into isolation </h6>
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
          <br/>
          <h6><FaCheck style={cardStyling.check}/> {' '} Social Media platforms established </h6>
          <h6><FaCheck style={cardStyling.check}/> {' '} Website coded and backend linkage to Solana chain set up </h6>
          <h6><FaCheck style={cardStyling.check}/> {' '} UAV footage found a 1,488 strong Polana Bears civilization </h6>
          <h6><FaCheck style={cardStyling.check}/> {' '} Rarity tool developed internally to gather further intelligence on this group of bears </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#061133', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #061133' }}
          date="Phase 2"
          iconStyle={{ background: '#061133', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">The return of the Polana Bears</h3>
          <br/>
          <h6><FaCheck style={cardStyling.check}/> {' '} #seekweshall, we need to know more about the bears </h6>
          <h6><FaCheck style={cardStyling.check}/> {' '} The bears make their first appearance on Instagram, Twitter and Discord channels </h6>
          <h6><FaCheck style={cardStyling.check}/> {' '} Giveaways will commence </h6>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Onboarding influencers to #PolanaSeekers </h6>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Rollout of referral programs to join whitelist </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#061133', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #061133' }}
          date="Phase 3"
          iconStyle={{ background: '#061133', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">The Reveal</h3>
          <br/>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Public sale of the Hand Drawn Polana Bears through our mint site in <u><b>January 2022</b></u> </h6>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Verification on secondary trading markets, either on MagicEden or Digital Eyes </h6>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Discord sales bot </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#061133', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #061133' }}
          date="Phase 4"
          iconStyle={{ background: '#061133', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Rewarding #PolanaSeekers</h3>
          <br/>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Low tier bears to be bought off the secondary markets </h6>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} 85% of secondary-market royalties dedicated to further marketing and floor sweeps </h6>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Possible DAO continuation for holders of bears </h6>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Further community giveaways</h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#061133', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #061133' }}
          date="Phase 5"
          iconStyle={{ background: '#061133', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Expanding Polana Land</h3>
          <br/>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Introduction of Player vs Player (PvP) in <u><b>Feb 2022</b></u> </h6>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} Tokens can be earned through this play-to-earn game, royalties would be spread to users</h6>
          <h6><FaHourglassHalf style={cardStyling.hourGlass}/> {' '} This is dependent on the opinions of the community </h6>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}

export default Roadmap;