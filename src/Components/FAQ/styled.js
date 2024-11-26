import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  padding: 0px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Wrapper = styled.div`
  z-index: 5;
  min-width: 787px;
  max-width: 1540px;
  width: 100%;
  padding: 150px 15px 0px 15px;
  height: 820px;
  display: flex;
  align-items: center;
  flex-direction: column;

  /* border: 2px solid red; */
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
  .active {
    height: 150px;
    color: #2b95a6;
  }
  .icon {
    margin-top: 80px;
    display: flex;
    justify-content: center;
  }
`;
Content.Text = styled.div`
  color: #6c6c6c;
  font-family: Lato;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0%;
  margin-top: 80px;
`;

Content.Counts = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 150px;
  div {
    text-align: center;
  }
  div.count {
    font-size: 1.2rem;
    font-weight: 900;
    color: white;
    letter-spacing: 2px;
  }
  div.title {
    color: white;
    font-family: 1rem;
  }
`;

const Card = styled.div`
  color: black;
  overflow: hidden;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 12px 12px 12px 0px;
  border-radius: 10px;
  width: 900px;
  height: 60px;
  cursor: pointer;
  transition: all 400ms;
  position: relative;
  /* background-color: darkcyan; */
  .line {
    height: 2px;
    background-color: #e7e7e7;
    width: 100%;
    margin: 20px 0px;
  }
  .answer {
    color: #a1a1a1;
    font-weight: 500;
    font-size: 18px;
    padding-right: 24px;
  }
  .status {
    position: absolute;
    right: 15px;
    font-size: 30px;
    top: 12px;
    color: #2b95a6;
  }
`;
export { Wrapper, MainContainer, Content, Card };
