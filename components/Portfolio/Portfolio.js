import React from "react";
import Project from "./Project";
import Slider from "react-slick";
import Netflix from "../../public/slider/netflix.jpg";
import Todo from "../../public/slider/todo.jpg";
import Blog from "../../public/slider/blog.jpg";
import Commerce from "../../public/slider/ecommerce.jpg";
import Storybook from "../../public/slider/storybook.jpg";
import Twitter from "../../public/slider/twitter.jpg";
import Logo from "../../public/slider/bayernlogo.png";
function Portfolio() {
  const projects = [
    {
      title: "Netflix clone",
      image: Netflix,
      github: "https://github.com/Emi263/netflix-clone",
      demo: "https://nnetflix-clonee.netlify.app/",
      description: "React JS, TS, Styled Components, Pixel Perfect",
    },
    {
      title: "CRUD TODO APP",
      image: Todo,
      github: "https://github.com/Emi263/todo-typescript",
      demo: "https://crud-app-emi.netlify.app",
      description: "React JS, Typescript, Local Storage, PWA",
    },
    {
      title: "Blogify",
      image: Blog,
      github: "https://github.com/Emi263/blogContenful",
      demo: "https://blog-contenful.vercel.app/",
      description: "Next JS, Contentful, Moment.js, pagination",
    },
    {
      title: "E-commerce",
      image: Commerce,
      github: "https://github.com/Emi263/react-ecommerce",
      demo: "https://emi-ecommerce.netlify.app",
      description: "React JS, Material UI, Redux Toolkit, Paypal Sandbox ",
    },
    {
      title: "Storybook ",
      image: Storybook,
      github: "https://github.com/Emi263/storybook",
      demo: "https://storybook-emi.netlify.app/",
      description: "React JS, Storybook",
    },
    {
      title: "Twitter clone",
      image: Twitter,
      github: "https://github.com/Emi263/twitter-clone",
      demo: "https://emi-twitter-clone.netlify.app/",
      description: "React JS, Material UI, SCSS, Firebase",
    },
    {
      title: "Bayern Logo",
      image: Logo,
      github: "https://codepen.io/emi26/pen/mdmzxEg",
      demo: "https://codepen.io/emi26/pen/mdmzxEg",
      description: "HTML, CSS",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    autoplay: true,
    speed: 1000,
  };

  return (
    <>
      <h1 className="title">My Portfolio</h1>
      <div className="sliderMobile">
        <Slider {...settings}>
          {projects.map((project) => (
            <Project
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              demo={project.demo}
              github={project.github}
            />
          ))}
        </Slider>
      </div>
      <div className="projectsNotMobile">
        {projects.map((project) => (
          <Project
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            demo={project.demo}
            github={project.github}
          />
        ))}
      </div>
      See all project here
    </>
  );
}

export default Portfolio;
