import { useState } from "react";
import { Wrapper, MainContainer, Content, Card } from "./styled";

const FAQ = () => {
  const [active, setActive] = useState(false);

  return (
    <div id="features">
      <MainContainer>
        <Wrapper>
          <h1>Ferquently Asked Question</h1>
          <Content>
            <Card
              onClick={() => setActive(active == 1 ? 0 : 1)}
              className={active == 1 && "active"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              porro ?<div className="status">{active == 1 ? "--" : "+"}</div>
              <div className="line "></div>
              <div className="answer">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                sapiente temporibus esse repellendus ut ipsum, officia
                reprehenderit nam accusamus debitis!
              </div>
            </Card>
            <Card
              onClick={() => setActive(active == 2 ? 0 : 2)}
              className={active == 2 && "active"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              porro ?<div className="status">{active == 2 ? "--" : "+"}</div>
              <div className="line "></div>
              <div className="answer">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                sapiente temporibus esse repellendus ut ipsum, officia
                reprehenderit nam accusamus debitis!
              </div>
            </Card>
            <Card
              onClick={() => setActive(active == 3 ? 0 : 3)}
              className={active == 3 && "active"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              porro ?<div className="status">{active == 3 ? "--" : "+"}</div>
              <div className="line "></div>
              <div className="answer">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                sapiente temporibus esse repellendus ut ipsum, officia
                reprehenderit nam accusamus debitis!
              </div>
            </Card>
            <Card
              onClick={() => setActive(active == 4 ? 0 : 4)}
              className={active == 4 && "active"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              porro ?<div className="status">{active == 4 ? "--" : "+"}</div>
              <div className="line "></div>
              <div className="answer">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                sapiente temporibus esse repellendus ut ipsum, officia
                reprehenderit nam accusamus debitis!
              </div>
            </Card>
            <Card
              onClick={() => setActive(active == 5 ? 0 : 5)}
              className={active == 5 && "active"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              porro ?<div className="status">{active == 5 ? "--" : "+"}</div>
              <div className="line "></div>
              <div className="answer">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                sapiente temporibus esse repellendus ut ipsum, officia
                reprehenderit nam accusamus debitis!
              </div>
            </Card>
          </Content>
        </Wrapper>
      </MainContainer>
    </div>
  );
};

export default FAQ;
