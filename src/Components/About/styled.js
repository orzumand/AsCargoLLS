import styled from "styled-components";

// const MainContainer = styled.div`
//   width: 100%;
//   padding: 0px 70px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background-color: #35353a; */
// `;
const Wrapper = styled.div`
  /* background-size: cover; */

  background-repeat: no-repeat;
  background-position: right center;
  background-size: 60%;
  /* margin-top: 180px; */
  /* border: 2px solid red; */
  min-width: 787px;
  max-width: 1540px;
  width: 100%;
  padding: 20px 85px 0px 85px;
  height: 820px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  padding-top: 132px;
  width: 100%;
`;
Content.Name = styled.div`
  color: #ffffff;
  font-size: 2rem;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 1.5rem;
`;
Content.Text = styled.div``;

Content.Counts = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
  width: 500px;
  padding-top: 1rem;
`;

export { Wrapper, Content };
