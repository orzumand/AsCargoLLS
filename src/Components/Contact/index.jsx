import { Wrapper, MainContainer, Content, Form } from "./styled";
import Call from "../../assets/img/call.png";
import Gmail from "../../assets/img/gmail.png";
import Location from "../../assets/img/location.png";
const Contact = () => {
  return (
    <div id="features">
      <MainContainer>
        <Wrapper>
          <Content>
            <Content.Text>Contacts Us</Content.Text>
            <Content.Sub>
              You need more information?Check what other people are saying about
              our service
            </Content.Sub>
            <Content.Item>
              <img width={40} src={Call} alt="" /> +123412123422
            </Content.Item>
            <Content.Item>
              <img width={40} src={Gmail} alt="" /> ascargollc@gmail.com
            </Content.Item>
            <Content.Item>
              <img width={40} src={Location} alt="" /> 400Agency, 100 Broadway
              SF CA 94111, United States
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
