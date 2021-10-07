import React, { useEffect } from "react";
import Netflix from "../../public/slider/netflix.jpg";
import Todo from "../../public/slider/todo.jpg";
import Blog from "../../public/slider/blog.jpg";
import Commerce from "../../public/slider/ecommerce.jpg";
import Storybook from "../../public/slider/storybook.jpg";
import Twitter from "../../public/slider/twitter.jpg";
import Logo from "../../public/slider/bayernlogo.png";
import Color from "../../public/allprojects/color.jpg";
import Covid from "../../public/allprojects/covid.jpg";
import Insta from "../../public/allprojects/insta.jpg";
import Kirby from "../../public/allprojects/kirby.jpg";
import Movies from "../../public/allprojects/movies.jpg";
import Rsp from "../../public/allprojects/rsp.jpg";
import Testing from "../../public/allprojects/testing.jpg";
import Food from "../../public/allprojects/food.jpg";
import Transaction from "../../public/allprojects/transaction.jpg";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

function AllProjects() {
  useEffect(() => {
    toast.info("Hover over the cards to see a description of each website", {
      position: "top-center",
      style: { backgroundColor: "black", color: "white" },
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  const router = useRouter();
  const data = [
    {
      title: "Movies",
      image: Movies,
      url: "https://movie-emi.netlify.app/",
      sourceUrl: "https://github.com/Emi263/react-movie-tailwind",
      description:
        "React Movie is a website   created using React  JS and Tailwind CSS. In the homepage there are the trending movies but you can also search for a movie and the search process is in real time. You can click in every movie and read more about it. The data are retrieved from MovieDB API. React Router, custom React Skeletons, fetching Single Item  ",
    },
    {
      title: "CRUD Todo APP",
      image: Todo,
      url: "https://crud-app-emi.netlify.app",
      sourceUrl: "https://github.com/Emi263/todo-typescript",
      description:
        "Crud app with React and Typescript that works as a PWA! You can install it on your phone/PC and use it as a native app. It uses Local Storage to save the data on the local device ",
    },
    {
      title: "E-Commerce",
      image: Commerce,
      url: "https://emi-ecommerce.netlify.app",
      sourceUrl: "https://github.com/Emi263/react-ecommerce",
      description: "E-Commerce with Redux Toolkit and Material Ui",
    },

    {
      title: "Expense Tracker",
      image: Transaction,
      url: "https://expense-tracker-emi.netlify.app/",
      sourceUrl: "https://github.com/Emi263/react-expense",
      description:
        "Track your expenses with this website. Add some transactions, check in real time the balance and do not worry if you refresh the page because it is all saved on your Local Storage. I have used here the Context API, Local Storage, array methods (filter, reduce, some)",
    },
    {
      title: "Blogify",
      image: Blog,
      url: "https://blog-contenful.vercel.app/",
      sourceUrl: "https://github.com/Emi263/blogContenful",
      description:
        "Next JS blog with Contentful as a Headless CMS. Supports rich text, image rendering betweeen the text, links, tags. Implemented custom pagination and custom filtering of posts by clicking on the hashtags",
    },
    {
      title: "Covid Info",
      image: Covid,
      url: "https://covid-info-al.netlify.app/",
      sourceUrl: "https://github.com/Emi263/covid-19",
      description:
        "Covid info website created with React Js and Bootstrap. Type in the textfield, search for a country (real-time filtering, HTML IS SO POWERFUL) and type ENTER/GO and you will retrieve the infromation",
    },
    {
      title: "Twitter Clone",
      image: Twitter,
      url: "https://emi-twitter-clone.netlify.app/",
      sourceUrl: "https://github.com/Emi263/twitter-clone",
      description:
        "Twitter Clone with ReactJS and Firebase Auth, Storage and Firestore. You can log in/sign in post something and it will be saved into database. Still there is a lot room for improvement : sign-out, auto-signOut, styling and UX/UI",
    },
    {
      title: "Color palette generator",
      image: Color,
      url: "https://color-palette-generator-emi.netlify.app/",
      sourceUrl: "https://github.com/Emi263/color-palette-generator",
      description:
        "Color palette Generator using HTML, SCSS and JAVASCRIPT. You can generate a color by clicking the generate button and if you click on a color section, it will be copied to clipboard automatically",
    },
    {
      title: "Netflix Clone",
      image: Netflix,
      url: "https://nnetflix-clonee.netlify.app/",
      sourceUrl: "https://github.com/Emi263/color-palette-generator",
      description: "Pixel Perfect Clone of Netflix using Styled Components",
    },
    {
      title: "React Testing",
      image: Testing,
      url: "https://github.com/Emi263/react-testing",
      sourceUrl: "https://github.com/Emi263/react-testing",
      description:
        "Testing React apps with Jest, React Testing Library and Cypress for end-to-end tests",
    },
    {
      title: "Storybook",
      image: Storybook,
      url: "https://storybook-emi.netlify.app/",
      sourceUrl: "https://github.com/Emi263/storybook",
      description:
        "Using Storybook as a design system to test components in isolation",
    },
    {
      title: "Rock Scissor Paper Game",
      image: Rsp,
      url: "https://rsp-game-js.netlify.app/",
      sourceUrl: "https://github.com/Emi263/rsp",
      description:
        "Rock Scissor Paper Game using HTML, CSS and Javascript. Too lazy to build the winner functionality but you can play an infinite game with the computer :)",
    },
    {
      title: "Foodie",
      image: Food,
      url: "https://foodie-emi.netlify.app/",
      sourceUrl: "https://github.com/Emi263/foodie",
      description:
        "Simple Food Website using HTML, CSS and Vanilla JS. You can filter the food. A cool hamburger menu animation too.",
    },
    {
      title: "Image Gallery",
      image: Insta,
      url: "https://insta-emi.netlify.app/",
      sourceUrl: "  https://github.com/Emi263/gallery",
      description:
        "Upload a photo from your device and it will be saved in the Firebase Database. You can delete photos too",
    },

    {
      title: "FC Bayern Munich Logo",
      image: Logo,
      url: " https://codepen.io/emi26/pen/mdmzxEg",
      sourceUrl: "  https://codepen.io/emi26/pen/mdmzxEg",
      description: "FC Bayern Logo using HTML and CSS",
    },
    {
      title: "Kirby",
      image: Kirby,
      url: "https://codepen.io/emi26/pen/YzVJapB",
      sourceUrl: "  https://codepen.io/emi26/pen/YzVJapB",
      description: "Kirby Cartoon using HTML and SCSS",
    },
  ];

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="projectContainer">
        {data.map((data) => (
          <ProjectCard
            key={data.title}
            image={data.image}
            title={data.title}
            description={data.description}
            github={data.sourceUrl}
            demo={data.url}
          />
        ))}
      </div>
      <div className="link-container" onClick={() => router.push("/")}>
        <a>Go back home</a>
      </div>
    </>
  );
}

export default AllProjects;
