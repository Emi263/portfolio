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
          <div className="topsvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffbdbd"
                fill-opacity="1"
                d="M0,0L48,10.7C96,21,192,43,288,80C384,117,480,171,576,170.7C672,171,768,117,864,112C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="bottomsvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffbdbd"
                fill-opacity="1"
                d="M0,224L48,240C96,256,192,288,288,282.7C384,277,480,235,576,224C672,213,768,235,864,245.3C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="firstSection">
          <div className="title">What I do</div>
          <p className="second">
            I enjoy creating websites and Single Page Applications with React JS
            ecosystem technologies! I pay attention to pixels and responsiveness
            of a website.
          </p>
          <div className="topsvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffbdbd"
                fill-opacity="1"
                d="M0,0L48,10.7C96,21,192,43,288,80C384,117,480,171,576,170.7C672,171,768,117,864,112C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="bottomsvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffbdbd"
                fill-opacity="1"
                d="M0,224L48,240C96,256,192,288,288,282.7C384,277,480,235,576,224C672,213,768,235,864,245.3C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>

        <section>
          <h1>DRY.</h1>
          <h1>KISS.</h1>
          <h1>SOLID.</h1>

          <a href="#contact">
            Contact me <i className="fas fa-arrow-right"></i>
          </a>
        </section>
      </div>
    </>
  );
}

export default Introduction;
