import styled from "styled-components";
import logo from "/public/images/logo.png";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Nav() {
  const { push } = useRouter();
  return (
    <Navbar>
      <LogoWrap href="/">
        <Image src={logo} fill alt={"로고이미지"} priority />
      </LogoWrap>
      <BtnWrap>
        <PostBtn
          onClick={() => {
            push("/NewPost");
          }}
        >
          새 글 작성
        </PostBtn>
      </BtnWrap>
    </Navbar>
  );
}

const Navbar = styled.nav`
  @media ${({ theme }) => theme.device.mobile} {
    height: 60px;
  }
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 0 10px;
  border-bottom: 1px #ffcccc dotted;
`;
const LogoWrap = styled.a`
  @media ${({ theme }) => theme.device.mobile} {
    height: 50px;
    width: 80px;
  }
  width: 120px;
  height: 70px;
  position: relative;
`;

const BtnWrap = styled.div`
  display: flex;
  grid-gap: 30px;
  gap: 30px;
  align-items: center;
`;

const PostBtn = styled.button`
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
  }
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
