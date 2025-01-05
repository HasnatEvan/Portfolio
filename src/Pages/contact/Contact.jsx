import { div } from "framer-motion/client";
import ContactFrom from "./ContactFrom";
import ContactCard from "./ContactCard";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <ContactCard></ContactCard>
      <ContactFrom></ContactFrom>
    </div>
  );
};

export default Contact;
