import React, { useEffect } from "react";
import "./ContactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PathHero from "../../Components/PathHeroComponent/PathHero";

const ContactUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <PathHero name={"Contact Us"} />;
};

export default ContactUs;
