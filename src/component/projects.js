import amazon from "../images/amazon.jpg";
import landingpage from "../images/landingpage.jpg";
import netflix from "../images/netflixlogo.jpg";
import todo from "../images/todo.jpg";
import weather from "../images/weather.jpg";
import covidtracker from "../images/covid-tracker.jpg";

export const projects = [
  {
    id: 1,
    title: "Covid-19 Tracker",
    image: covidtracker,
    info:
      "This is an COVID-19 Tracker application. This uses an API at the backend to provide valuable information about corona virus worldwide.",
    github: "https://github.com/Vasanthan-aka-Maari/covid-tracker",
    website: "https://corona-tracker-2f5a7.web.app/",
    technology: "Reactjs, JavaScript, API, firebase",
  },
  {
    id: 2,
    title: "Amazon Clone",
    image: amazon,
    info:
      "This is an amazon clone which has ability to authenticate and store products using context api. This uses firebase in the backend.",
    github: "https://github.com/Vasanthan-aka-Maari/amazon-clone",
    website: "https://clone-782c9.web.app/#/",
    technology: "Reactjs, JavaScript, context-api, firebase",
  },
  {
    id: 6,
    title: "Todo App",
    image: todo,
    info:
      "This Todo app uses firestore to store todos in realtime. This application has CRUD functionality and a simple UI.",
    github: "https://github.com/Vasanthan-aka-Maari/Todo-app-firebase-",
    website: "https://todo-app-9cc3c.web.app/",
    technology: "Reactjs, JavaScript, Firebase",
  },
  {
    id: 3,
    title: "Netflix Clone",
    image: netflix,
    info:
      "Netflix clone is a very fascinating project. It uses react-moviesand youtube npm packages to show movies trailers. It has a featureto show movies trailers.",
    github: "https://github.com/Vasanthan-aka-Maari/Netflx-Clone",
    website: "https://vasanthan-aka-maari.github.io/Netflx-Clone/",
    technology: "Reactjs, JavaScript, API",
  },
  {
    id: 4,
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
    id: 7,
    title: "Weather App",
    image: weather,
    info:
      "This app shows the weather condition of the place which user can search for. This app uses an API to get the real time weather.",
    github: "https://github.com/Vasanthan-aka-Maari/weather-app",
    website: "https://vasanthan-aka-maari.github.io/weather-app/",
    technology: "Reactjs, JavaScript, API",
  },
];
