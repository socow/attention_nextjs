import styled from "styled-components";
import logo from "/public/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Nav() {
  const { push } = useRouter();

  return (
    <>
      <Navbar>
        <LogoWrap href="/">
          <Image src={logo} height={100} alt={"로고이미지"} priority />
        </LogoWrap>
        <BtnWrap>
          <PostBtn onClick={() => push("/NewPost")}>새 글 작성</PostBtn>
          <LoginBtn>로그인</LoginBtn>
        </BtnWrap>
      </Navbar>
    </>
  );
}

const Navbar = styled.nav`
  margin: auto;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 0 10px;
`;
const LogoWrap = styled.a``;

const BtnWrap = styled.div`
  display: flex;
  grid-gap: 30px;
  gap: 30px;
  align-items: center;
`;
const LoginBtn = styled.button`
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
const PostBtn = styled.button`
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
