import { Inter } from "next/font/google";
import Main from "@/components/Main";
import styled from "styled-components";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Maincontainer>
      <Main />
    </Maincontainer>
  );
}

const Maincontainer = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  padding: 30px;
  justify-content: center;
`;
