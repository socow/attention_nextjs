import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Container, MainWappar } from ".";
import { listRequest } from "@/apis/api";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("../components/editor"), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정

export default function NewPost() {
  const { push } = useRouter();
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState("");

  // const viewContainerRef = useRef<HTMLDivElement>(null);

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    listRequest.post(title, content);
    push("/");
  };

  return (
    <PostContainer>
      <MainWappar>
        <form onSubmit={post}>
          제목
          <EditorContainer>
            <input onChange={(e) => setTitle(e.target.value)} />
            <Editor content={content} setContent={setContent} />
            <button type="submit">글 작성하기</button>
          </EditorContainer>
        </form>
      </MainWappar>
    </PostContainer>
  );
}

export const PostContainer = styled.div`
  display: flex;
  width: 70%;
  height: 40rem;
  margin: auto;
  padding: 30px;
  justify-content: center;
`;
const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  margin: 0 auto;
  input {
    width: 730px;
    height: 50px;
    margin-bottom: 10px;
    border: 1px solid #e1e3e8;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
  button {
    height: 50px;
    font-weight: 700;
    background-color: #262626;
    color: #fff;
  }
`;
