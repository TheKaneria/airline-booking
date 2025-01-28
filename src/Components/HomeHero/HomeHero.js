import React from "react";
import "./Homehero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../Constants/images";

const HomeHero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="containerr container">
      <div className="vector-image d-none d-xxl-block">
        <svg xmlns width="1414" height="319" viewBox="0 0 1414 319" fill="none">
          <path
            className="path"
            d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5"
            stroke="#ECECF2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-dasharray="round"
          ></path>
          <path
            className="dashed"
            d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5"
            stroke="#212627"
            stroke-width="4"
            stroke-linecap="round"
            stroke-dasharray="22 22"
          ></path>
        </svg>
        {/* <div className="location-image">
          <img src={images.location} alt="" />
        </div> */}
      </div>
      <div className="row gap-4 gap-lg-0 align-items-center justify-content-center">
        <div className="col-12 col-lg-5 leftside">
          <div className="content-block">
            <h1 className="heroleftsidetext">
              <span>Book</span> Your Dream <span>Flights</span> Now!
            </h1>
            <p className="mt-3 col-lg-10">
              Book your dream flights now and turn your travel aspirations into
              reality! Whether you're planning a relaxing getaway, an
              adventurous trip, or a visit to loved ones, we have the perfect
              options tailored just for you.
            </p>

            <button
              className="herobookbtn"
              onClick={() => handleScroll("#bookingcont")}
            >
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="col-12 col-md-7 imgsec">
          <img src={images.Plane} className="planeimg" alt="Aeroplane image" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
