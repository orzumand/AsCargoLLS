import { Wrapper, MainContainer, Content, Social, Image } from "./styled";
import Telegram from "../../assets/icons/telegram.svg";
import X from "../../assets/icons/x.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import IMG from "../../assets/img/Слой_x0020_1.svg";
import truck from "../../assets/img/footer.png";

const Footer = () => {
  return (
    <div id="features">
      <MainContainer>
        <img width={250} className="truck" src={truck} alt="truck" />
        <Wrapper>
          <Content>
            <img width={270} src={IMG} />
            <Content.Navigation>
              <a href="#">Home</a>
              <a href="#">About us</a>
              <a href="#">FAQ&apos;S</a>
              <a href="#">Service</a>
              <a href="#">Contact</a>
            </Content.Navigation>
          </Content>
          <Social>
            Copyright 2024. As Cargo LLC. All rights reserved
            <div className="icons">
              <Image width={35} src={X} />
              <Image width={35} src={Instagram} />
              <Image width={35} src={Facebook} />
              <Image width={35} src={Telegram} />
            </div>
            Privacy Policy Terms of use
          </Social>
        </Wrapper>
      </MainContainer>
    </div>
  );
};

export default Footer;
