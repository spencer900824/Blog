import React from "react";
import MainFeaturedPost from "./_components/MainFeaturedPost";
import Main from './_components/Main';

import skill from "./skill.md"

const mainFeaturedPost = {
    title: "Skill",
    description: "What I'm capable of.",
    image: "https://www.scu.edu/media/institutional-pages/news-amp-events/binarycode760x480.jpg",
    imageText: "main image description",
    linkText: "",
  };

const Skill = () => {
  return (
  <div>
      <MainFeaturedPost post={mainFeaturedPost}/>
      <Main title="" posts={[skill]}/>
  </div>
  );
};

export default Skill;
