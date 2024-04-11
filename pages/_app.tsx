import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/Navbar";


export default function App({ Component, pageProps }: AppProps) {
  return <>

    <Component {...pageProps} />  </>
    ;
}

