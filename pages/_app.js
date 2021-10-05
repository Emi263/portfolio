import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/introduction.css";
import "../styles/singleCard.css";
import "../styles/project.css";
//Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//end

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
    />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
