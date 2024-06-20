import { Wrapper, MainContainer, Content } from "./styled";
import { motion } from "framer-motion";
import Icon from "../../assets/img/edited 3.png";
import Icon_2 from "../../assets/img/icon.svg";
import Scrol_Icon from "../../assets/icons/Group 30.png";

import About from "../About/index.jsx";
const Main = () => {
  const textAnimation = {
    hidden: {
      x: -40,
      opacity: 0,
    },
    visible: {
      x: 20,
      opacity: 1,
    },
  };

  return (
    <motion.div initial="hidden" whileInView="visible">
      <MainContainer>
        <Wrapper>
          <img height={60} src={Icon} alt="" />

          <Content initial="hidden" whileInViev="visible">
            <motion.h1
              className="contentText"
              transition={{ delay: 0.4 }}
              variants={textAnimation}
            >
              <div>HONESTY</div>
              <div style={{ color: "#F2123A" }}> RELIABILITY</div>
              <div>OPPENNESS</div>
            </motion.h1>
            <Content.Counts>
              <motion.div transition={{ delay: 0.8 }} variants={textAnimation}>
                <div className="count">
                  130
                  <div>+</div>
                </div>
                <div className="title">Delivired Materials</div>
              </motion.div>
              <motion.div transition={{ delay: 1 }} variants={textAnimation}>
                <div className="count">
                  120
                  <div>+</div>
                </div>
                <div className="title">Project Finished</div>
              </motion.div>
              <motion.div transition={{ delay: 1.2 }} variants={textAnimation}>
                <div className="count">
                  390
                  <div>+</div>
                </div>
                <div className="title">Happy Customers</div>
              </motion.div>
            </Content.Counts>
            <div className="icon">
              <img height={40} src={Scrol_Icon} alt="" />
            </div>
          </Content>
        </Wrapper>
        <About id="about" />
        <marquee
          height="35px"
          // eslint-disable-next-line react/no-unknown-property
          scrollamount="5"
          // eslint-disable-next-line react/no-unknown-property
          behavior="alternate"
          direction="left"
        >
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon_2} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        </marquee>
      </MainContainer>
    </motion.div>
  );
};

export default Main;
