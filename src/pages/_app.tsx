import Nav from "@/components/Nav";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { firestore } from "@/firebase";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
