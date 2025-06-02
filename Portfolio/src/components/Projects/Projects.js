import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import E_Commerce from "../../Assets/Projects/e-commerce.png";
import real from "../../Assets/Projects/realestate.png";
import Art from "../../Assets/Projects/art.png";
import clutter from "../../Assets/Projects/clutter.png";
import vomzer from "../../Assets/Projects/vomzer.png";
import learnnow from "../../Assets/Projects/learnnow.png";
import techgiant from "../../Assets/Projects/techgiant.png";
import skillplatform from "../../Assets/Projects/skillplatform.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vomzer}
              isBlog={false}
              title="Vomzer Socials"
              description="Welcome to DClutter – your go-to platform for buying and selling with ease! Whether you're decluttering your space or searching for hidden gems, DClutter connects you seamlessly. Enjoy a hassle-free experience where transactions are simple, secure, and swift. Start exploring today!"
              ghLink="https://github.com/davidojo1144/D-Clutter-Project"
              demoLink="https://d-clutter-project.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnnow}
              isBlog={false}
              title="Learn Now"
              description="Welcome to DClutter – your go-to platform for buying and selling with ease! Whether you're decluttering your space or searching for hidden gems, DClutter connects you seamlessly. Enjoy a hassle-free experience where transactions are simple, secure, and swift. Start exploring today!"
              ghLink="https://github.com/davidojo1144/D-Clutter-Project"
              demoLink="https://d-clutter-project.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techgiant}
              isBlog={false}
              title="Tech Giant"
              description="Welcome to DClutter – your go-to platform for buying and selling with ease! Whether you're decluttering your space or searching for hidden gems, DClutter connects you seamlessly. Enjoy a hassle-free experience where transactions are simple, secure, and swift. Start exploring today!"
              ghLink="https://github.com/davidojo1144/D-Clutter-Project"
              demoLink="https://d-clutter-project.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillplatform}
              isBlog={false}
              title="Skill Acquisition"
              description="Welcome to DClutter – your go-to platform for buying and selling with ease! Whether you're decluttering your space or searching for hidden gems, DClutter connects you seamlessly. Enjoy a hassle-free experience where transactions are simple, secure, and swift. Start exploring today!"
              ghLink="https://github.com/davidojo1144/D-Clutter-Project"
              demoLink="https://d-clutter-project.vercel.app/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clutter}
              isBlog={false}
              title="DClutter Project"
              description="Welcome to DClutter – your go-to platform for buying and selling with ease! Whether you're decluttering your space or searching for hidden gems, DClutter connects you seamlessly. Enjoy a hassle-free experience where transactions are simple, secure, and swift. Start exploring today!"
              ghLink="https://github.com/davidojo1144/D-Clutter-Project"
              demoLink="https://d-clutter-project.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={real}
              isBlog={false}
              title="Real Estate Project"
              description="Check out my latest real estate website, showcasing stunning properties and user-friendly features that make finding your dream home an enjoyable experience!"
              ghLink="https://github.com/davidojo1144/MyRealEstateWebsiteProject"
              demoLink="https://my-real-estate-website-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Art}
              isBlog={false}
              title="Art Work Sale System"
              description="My Art Work Sale System build with React.js and Tailwind Css, I just launched my new art sales website, designed to connect artists with collectors, featuring a beautiful, intuitive layout that makes browsing and purchasing artwork a truly enjoyable experience."
              ghLink="https://github.com/davidojo1144/Art-Work-Sale-System"
              demoLink="https://art-work-sale-system.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E_Commerce}
              isBlog={false}
              title="E-Commerce Project"
              description="I just finished building my e-commerce website, and I’m really excited about how it turned out! It’s designed to make shopping easy and fun, with a sleek layout, user-friendly navigation, and secure checkout, all while showcasing some amazing products."
              demoLink="https://my-e-commerce-project-phi.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="I just wrapped up my latest project—a Spotify-inspired website that lets users effortlessly discover and stream music! I’m thrilled with how it captures that familiar vibe, complete with personalized playlists and sleek navigation that makes exploring new artists a breeze."
              ghLink="https://github.com/davidojo1144/My-Spotify-Project"
              demoLink="https://my-spotify-project-ten.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
