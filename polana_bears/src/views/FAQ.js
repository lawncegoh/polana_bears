import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Container
} from 'reactstrap';

function FAQ() {
  return (
    <div>
        <Container>
            <h1>Frequently Asked Questions</h1>
            <Accordion className="accordion" TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>How do I make a Polana Bear mine?</Typography>
                </AccordionSummary>
                <AccordionDetails >
                <Typography className="accordion-item">
                    <ul className="accordion-item">
                      <p>You can get one through the minting process during our launch for public sale.</p>
                      <p>You can also get it through the secondary markets that we will be listing on post launch.</p>
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>What secondary markets are we listing on?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ul>
                      <p>Opensea</p>
                      <p>Solanart.io</p>
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography>Will there be whitelist and how do I join it?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Yes! There will be a whitelist. To join it, there are a couple of steps to follow:
                    write steps here...
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography>Where can I find out the rarity of my Polana Bear?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    polanabears.com/rarity. Instructions to use the site will be in the link itself.
                    Can also be checked through discord.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography>What happens after public sale?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <h4>Funds would be driven towards marketing, giveaways and other events for the Polana Community.
                    80% of royalties would be used to sweep the floor on the various secondary markets.
                    </h4>
                    <h4>
                      <b>What exactly is sweeping the floor?</b>
                      <p>
                        We will use the funds from royalties earned to buy back floor priced bears so as to reduce the supply
                        in the market and drive price of the bears up with the same sustained demand. Of course, with strong marketing 
                        that will be in play throughout, demand of the bears will go up which leads to an increase in price for the bears.
                      </p>
                    </h4>
                </Typography>
                </AccordionDetails>
            </Accordion>
      </Container>
    </div>
  );
}

export default FAQ;