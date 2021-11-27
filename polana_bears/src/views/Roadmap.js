import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
            date="Phase 0"
            iconStyle={{ background: '#061133', color: '#fff' }}
          // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">The Beginnings</h3>
              <small>Human hunters infiltrated PolanaLand and massacred several elderly Polana bears</small>
              <small>Polana Bears go into isolation</small>
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

              <li>Social Media platforms established</li>
              <li>Website coded and backend linkage to Solana chain set up</li>
              <li>UAV footage found a 4,888 strong Polana Bears civilization</li>
              <li>Rarity tool developed internally to gather further intelligence on this group of bears</li>
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
            <h3 className="vertical-timeline-element-title">The return of the Polana Bears</h3>
            <ul>
              <li>#seekweshall, we need to know more about the bears</li>
              <li>The bears make their first appearance on Instagram, Twitter and Discord channels</li>
              <li>Giveaways will commence</li>
              <li>Onboarding influencers to #PolanaSeekers</li>
              <li>Rollout of referral programs to join whitelist</li>
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
            <h3 className="vertical-timeline-element-title">The Reveal</h3>
            <ul>
              <li>Public sale of the Hand Drawn Polana Bears through our mint site in <u><b>January 2022</b></u></li>
              <li>Verification on secondary trading markets, either on MagicEden or Digital Eyes</li>
              <li>Discord sales bot</li>
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
            <h3 className="vertical-timeline-element-title">Rewarding #PolanaSeekers</h3>
            <ul>
              <li>Low tier bears to be bought off the secondary markets</li>
              <li>85% of secondary-market royalties dedicated to further marketing and floor sweeps</li>
              <li>Possible DAO continuation for holders of bears</li>
              <li>Further community giveaways</li>
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
            <h3 className="vertical-timeline-element-title">Expanding Polana Land</h3>
            <ul>
              <li>Introduction of growth serums in <u><b>Feb 2022</b></u></li>
              <li>Bears can take in serums to increase in rarity</li>
              <li>This is dependent on community's opinions</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </>
  );
}

export default Roadmap;