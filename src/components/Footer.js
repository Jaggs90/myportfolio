import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {

    return (
      <footer className="mt-5 fixed-bottom">
        <Container fluid={true}>
          <Row className="border-top justify-content-between p-3 bg-info">
            <Col className="p-0" md={3} sm={13}>
              Daniel Jaggs
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>
                This site was made by Daniel Jaggs.
            </Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer;
