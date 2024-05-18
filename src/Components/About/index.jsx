import { Wrapper, Content } from "./styled";

import Logo_Icon from "../../assets/img/Слой_x0020_1.svg";
const About = () => {
  return (
    <Wrapper>
      <Content>
        <Content.Name>About</Content.Name>
        <Content.Text>
          <img width={250} src={Logo_Icon} alt="" />
        </Content.Text>
        <Content.Counts>
          AS Cargo LLC corparation is a transportation company that was
          established in Pittsburgh, PA in 2018. Our company acknowledges the
          strong potential of the trucking industry to make a big impact on
          business and society. Our management team with 15 years of
          transportation experience and professional drivers work to meet your
          needs and provide excellent customer service.
          <br />
          <br />
          AS Cargo LLC corparation provides a flexible solution, on-time
          service, safe and experienced drivers, tracking on expedited services.
          We promise to provide world-class transportation services and ensure
          your freight is delivered on schedule and straight to the designated
          destination. Our goal is your satisfaction with our services. We
          welcome you to check out our website and discover our services:
          Freight transportation, CDL Drivers, Employee job opportunities.
        </Content.Counts>
      </Content>
    </Wrapper>
  );
};

export default About;
