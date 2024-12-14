import React from "react";
import Card from "react-bootstrap/Card";
import beak from "../../Assets/baek.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요, 저는 <span className="purple">김 산</span>입니다.
            <br />
            저는 인하공업전문대학에서<span className="purple"> 컴퓨터정보공학</span>를 진학하였습니다.
            <br />
            <br />
            뒤처지지 않도록 매일 꾸준히 알고리즘을 공부하고 있습니다.
          </p>
          <ul>
          <li className="about-activity" style={{ textAlign: "center", marginTop: "10px" }}>
          <a href="https://github.com/RealSan1/baekjoon">
            <img src={beak} alt="beak" 
            style={{
              display: "inline",
              margin: "auto",
              maxWidth: "60%", 
              height: "auto"
            }}/>
              </a>
            </li>
          </ul>
          <br/>
          <p style={{ color: "rgb(155 126 172)", fontSize: "20px"}}>
            "느려도 멈추지 말기"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
