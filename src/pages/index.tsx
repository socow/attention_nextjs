import { Inter } from "next/font/google";
import CommentList from "@/components/CommentList";
import Comments from "@/components/Comments";
import styled from "styled-components";
import MainList from "../components/MainList";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Container>
        <MainWrappar>
          <MainList />
          <Comments />
          <CommentList />
        </MainWrappar>
      </Container>
    )
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: 100%;
  margin: auto;
  padding: 30px;
`;
const MainWrappar = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 0px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;
`;
