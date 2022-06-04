import React from 'react';
// IMPORT COMPONENTS
import Main from "../_components/Main";
import MainFeaturedPost from "../_components/MainFeaturedPost";
// IMPORT MD


const mainFeaturedPostConf = {
    title: "My taste",
    description: "And my life.",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "",
  };
const Habit = ()=>{
    return(
        <React.Fragment>
            <MainFeaturedPost post={mainFeaturedPostConf}/>
            <Main title="Movie"></Main>
            <Main title="Music"></Main>
            <Main title="Workout"></Main>

        </React.Fragment>
    )
};

export default Habit