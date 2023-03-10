import { Inter } from "next/font/google";
import styled from "styled-components";
import { useCallback, useEffect } from "react";
import { listRequest } from "@/apis/api";
import { useRecoilState } from "recoil";
import { attentionListState } from "@/store/attention.recoil";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [list, setList] = useRecoilState(attentionListState);

  const getList = useCallback(() => listRequest.get(setList), [setList]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <Container>
      <MainWappar>
        <h1>당신의 고민과 이야기에 주목합니다. </h1>
        <h2>
          오늘의 주목:<span> {list?.content}</span>
        </h2>
      </MainWappar>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  padding: 30px;
  justify-content: center;
`;
export const MainWappar = styled.div`
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
