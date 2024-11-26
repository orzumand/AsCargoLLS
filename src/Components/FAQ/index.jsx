import { useState } from "react";
import { Wrapper, MainContainer, Content, Card } from "./styled";

const FAQ = () => {
  const [active, setActive] = useState(false);

  return (
    <div id="FAQ">
      <MainContainer>
        <Wrapper>
          <h1>Ferquently Asked Question</h1>
          <Content>
            <Card
              onClick={() => setActive(active == 1 ? 0 : 1)}
              className={active == 1 && "active"}
            >
              Which states do you cover?
              <div className="status">{active == 1 ? "--" : "+"}</div>
              <div className="line "></div>
              <div className="answer">
                We primarily serve the Midwest states, including Illinois, Ohio,
                Indiana, Tennessee, Missouri, Texas, and others, offering
                efficient and reliable trucking logistics across the country. If
                your preferred regions fall outside our coverage area, don`t
                hesitate to contact us for more detailed info .
              </div>
            </Card>
            <Card
              onClick={() => setActive(active == 2 ? 0 : 2)}
              className={active == 2 && "active"}
            >
              How do you ensure driver safety?
              <div className="status">{active == 2 ? "--" : "+"}</div>
              <div className="line "></div>
              <div className="answer">
                We keep drivers safe by providing clear load details, following
                weight limits, helping with route planning and supporting 24/7
                with maintenance issues. Our team is always ready to help if
                anything comes up on the road.
              </div>
            </Card>
            <Card
              onClick={() => setActive(active == 3 ? 0 : 3)}
              className={active == 3 && "active"}
            >
              How old are trucks and trailers?
              <div className="status">{active == 3 ? "--" : "+"}</div>
              <div className="line "></div>
              <div className="answer">
                We maintain a modern fleet, ensuring all trucks and trailers are
                3 years old or newer, with regular upgrades to replace older
                equipment.
              </div>
            </Card>
            <Card
              onClick={() => setActive(active == 4 ? 0 : 4)}
              className={active == 4 && "active"}
            >
              How and when will I get paid?
              <div className="status">{active == 4 ? "--" : "+"}</div>
              <div className="line "></div>
              <div className="answer">
                We provide competitive payments via direct deposit on a weekly
                basis. Full details will be shared during the recruiting
                process.
              </div>
            </Card>
            {/* <Card
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
            </Card> */}
          </Content>
        </Wrapper>
      </MainContainer>
    </div>
  );
};

export default FAQ;
