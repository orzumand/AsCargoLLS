import styled from "styled-components";
import BG from "../../assets/img/FooterBG.png";

const MainContainer = styled.div`
  width: 100%;
  padding: 0px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: left center;
  background-image: url(${BG});
  background-color: #222224;
  position: relative;
  .truck {
    position: absolute;
    right: 0;
    top: -30%;
  }
`;

const Wrapper = styled.div`
  z-index: 5;
  min-width: 787px;
  max-width: 1540px;
  width: 100%;
  padding: 110px 15px 0px 15px;
  height: 310px;
`;
const Content = styled.div`
  border-bottom: 3px solid #47494d;
  padding: 4px 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
Content.Navigation = styled.div`
  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    margin-right: 30px;
  }
  a:hover {
    color: #2b95a6;
  }
`;

const Social = styled.div`
  padding-top: 90px;
  display: flex;
  align-items: flex-end;
  /* justify-content: space-between; */
  color: #47494d;
  .icons {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 0px auto;
  }
`;
const Image = styled.img`
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background-color: #2b95a6;
  }
  &:active {
    /* background-color: #33dbf4; */
  }
`;

export { Wrapper, MainContainer, Content, Social, Image };
