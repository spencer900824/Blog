import React from "react";
import Grid from "@mui/material/Grid";
import Main from "../_components/Main";
import Sidebar from "../_components/Sidebar";
import MainFeaturedPost from "../_components/MainFeaturedPost";

import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import post1 from "./posts/blog-post.1.md";


const mainFeaturedPost = {
  title: "Hi I'm Shawn",
  description: "You can get to know me through this blog.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "",
};

const posts = [post1];

const sidebar = {
    title: "About",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    archives: [
      { title: "March 2020", url: "#" },
      { title: "February 2020", url: "#" },
      { title: "January 2020", url: "#" },
      { title: "November 1999", url: "#" },
      { title: "October 1999", url: "#" },
      { title: "September 1999", url: "#" },
      { title: "August 1999", url: "#" },
      { title: "July 1999", url: "#" },
      { title: "June 1999", url: "#" },
      { title: "May 1999", url: "#" },
      { title: "April 1999", url: "#" },
    ],
    social: [
      { name: "GitHub", icon: GitHubIcon },
      { name: "Twitter", icon: TwitterIcon },
      { name: "Facebook", icon: FacebookIcon },
    ],
  };

const Home = (props) => {
  return (
    <React.Fragment>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="Posts" posts={posts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </main>
    </React.Fragment>
  );
};
export default Home;
