import Nav from "@/components/Nav";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "react-quill/dist/quill.snow.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Nav />
      <Component {...pageProps} />;
    </RecoilRoot>
  );
}
