import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ai from "../../Assets/Projects/Ai.png";
import kiosk from "../../Assets/Projects/kiosk.png";
import ott from "../../Assets/Projects/ott.png";
import BigData from "../../Assets/Projects/BigData.png";
import game from "../../Assets/Projects/game.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Project </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ott}
              isBlog={false}
              title="OTT 랭킹 사이트"
              description="넷플릭스, 디즈니 플러스 등 다양한 OTT와 영화의 랭킹을 한눈에 보여주고, 사용자에게 다양한 스트리밍 영상을 추천 및 관리 사이트입니다."
              ghLink="https://github.com/RealSan1/OTT_Ranking_Site"
              demoLink="https://realsan1.github.io/OTT_Ranking_Site/OTT%20Ranking.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BigData}
              isBlog={false}
              title="교통사고 빅데이터 처리"
              description="영국 경찰에서 제공하는 1,780,653건의 교통사고 데이터를 가공하여 연령별 교통사고 중상자 비율 분석 및 교통사고 발생 요일 및 시간대 등 다양한 데이터를 시각화 하였습니다."
              ghLink="https://github.com/RealSan1/Car_accident"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ai}
              isBlog={false}
              title="사용자 인식을 통한 광고 추천"
              description="OpenCV를 통한 얼굴 인식과 AI 판단모델(성별, 연령, 악세서리)의 정보를 바탕으로 코사인 유사도를 바탕으로 사용자 맞춤 광고를 제공하는 서비스입니다."
              ghLink="https://github.com/RealSan1/inhatc-24-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="모바일 게임 앱"
              description="안드로이드 스튜디오를 사용하여 제작한 어플리케이션, 이용자에게 다양한 게임(테트리스, 반응속도 테스트 등)다양한 게임을 제공하는 어플리케이션입니다."
              ghLink="https://github.com/RealSan1/MiniGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kiosk}
              isBlog={false}
              title="키오스크"
              description="자바 스윙을 바탕으로 제작한 프로그램, PC방 키오스크를 구현하며 재고관리, 이용자 시간관리 등 시중에 존재하는 PC방 키오스크를 바탕으로 제작하였습니다."
              ghLink="https://github.com/RealSan1/Kiosk"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
