import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiVisualstudiocode, SiPostman, SiWindows } from "react-icons/si";
import './toolstack.css';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiWindows />
          <span className="tooltip">Windows</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiVisualstudiocode />
          <span className="tooltip">Visual Studio Code</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiPostman />
          <span className="tooltip">Postman</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiGithub />
          <span className="tooltip">GitHub</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
