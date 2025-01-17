import React, { useEffect } from "react";
import "./Homepage.css";
import HomeHero from "../../Components/HomeHero/HomeHero";
import HeroTicketBooking from "../../Components/HeroTicketBooking/HeroTicketBooking";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import PartnerAirline from "../../Components/PartnerAirlines/PartnerAirline";

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="">
      <HomeHero />
      <HeroTicketBooking />
      <WhyChooseUs />
      <PartnerAirline />
    </div>
  );
};

export default HomePage;
