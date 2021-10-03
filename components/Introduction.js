import React from "react";
import Head from "next/head";
function Introduction() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="introduction">
        <div className="firstSection">
          <div className="title">Emrulla Ramilli</div>
          <p>
            Hello, my name is Emrulla. I am a Junior FrontEnd (React JS)
            Developer
          </p>
          <div className="topsvg"></div>
          <div className="bottomsvg"></div>
        </div>
        <div className="firstSection">
          <div className="title">What I do</div>
          <p className="second">
            Hello, my name is Emrulla. I am a Junior FrontEnd (React JS)
            Developer
          </p>
          <div className="topsvg"></div>
          <div className="bottomsvg"></div>
        </div>

        <section>
          <h1>DRY.</h1>
          <h1>KISS.</h1>
          <h1>SOLID.</h1>
          <a href="#contact">
            Contact me <i class="fas fa-arrow-right"></i>
          </a>
        </section>
      </div>
    </>
  );
}

export default Introduction;
