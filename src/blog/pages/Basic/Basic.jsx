import React from "react";
import Grid from "@mui/material/Grid";
import Main from "./_components/Main";
import Sidebar from "./_components/Sidebar";
import MainFeaturedPost from "./_components/MainFeaturedPost";

import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

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
    title: "Currently doing",
    description:
    "I'm a college student attending National Chengchi University, major in Computer Science.",
    social: [
      { name: "GitHub", icon: GitHubIcon, link: "https://github.com/spencer900824"},
      { name: "Facebook", icon: FacebookIcon, link: "https://www.facebook.com/profile.php?id=100003046419982"},
      {name: "Instagram", icon: InstagramIcon, limk: "https://www.instagram.com/5_up_n/" },
    ],
  };

const Basic = (props) => {
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
export default Basic;
