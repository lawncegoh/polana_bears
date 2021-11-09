import React from "react";

// reactstrap components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import {
    Container
} from 'reactstrap';

function Information() {
  return (
    <>
      <Container>
          <h1>Beary Information</h1>
            <Card>
                <CardContent>
                    <h3>
                    10,000 DEFLATIONARY POLAR BEARS launching on Christmas itself.
                    </h3>
                </CardContent>
            </Card>
      </Container>
    </>
  );
}

export default Information;