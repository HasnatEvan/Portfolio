import { Helmet } from "react-helmet-async";

import Education from "./Education";
import Hobbies from "./Hobbies";


const AboutMe = () => {
    return (
        <div>
            <Helmet>
                <title>About Me</title>
            </Helmet>
            <div>

                <Education></Education>
         <Hobbies></Hobbies>
            </div>
        </div>
    );
};

export default AboutMe;