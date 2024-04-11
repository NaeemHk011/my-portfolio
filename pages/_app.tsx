import Navbar from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import nav from "@/components/Nav";


export default function App({ Component, pageProps }: AppProps) {
  return <>

    <Component {...pageProps} />  </>
    ;
}

