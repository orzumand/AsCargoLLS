import styled from "styled-components";
import Image from "../../assets/img/Group 35.png";
import Cursor from "../../assets/icons/Group 39.svg";
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: url(${Cursor}), auto;
  /* border: 2px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 10%,
      rgba(0, 0, 0, 0) 60%
    ),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  /* height: 1460px; */
`;
const Wrapper = styled.div`
  min-width: 787px;
  max-width: 1540px;
  width: 100%;
  padding: 20px 85px 0px 85px;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 2px solid red; */
`;
const Content = styled.div`
  width: 100%;

  .icon {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .contentText {
    color: rgb(255, 255, 255);

    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0%;
    margin-top: 170px;
  }
`;
Content.Text = styled.div``;

Content.Counts = styled.div`
  display: flex;
  gap: 35px;
  margin-top: 150px;
  div {
    text-align: center;
  }
  div.count {
    font-size: 1.7rem;
    font-weight: 900;
    color: white;
    letter-spacing: 2px;
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  div.title {
    color: white;
    font-family: 1.2rem;
  }
`;

export { Wrapper, MainContainer, Content };
