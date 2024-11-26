import { Wrapper, MainContainer, Content, Form } from "./styled";
import Call from "../../assets/img/call.png";
import Gmail from "../../assets/img/gmail.png";
import Location from "../../assets/img/location.png";
const Contact = () => {
  return (
    <div id="contacts">
      <MainContainer>
        <Wrapper>
          <Content>
            <Content.Text>Contacts Us</Content.Text>
            <Content.Sub>
              You need more information?Check what other people are saying about
              our service
            </Content.Sub>
            <Content.Item>
              <img width={40} src={Call} alt="" /> 630-686-6569
            </Content.Item>
            <Content.Item>
              <img width={40} src={Gmail} alt="" /> DISPATCH@ASCARGOLLC.COM
            </Content.Item>
            <Content.Item>
              <img width={40} src={Location} alt="" /> 800 W 5TH AVE #209 ,
              NAPERVILLE, IL 60563
            </Content.Item>
          </Content>
          <Form>
            <Form.Title>Feedback form</Form.Title>

            <Form.Input placeholder="Full name" type="text"></Form.Input>

            <Form.Input placeholder="Email" type="text"></Form.Input>

            <Form.Input placeholder="Phone" type="text"></Form.Input>

            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="7"
            ></textarea>
            <Form.Button>Send</Form.Button>
          </Form>
        </Wrapper>
      </MainContainer>
    </div>
  );
};

export default Contact;
