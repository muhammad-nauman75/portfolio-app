import blogApp from "../../Images/projects/blog-app.png";
import phpAdmin from "../../Images/projects/php-admin.png";
import jsMovieApp from "../../Images/projects/js-movie-app.png";
import phpPriceCalc from "../../Images/projects/php-price-calc.png";
import reactMovieApp from "../../Images/projects/react-movie-app.png";
import reactStore from "../../Images/projects/react-store.png";
import todoApp from "../../Images/projects/todo-app.png";
import uxDesign from "../../Images/projects/ux-design.png";
import personalPage from "../../Images/projects/personal-page.png";
import wordpress from "../../Images/projects/Wordpress.png";

const projectData = [
  {
    title: "JavaScript Blog App",
    tools: "Javascript, HTML, CSS",
    img: blogApp,
    details:
      "In this project we worked as a group in github resositery where everyone contriubte their work. By using valina Javascript, HTML and CSS, we created a blog app where a user can see all blog post whereas an admin can perform a CRUD operation on admin page.",
  },
  {
    title: "Movie App",
    tools: "Javascript, HTML, CSS",
    img: jsMovieApp,
    details:
      "I developed the Movie App using Javascript, HTML and CSS. I used 'OMDb API' to fetch data using javascript promises and present to data nicly by using HTML and CSS.",
  },
  {
    title: "React Product Store",
    tools: "React, Styled-Compnents",
    img: reactStore,
    details:
      "We as a group of three people created this online store by using React Js. First we build a node app to communicate with data server and we used MongoDB Atlas then we connect or clint side app with the server. For clint side we used react Hooks, react-dom and react router to develop this online store.",
  },
  {
    title: "React Movie App",
    tools: "React, CSS",
    img: reactMovieApp,
    details:
      "It is a single page react app where a user can search the movie and filter them according to thair nature. In addition user can add or delete a movie in favorite list.",
  },
  {
    title: "Todo App",
    tools: "React, CSS",
    img: todoApp,
    details:
      "Todo app created in react where a user can perform CRUD operation with todos and also mark them as completed",
  },
  {
    title: "Admin Panel",
    tools: "PHP",
    img: phpAdmin,
    details:
      "A complete admin panel developed in php. Where a admin can view the stocks, add, delete and update new product and category. I used mySQL databse ",
  },
  {
    title: "Php Price Calculator",
    tools: "PHP",
    img: phpPriceCalc,
    details:
      "I used  a broadband price calculator based on usage in php. In this app the VAT calculated separtly. ",
  },
  {
    title: "Personal Page",
    tools: "HTML, CSS",
    img: personalPage,
    details:
      "I created a simple personal page with different pages. And i used only html and css to create this website",
  },
  {
    title: "WordPress Online Store",
    tools: "Wordpress, WooCommerce, Elementor",
    img: wordpress,
    details:
      "I created an e-commerce cosmatics store where a user can buy the products and admin can manage the stocks. I mainly used WooCommerece and Elementor",
  },
  {
    title: "Foodie.com",
    tools: "Adobe XD, Adobe Photoshop",
    img: uxDesign,
    details:
      "We as a group started with brain stroming by putting some posted notes on 'Miro board' and seleted a random product and then develop the complete UX Design for that product by using Adobe XD ",
  },
];
export default projectData;
