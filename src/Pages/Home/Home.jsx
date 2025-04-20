import ContactIcon from "../../Shared/ContactIcon";
import Banner from "./Banner";
import Experience from "./Experience ";

import Project from "./Project";
import Skills from "./Skills";
import {  Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home</title>
      </Helmet>
            <Banner></Banner>
            <Experience></Experience>
            <Skills></Skills>
            <Project></Project>
            <ContactIcon></ContactIcon>
       
          
        </div>
    );
};

export default Home;