import styled from "styled-components";

export default function Main() {
  return (
    <>
      <MainWappar>
        <h1>당신의 고민과 이야기에 주목합니다. </h1>
        <h2>
          오늘의 주목:<span> {}</span>
        </h2>
      </MainWappar>
    </>
  );
}

const MainWappar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0/16%);
  span {
    color: #02d73b;
  }
`;
