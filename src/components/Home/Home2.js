import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImoJi from "../../Assets/emoji.png";
import { AiFillGithub, AiFillMail  } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              저를 <span className="purple"> 소개 </span> 합니다
            </h1>
            <p className="home-about-body">
            저는 웹 개발과 워게임을 통한 보안 취약점, 게임 개발 등 다양한 활동을 경험해 보았습니다. 🤷‍♂️
              <br />
              <br />
              특정 한 분야의 전문성이 부족해 보이지만 &nbsp;
                <b className="purple">여러 방면에서 쌓은 경험</b>
                을 바탕으로 새로운 경험에서 유연하게 적응할 수 있다고 생각합니다.
              <br />
              <br />
              새로운 도전에 적극적으로 임하며, 협업하여 가치 있는 결과를 만들어내는 데 <b className="purple">기여</b>하고 싶습니다.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={ImoJi} className="img-fluid" alt="avatar"/>            
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RealSan1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=soltks123@gmail.com&su=Hello,%20There&body=I%20wanted%20to%20reach%20out."
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
