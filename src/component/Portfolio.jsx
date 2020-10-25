import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import food from "../images/food.jpg";
import fortnite from "../images/fortnite-app.jpg";
import landingpage from "../images/landingpage.jpg";
import netflix from "../images/netflixlogo.jpg";
import todo from "../images/todo.jpg";
import weather from "../images/weather.jpg";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  button: {
    background: "black",
    color: "white",
    "&:hover": {
      background: "#f56c5d",
    },
  },
  text: {
    color: "#222",
  },
  topMargin: {
    marginTop: 30,
  },
});

function Portfolio() {
  const classes = useStyles();
  return (
    <Container className={classes.topMargin} maxWidth="md">
      <h1 className="title">Some of my Works</h1>
      <Grid
        className="grid-container"
        alignItems="center"
        justify="space-around"
        spacing={10}
        container
      >
        <Grid item className="grid-item" spacing={4}>
          <Card className={`${classes.root} card`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Netflix Clone"
                height="140"
                image={netflix}
                title="Netflix Clone"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Netflix Clone
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.text}
                  component="p"
                >
                  Netflix clone is a very fascinating project. It uses{" "}
                  <b>REACT</b>, react-movies and youtube packages to show movies
                  trailers.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://vasanthan-aka-maari.github.io/Netflx-Clone/"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  website
                </Button>
              </a>
              <a
                href="https://github.com/Vasanthan-aka-Maari/Netflx-Clone/"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  github
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item className="grid-item" spacing={4}>
          <Card className={`${classes.root} card`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Food Recipe App"
                height="140"
                image={food}
                title="Food Recipe App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Food Recipe App
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.text}
                  component="p"
                >
                  This app basically shows the recipes on your search using an
                  API. I have developed this application using <b>REACTjs</b>.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://vasanthan-aka-maari.github.io/Food-Recipe-App/"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  website
                </Button>
              </a>
              <a
                href="https://github.com/Vasanthan-aka-Maari/Food-Recipe-App"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  github
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item className="grid-item" spacing={4}>
          <Card className={`${classes.root} card`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Landing Page"
                height="140"
                image={landingpage}
                title="Landing Page"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Landing Page
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.text}
                  component="p"
                >
                  A premium looking product landing page with a great design.
                  This application was built with <b>REACTjs</b> and
                  styledcomponent.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://vasanthan-aka-maari.github.io/react-product-landing-page/"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  website
                </Button>
              </a>
              <a
                href="https://github.com/Vasanthan-aka-Maari/react-product-landing-page"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  github
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item className="grid-item" spacing={4}>
          <Card className={`${classes.root} card`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Fornite Updates"
                height="140"
                image={fortnite}
                title="Fornite Updates"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fornite Updates
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.text}
                  component="p"
                >
                  This app shows the latest updates of Fortnite game using it's
                  API. I have used <b>REACTjs</b> to develop this application.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://vasanthan-aka-maari.github.io/fortnite-app/"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  website
                </Button>
              </a>
              <a
                href="https://github.com/Vasanthan-aka-Maari/fortnite-app/"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  github
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid item className="grid-item" spacing={4}>
          <Card className={`${classes.root} card`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Todo App"
                height="140"
                image={todo}
                title="Todo App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Todo App
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.text}
                  component="p"
                >
                  An amazing app to list down your daily TODOs. This app is
                  built using <b>HTML, CSS and JAVASCRIPT</b>.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://vasanthan-aka-maari.github.io/Todo-app/"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  website
                </Button>
              </a>
              <a
                href="https://github.com/Vasanthan-aka-Maari/Todo-app"
                target="_blank"
              >
                <Button className={classes.button} size="small" color="primary">
                  github
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item className="grid-item" spacing={4}>
          <Card className={`${classes.root} card`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Weather App"
                height="140"
                image={weather}
                title="Weather App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Weather App
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.text}
                  component="p"
                >
                  This is a Weather forecast app, which shows weather condition
                  of a place by using an API. Built with <b>REACTjs</b>.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="https://vasanthan-aka-maari.github.io/Weather_App/">
                <Button className={classes.button} size="small" color="primary">
                  website
                </Button>
              </a>
              <a href="https://github.com/Vasanthan-aka-Maari/Weather_App">
                <Button className={classes.button} size="small" color="primary">
                  github
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Portfolio;
