import { Helmet } from "react-helmet-async";
import Hobbies from "../Hobbies";
import Education from "./Education";


const AboutMe = () => {
    return (
        <div>
             <Helmet>
                    <title>About Me</title>
                  </Helmet>
            <Education></Education>
            <Hobbies></Hobbies>
        </div>
    );
};

export default AboutMe;