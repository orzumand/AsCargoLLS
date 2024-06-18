import styled from "styled-components";
import BG from "../../assets/img/CardBG.png";
const MainContainer = styled.div`
  width: 100%;
  padding: 0px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f8ff;
`;
const Wrapper = styled.div`
  min-width: 787px;
  max-width: 1540px;
  width: 100%;
  padding: 20px 15px 0px 15px;
  height: 820px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  .icon {
    margin-top: 80px;
    display: flex;
    justify-content: center;
  }
`;
const ContentText = styled.div`
  position: absolute;
  z-index: 5;
  color: #6c6c6c;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0%;
  margin-top: 80px;
  width: fit-content;
`;

Content.Counts = styled.div`
  div.card {
    z-index: 2;
    width: 280px;
    height: 350px;
    background-color: white;
    padding: 20px;
    background-image: url(${BG});
    background-size: 32px;
    background-repeat: no-repeat;
    background-position: 95% 15px;

    /* &:hover {
      transition: 0.2s;
      padding: 25px;
      .corner {
        left: -3px;
        bottom: -3 px;
      }
    } */
  }
`;
const Card = styled.div`
  z-index: 2;
  width: 280px;
  height: 350px;
  background-color: white;
  padding: 20px;
  background-image: url(${BG});
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: 95% 15px;
  transition: all 0.2s;
  &:hover {
    padding: 25px;
    .corner {
      left: -3px;
      bottom: -3 px;
    }
  }

  .corner {
    transition: all 0.2s;
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 25px;
    height: 25px;
    border-left: 8px solid #2b95a6;
    border-bottom: 8px solid #2b95a6;
    opacity: 60%;
  }
  background-color: rgba(255, 255, 255);
  backdrop-filter: blur(10px);
`;
Card.Title = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #2b95a6;
  margin-bottom: 20px;
  margin-top: 22px;
`;
Card.Subtitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #6c6c6c;
  line-height: 30px;
`;
const Map = styled.div`
  svg {
    stroke: #fff;
    stroke-width: 2px;

    // All layers are just path elements
    path {
      opacity: 40%;
      fill: #2b95a6;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        opacity: 95%;
        fill: #2b95a6;
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(168, 43, 43, 0.6);
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked="true"] {
        fill: rgba(56, 43, 168, 1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: rgba(56, 43, 168, 0.83);
      }

      // You can also highlight a specific layer via it's id
    }
  }
`;

const Outer = styled.div`
  position: absolute;

  background-color: rgba(23, 23, 23, 0.5);
  backdrop-filter: 10px;
  color: white;
  font-weight: 600;
  z-index: 5;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
`;

export { Wrapper, MainContainer, Content, Card, Map, Outer, ContentText };
