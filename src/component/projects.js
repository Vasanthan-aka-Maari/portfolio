import food from "../images/food.jpg";
import amazon from "../images/amazon.jpg";
import fortnite from "../images/fortnite-app.jpg";
import landingpage from "../images/landingpage.jpg";
import netflix from "../images/netflixlogo.jpg";
import todo from "../images/todo.jpg";
import weather from "../images/weather.jpg";
import bookList from "../images/booklist.jpg";

export const projects = [
  {
    id: 1,
    title: "Amazon Clone",
    image: amazon,
    info:
      "This is an amazon clone which has ability to authenticate and store products using context api. This uses firebase in the backend.",
    github: "https://github.com/Vasanthan-aka-Maari/amazon-clone",
    website: "https://clone-782c9.web.app/#/",
    technology: "Reactjs, JavaScript, context-api, firebase",
  },
  {
    id: 2,
    title: "Netflix Clone",
    image: netflix,
    info:
      "Netflix clone is a very fascinating project. It uses react-moviesand youtube npm packages to show movies trailers. It has a featureto show movies trailers.",
    github: "https://github.com/Vasanthan-aka-Maari/Netflx-Clone",
    website: "https://vasanthan-aka-maari.github.io/Netflx-Clone/",
    technology: "Reactjs, JavaScript, API",
  },
  {
    id: 3,
    title: "Landing Page",
    image: landingpage,
    info:
      "A premium looking product landing page with a great design. This application was developed with help of react-styledcomponent to style the page.",
    github: "https://github.com/Vasanthan-aka-Maari/react-product-landing-page",
    website:
      "https://vasanthan-aka-maari.github.io/react-product-landing-page/#/",
    technology: "Reactjs, JavaScript, Styled components",
  },
  {
    id: 4,
    title: "Fortnite App",
    image: fortnite,
    info:
      "This app shows the latest updates of Fortnite game using it's API. This was very fun to build and I really enjoyed building it.",
    github: "https://github.com/Vasanthan-aka-Maari/fortnite-app",
    website: "https://vasanthan-aka-maari.github.io/fortnite-app/",
    technology: "Reactjs, JavaScript, API",
  },
  {
    id: 5,
    title: "Todo List",
    image: todo,
    info:
      "An amazing app to list down your daily TODOs. This has a simple UI where user can add delete their todos.",
    github: "https://github.com/Vasanthan-aka-Maari/Todo-app/",
    website: "https://vasanthan-aka-maari.github.io/Todo-app/",
    technology: "Reactjs, JavaScript",
  },
  {
    id: 6,
    title: "Weather App",
    image: weather,
    info:
      "This app shows the weather condition of the place which user can search for. This app uses an API to get the real time weather.(view on mobile screen)",
    github: "https://github.com/Vasanthan-aka-Maari/Weather_App",
    website: "https://vasanthan-aka-maari.github.io/Weather_App/",
    technology: "Reactjs, JavaScript, API",
  },
  {
    id: 7,
    title: "Food Recipe App",
    image: food,
    info:
      "Food Recipe app displays food recipe and some additional informations on user's query for a food. This serves the details by using an API.",
    github: "https://github.com/Vasanthan-aka-Maari/Food-Recipe-App/",
    website: "https://vasanthan-aka-maari.github.io/Food-Recipe-App/",
    technology: "Reactjs, JavaScript, API",
  },
  {
    id: 9,
    title: "Book App",
    image: bookList,
    info:
      "Book List is a best app to list the books that you want to read. This application uses local storage to store your book list.",
    github: "https://github.com/Vasanthan-aka-Maari/Book-List",
    website: "https://vasanthan-aka-maari.github.io/Book-List/",
    technology: "Reactjs, JavaScript, LocalStorage",
  },
];
