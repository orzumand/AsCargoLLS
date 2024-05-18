import { Wrapper, MainContainer, Content } from "./styled";
import { motion } from "framer-motion";
import Icon from "../../assets/img/icon.svg";
import Scrol_Icon from "../../assets/icons/Group 30.png";
import AnimatedNumbers from "react-animated-numbers";
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
          <img width={100} height={50} src={Icon} alt="" />

          <Content initial="hidden" whileInViev="visible">
            <motion.h1
              className="contentText"
              transition={{ delay: 0.4 }}
              variants={textAnimation}
            >
              STRONGEST <br /> DISTRIBUTION <br /> NETWORK
            </motion.h1>
            <Content.Counts>
              <div>
                <div className="count">
                  <AnimatedNumbers
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={130}
                  />
                  <div>+</div>
                </div>
                <div className="title">Delivired Materials</div>
              </div>
              <div>
                <div className="count">
                  <AnimatedNumbers
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={120}
                  />
                  <div>+</div>
                </div>
                <div className="title">Project Finished</div>
              </div>
              <div>
                <div className="count">
                  <AnimatedNumbers
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={390}
                  />
                  <div>+</div>
                </div>
                <div className="title">Happy Customers</div>
              </div>
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
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <img width="22px" src={Icon} alt="" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; AS CARGO LLC
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        </marquee>
      </MainContainer>
    </motion.div>
  );
};

export default Main;
