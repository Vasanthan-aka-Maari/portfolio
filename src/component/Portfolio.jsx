import React from "react";
import food from "../images/food.jpg";
import fortnite from "../images/fortnite-app.jpg";
import landingpage from "../images/landingpage.jpg";
import netflix from "../images/netflixlogo.jpg";
import todo from "../images/todo.jpg";
import weather from "../images/weather.jpg";

function Portfolio() {
  return (
    <div className="card-container">
      <h1 className="title">Some of my Works</h1>

      <div className="card">
        <div className="card-hero">
          <img className="card-img" src={netflix} alt="netflix clone" />
          <div className="card-links">
            <a
              className="card-link"
              href="https://github.com/Vasanthan-aka-Maari/Netflx-Clone"
              target="_blank"
            >
              <i class="fab fa-github">
                <span> GitHub</span>
              </i>
            </a>
            <a
              className="card-link"
              href="https://vasanthan-aka-maari.github.io/Netflx-Clone/"
              target="_blank"
            >
              <i class="fas fa-eye">
                <span> Website</span>
              </i>
            </a>
          </div>
        </div>
        <div className="card-info">
          <h1 className="card-title">Netflix Clone</h1>
          <p className="card-text">
            Netflix clone is a very fascinating project. It uses react-movies
            and youtube npm packages to show movies trailers. It has a feature
            to show movies trailers.
            <br />
            <p className="card-skills">
              <span>Technology used: </span> Reactjs, JavaScript
            </p>
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-hero">
          <img
            className="card-img"
            src={landingpage}
            alt="product landing page"
          />
          <div className="card-links">
            <a
              className="card-link"
              href="https://github.com/Vasanthan-aka-Maari/react-product-landing-page"
              target="_blank"
            >
              <i class="fab fa-github">
                <span> GitHub</span>
              </i>
            </a>
            <a
              className="card-link"
              href="https://vasanthan-aka-maari.github.io/react-product-landing-page/#/"
              target="_blank"
            >
              <i class="fas fa-eye">
                <span> Website</span>
              </i>
            </a>
          </div>
        </div>
        <div className="card-info">
          <h1 className="card-title">Product Landing Page</h1>
          <p className="card-text">
            A premium looking product landing page with a great design. This
            application was developed with help of react-styledcomponent to
            style the page.
            <br />
            <p className="card-skills">
              <span>Technology used: </span> Reactjs, JavaScript
            </p>
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-hero">
          <img className="card-img" src={fortnite} alt="fortnite app" />
          <div className="card-links">
            <a
              className="card-link"
              href="https://github.com/Vasanthan-aka-Maari/fortnite-app"
              target="_blank"
            >
              <i class="fab fa-github">
                <span> GitHub</span>
              </i>
            </a>
            <a
              className="card-link"
              href="https://vasanthan-aka-maari.github.io/fortnite-app/"
              target="_blank"
            >
              <i class="fas fa-eye">
                <span> Website</span>
              </i>
            </a>
          </div>
        </div>
        <div className="card-info">
          <h1 className="card-title">Fortnite App</h1>
          <p className="card-text">
            This app shows the latest updates of Fortnite game using it's API.
            This was very fun to build and I really enjoyed building it.
            <br />
            <p className="card-skills">
              <span>Technology used: </span> Reactjs, JavaScript
            </p>
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-hero">
          <img className="card-img" src={todo} alt="todo app" />
          <div className="card-links">
            <a
              className="card-link"
              href="https://github.com/Vasanthan-aka-Maari/Todo-app/"
              target="_blank"
            >
              <i class="fab fa-github">
                <span> GitHub</span>
              </i>
            </a>
            <a
              className="card-link"
              href="https://vasanthan-aka-maari.github.io/Todo-app/"
              target="_blank"
            >
              <i class="fas fa-eye">
                <span> Website</span>
              </i>
            </a>
          </div>
        </div>
        <div className="card-info">
          <h1 className="card-title">Todo App</h1>
          <p className="card-text">
            An amazing app to list down your daily TODOs. This has a simple UI
            where user can add delete their todos.
            <br />
            <p className="card-skills">
              <span>Technology used: </span> HTML, CSS, JavaScript
            </p>
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-hero">
          <img className="card-img" src={weather} alt="weather app" />
          <div className="card-links">
            <a
              className="card-link"
              href="https://github.com/Vasanthan-aka-Maari/Weather_App"
              target="_blank"
            >
              <i class="fab fa-github">
                <span> GitHub</span>
              </i>
            </a>
            <a
              className="card-link"
              href="https://vasanthan-aka-maari.github.io/Weather_App/"
              target="_blank"
            >
              <i class="fas fa-eye">
                <span> Website</span>
              </i>
            </a>
          </div>
        </div>
        <div className="card-info">
          <h1 className="card-title">Weather App</h1>
          <p className="card-text">
            This app shows the weather condition of the place which user can
            search for. This app uses an API to get the real time weather.
            <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              {" "}
              (please view it in mobile screen size)
            </span>
            <br />
            <p className="card-skills">
              <span>Technology used: </span> Reactjs, JavaScript
            </p>
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-hero">
          <img className="card-img" src={food} alt="food recipe app" />
          <div className="card-links">
            <a
              className="card-link"
              href="https://github.com/Vasanthan-aka-Maari/Food-Recipe-App/"
              target="_blank"
            >
              <i class="fab fa-github">
                <span> GitHub</span>
              </i>
            </a>
            <a
              className="card-link"
              href="https://vasanthan-aka-maari.github.io/Food-Recipe-App/"
              target="_blank"
            >
              <i class="fas fa-eye">
                <span> Website</span>
              </i>
            </a>
          </div>
        </div>
        <div className="card-info">
          <h1 className="card-title">Food App</h1>
          <p className="card-text">
            Food Recipe app displays food recipe and some additional
            informations on user's query for a food. This serves the details by
            using an API.
            <br />
            <p className="card-skills">
              <span>Technology used: </span> Reactjs, JavaScript
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
