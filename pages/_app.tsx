import { AppProps } from "next/app";
import "../styles/app.scss";

export default function App({ Component, pageProps }: AppProps) {
    return <main style={{width: "100%", height: "100%"}}>
        <Component {...pageProps} />
      </main>
}