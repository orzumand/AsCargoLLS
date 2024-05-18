import styled, { keyframes } from "styled-components";

const SidebarWrapper = styled.div`
  position: fixed;
  top: 90px;
  height: 50vh;
  right: 1rem;
  z-index: 100;
  .line {
    height: 10px;
    stroke: green;
  }
  .title {
    color: red;
  }
  a {
    position: absolute;
    text-decoration: none;
    font-size: 1rem;
    color: white;
    background-color: #2b95a6;
    font-weight: 500;

    padding: 0px 10px;
    border-radius: 5px;
  }

  .HOME {
    top: -29px;
  }
  .ABOUT {
    left: -5px;
    top: 28%;
  }
  .FAQ {
    left: 38px;
    top: 52%;
  }
  .SERVICES {
    left: -45px;
    top: 72%;
  }
  .CONTACT {
    left: -15px;
    top: 102%;
  }
`;
const scrollAnimation = keyframes`
0%{
  top: -5px;
  left: -5px;
}
10%{
  left: 35%;
  top: 10;
}
20%{
  left: 68%;
  top: 20%;
}
30%{
  left: 75%;
  top: 30%;
}
40%{
  left : 25%;
  top: 40%;
}
50%{
  left : 0%;
  top: 50%;
}
60%{
  left : 15%;
  top: 60%;
}
70%{
  left : 60%;
  top: 70%;
}
80%{
  left : 25%;
  top: 80%;
}

90%{
  left : 10%;
  top: 85%;
}

100%{
  left: 32%;
  top: 92%;
}
`;
const Element = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  transform: translate(-50% 50%);

  animation: ${scrollAnimation} linear;
  animation-timeline: scroll(y);
`;

export { SidebarWrapper, Element };
