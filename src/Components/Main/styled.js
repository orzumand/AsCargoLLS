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
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 10%,
      rgba(0, 0, 0, 0) 60%
    ),
    url(${Image});
  background-size: cover;
  background-position: center;
  /* border: 2px solid red; */
  .link_apply {
    text-decoration: none;
    position: fixed;
    color: #f2123a;
    background-color: white;
    right: 1%;
    top: 83%;

    z-index: 999;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    font-size: clamp(0.5rem, 3vw, 1rem);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
  }
  .link_apply:hover {
    color: white;
    background-color: #f2123a;
  }
  .link_apply:active {
    color: #f2123a;
    background-color: white;
  }
`;

const Wrapper = styled.div`
  max-width: 1540px;
  width: 100%;
  padding: 20px 85px 0px 85px;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  /* border: 2px solid red; */
  @media (max-width: 767px) {
    padding: 20px 15px 0px 15px;
  }
`;
const Content = styled.div`
  width: 100%;

  .icon {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    /* margin-top: 10px; */
  }
  .contentText {
    color: rgb(255, 255, 255);

    font-weight: 700;
    letter-spacing: 0%;
    margin-top: 170px;
    font-size: clamp(2rem, 4.5vw, 4rem);
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

    font-size: clamp(1rem, 1.5vw, 4rem);
  }
  div.title {
    text-align: left;
    color: white;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

export { Wrapper, MainContainer, Content };
