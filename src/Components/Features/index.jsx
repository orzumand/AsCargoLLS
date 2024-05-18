import { motion } from "framer-motion";
import {
  Wrapper,
  MainContainer,
  Content,
  Card,
  Map,
  Outer,
  ContentText,
} from "./styled";
import { VectorMap } from "@south-paw/react-vector-maps";
import Dispatch from "../../assets/icons/transportation 1.png";
import Support from "../../assets/icons/icon 1.png";
import Reability from "../../assets/icons/dependable (1) 1.png";
import Insurance from "../../assets/icons/truck (1) 1.png";
import UsaMap from "./us1712832786.json";
import { useState } from "react";
const Features = () => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({});

  function getPosition(e) {
    e.preventDefault();
    setMousePos({
      x: e.pageX,
      y: e.pageY,
    });
    console.log(e);
  }

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: () => setHovered(false),
  };
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7 }}
      onMouseMove={(e) => getPosition(e)}
    >
      <MainContainer>
        {hovered && (
          <Outer
            style={{
              left: `${mousePos.x + 10}px`,
              top: `${mousePos.y + 10}px`,
            }}
          >
            {hovered}
          </Outer>
        )}
        <Wrapper>
          {/* <img width={70} height={40} src={Icon} alt="" /> */}
          <ContentText>
            Powerful Features <br />
            of <span style={{ color: "red" }}> AS Cargo</span> Team
          </ContentText>
          <Content>
            <Content.Counts>
              <motion.div
                transition={{ delay: 0 }}
                variants={textAnimation}
                className="card"
                style={{ marginTop: "-90px" }}
              >
                <img width={90} src={Dispatch} alt="" />
                <Card.Title>Dispatch</Card.Title>
                <Card.Subtitle>
                  Our Team Is always online <br /> to provide the best <br />{" "}
                  service that you ever experienced
                </Card.Subtitle>
                <div className="corner"></div>
              </motion.div>
              <motion.div
                transition={{ delay: 0.2 }}
                variants={textAnimation}
                className="card"
              >
                <img width={75} src={Support} alt="" />
                <Card.Title>Support 24/7</Card.Title>
                <Card.Subtitle>
                  Update Team will answer any question about the <br /> loads at
                  any point of time
                </Card.Subtitle>
                <div className="corner"></div>
              </motion.div>
              <motion.div
                transition={{ delay: 0.4 }}
                variants={textAnimation}
                className="card"
                style={{ marginTop: "-90px" }}
              >
                <img width={75} src={Reability} alt="" />
                <Card.Title>Reliablity</Card.Title>
                <Card.Subtitle>
                  With our professional team you will not be <br /> experiencing
                  any <br /> difficulties
                </Card.Subtitle>
                <div className="corner"></div>
              </motion.div>
              <motion.div
                transition={{ delay: 0.6 }}
                variants={textAnimation}
                className="card"
              >
                <img width={75} src={Insurance} alt="" />
                <Card.Title>Cargo Insurance</Card.Title>
                <Card.Subtitle>
                  With our safe and reliable insurance, you as a truck driver is
                  insured 100%
                </Card.Subtitle>
                <div className="corner"></div>
              </motion.div>
            </Content.Counts>
          </Content>
          <Map>
            <VectorMap layerProps={layerProps} {...UsaMap} />
          </Map>
        </Wrapper>
      </MainContainer>
    </motion.div>
  );
};

export default Features;
