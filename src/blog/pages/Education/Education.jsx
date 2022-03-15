import React from 'react';
import MainFeaturedPost from './_components/MainFeaturedPost';
import Main from './_components/Main';

import school from "./posts/school.md";

const mainFeaturedPost = {
    title: "Education",
    description: "Stay hungry stay foolish",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2190&q=80",
    imageText: "main image description",
    linkText: "",
  };

const schools = [school]

const Education = ()=>{
    return (
        <React.Fragment>
            <MainFeaturedPost post={mainFeaturedPost}/>
            <Main title="" posts={schools}/>
        </React.Fragment>
    )
};

export default Education