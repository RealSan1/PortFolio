import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSpring,
  SiAndroid,
  SiGithub,

} from "react-icons/si";
import { DiEclipse } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

    </Row>
  );
}

export default Toolstack;
