import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiPython } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiPostgresql, SiExpress, SiAxios } from "react-icons/si"; // Add Axios

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiNodejs />
          <div className="tooltip">Node.js</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiReact />
          <div className="tooltip">React.js</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <CgCPlusPlus />
          <div className="tooltip">C++</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiJavascript1 />
          <div className="tooltip">JavaScript</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiExpress />
          <div className="tooltip">Express.js</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiGit />
          <div className="tooltip">Git</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiPython />
          <div className="tooltip">Python</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiPostgresql />
          <div className="tooltip">PostgreSQL</div>
        </div>
      </Col>
      {/* Axios Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiAxios />
          <div className="tooltip">Axios</div>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
