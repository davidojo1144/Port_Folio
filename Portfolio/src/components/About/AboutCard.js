import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ojo David Ayodeji </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            I am a software Engineer that Graduated from Semicolon.
            <br />
            I have completed my HND in Business Administration and also completed my NYSC
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with love ones.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dave</footer>
          <button style={{padding: "10px 20px", background: "purple", color: "white", border: "none", borderRadius: "5px", cursor: "pointer"}}>
            <a style={{color: "white"}} href="https://drive.google.com/file/d/1AQd7X_30S4vT7gd_RG2deSj9uKvvGY1w/view?usp=drivesdk" target="blank">View Resume</a>
          </button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
