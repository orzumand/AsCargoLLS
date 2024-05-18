import styled from "styled-components";
import BG from "../../assets/img/contact.png";

const MainContainer = styled.div`
  width: 100%;
  padding: 0px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: left center;
  background-color: white;
  /* background-image: url(${BG}); */
  background-size: 900px;
  background-position: 90% 60%;
  position: relative;
`;

const Wrapper = styled.div`
  height: 800px;
  z-index: 5;
  min-width: 787px;
  max-width: 1540px;
  width: 100%;
  padding: 150px 15px 0px 15px;
  display: flex;
  justify-content: space-around;
`;
const Content = styled.div`
  color: black;
`;
Content.Text = styled.div`
  font-size: 4rem;
  font-weight: 600;
`;
Content.Sub = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  width: 400px;
  margin: 24px 0px 60px 0px;
`;
Content.Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;
const Form = styled.div`
  width: 400px;
  height: 500px;
  background-color: rgba(159, 159, 159, 0.181);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 10px;
  width: clamp(200px, 40vw, 400px);
  ::placeholder {
    color: white;
  }
  textarea {
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-bottom: 2px solid white;
    width: 100%;
    &::placeholder {
      color: white;
    }
    color: white;
    font-size: 1.2rem;
    outline: none;
    padding: 5px;
  }
`;
Form.Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;
Form.Subtitle = styled.div``;

Form.Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  height: 30px;
  color: white;
  font-size: clamp(0.3rem, 10vw, 1.2rem);
  outline: none;
  padding-bottom: 5px;
  margin-bottom: 30px;
`;
Form.Button = styled.div`
  background-color: white;
  width: 140px;
  height: 30px;
  border-radius: 1px;
  margin-left: auto;
  margin-top: 20px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  &:active {
    background-color: grey;
    color: white;
  }
`;
export { Wrapper, MainContainer, Content, Form };
