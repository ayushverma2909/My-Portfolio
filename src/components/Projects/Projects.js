import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MyntraClone from "../../Assets/Projects/MyntraClone.png";
import rateItNow from "../../Assets/Projects/rateItNow.png"
import weather from "../../Assets/Projects/weather.png";
import currency from "../../Assets/Projects/currency.png";
import familyTracker from "../../Assets/Projects/familyTracker.png";
import Permalist from "../../Assets/Projects/Permalist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Cryto Price Tracker"
              description="A responsive web application built with Node.js, Express, EJS, and Axios that allows users to monitor live cryptocurrency prices and real-time foreign exchange rates. It fetches data from the CoinMarketCap and ExchangeRate APIs to deliver up-to-date price information. The app features a clean UI, real-time updates, and provides users with key financial insights at a glance."
              ghLink="https://github.com/ayushverma2909/Crypto-FX-tracker.git"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={familyTracker}
              isBlog={false}
              title="Family Travel Tracker"
              description="The app was created using Node.js, Express, and PostgreSQL to track users and the countries they’ve visited. It features dynamic EJS templates for rendering, input validation to avoid duplicate entries, and a user-friendly interface for logging and viewing travels. The database stores user profiles and visited countries, and the app was thoroughly tested to ensure smooth functionality."
              ghLink="https://github.com/ayushverma2909/Family-Travel-tracker.git"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rateItNow}
              isBlog={false}
              title="Rate It Now App"
              description="The Rate It Now App is an innovative Books Notes API crafted using Node.js, Express, and EJS, designed to let users seamlessly manage their book notes. With an intuitive interface and efficient backend, it offers real-time CRUD operations powered by PostgreSQL, providing a powerful, dynamic experience for book enthusiasts."
              ghLink="https://github.com/ayushverma2909/Rate-It-Now-App.git"
              // demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A simple and responsive web app that shows real-time weather information for any city using the OpenWeatherMap API. Built with HTML, CSS, JavaScript (or React, if you used it). Users can search by city name and get current temperature, humidity, weather conditions, and more."
              ghLink="https://github.com/ayushverma2909/Weather-App.git"
              // demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyntraClone}
              isBlog={false}
              title="Myntra Clone"
              description="A responsive e-commerce website clone built with HTML, CSS, and JavaScript. It replicates Myntra's core features like product browsing, details view, and a shopping cart, with a mobile-friendly design."
              ghLink="https://github.com/ayushverma2909/Myntra-Clone.git"
              demoLink="https://ayushverma2909.github.io/Myntra-Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Permalist}
              isBlog={false}
              title="Permalist App"
              description="Permalist is a web application designed to help users manage a personal list of items. With a simple and intuitive interface, users can easily add and delete items from their list. Built with Node.js, Express, and PostgreSQL, it offers a seamless experience for organizing and maintaining personal data securely."
              ghLink="https://github.com/ayushverma2909/Permalist-App.git"
              // demoLink="https://ayushverma2909.github.io/Myntra-Clone/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
