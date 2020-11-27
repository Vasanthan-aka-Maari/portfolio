import amazon from "../images/amazon.jpg";
import landingpage from "../images/landingpage.jpg";
import netflix from "../images/netflixlogo.jpg";
import covidtracker from "../images/covid-tracker.jpg";
import instagram from "../images/instagram-clone.jpg";

export const projects = [
  {
    id: 3,
    title: "Instagram Clone",
    image: instagram,
    info:
      "This social media application allows to you to post a image, add a comment, create a user.",
    github: "https://github.com/Vasanthan-aka-Maari/Instagram-clone",
    website: "https://my-own-instagram-ceb49.web.app/",
    technology: "Reactjs, JavaScript, Firebase",
  },
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
    id: 4,
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
];
