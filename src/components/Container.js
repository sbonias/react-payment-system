import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import Credit from './Credit';

function Example(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Credit />
        </Col>
      </Row>
    </Container>
  );
}

export default Example;
