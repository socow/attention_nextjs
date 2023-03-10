import { listRequest } from "@/apis/api";
import { useState } from "react";
import { Container, MainWappar } from ".";
import { useRouter } from "next/router";
export default function NewPost() {
  const { push } = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    listRequest.post(title, content);
    push("/");
  };

  return (
    <Container>
      <MainWappar>
        글작성페이지
        <form onSubmit={post}>
          <input onChange={(e) => setTitle(e.target.value)} />
          <input onChange={(e) => setContent(e.target.value)} />
          <button type="submit">글 작성하기</button>
        </form>
      </MainWappar>
    </Container>
  );
}
