import React from "react";
import "./WhyChooseUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaThumbsUp } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import images from "../../Constants/images";

const WhyChooseUs = () => {
  return (
    <div className="container-fluid whychoosmain my-5 py-5">
      <div className="innnerdiv pb-4">
        <h1>Why Choose Us</h1>
      </div>
      <div className="d-flex text-center justify-content-center pb-5">
        <p className="col-lg-8 whychoseuppara">
          Choose us for your flight booking needs and enjoy unbeatable prices, a
          wide selection of flights, and a hassle-free booking experience. With
          secure payment options and 24/7 customer support, we ensure that your
          journey begins smoothly. Plus, our exclusive offers and flexible
          travel options give you the peace of mind to travel with confidence.
          Trusted by thousands of satisfied customers.
        </p>
      </div>
      <div className="container">
        <div className="row ok align-items-center gap-4 gap-md-0">
          <div
            className="col-md-4 col-lg-3 p-4 carddiv"
            style={{
              backgroundImage: `url(${images.window})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
              color: "white",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% transparency
                zIndex: 1,
              }}
            ></div>

            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className="icondiv">
                <FaThumbsUp size={30} />
              </div>
              <div className="hdingdiv">Best Price Guarantee</div>
              <div className="txtdiv">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt laborum repellendus dolorum possimus officia est soluta
                quis, id perferendis odit.
              </div>
            </div>
          </div>

          <div
            className="col-md-4 col-lg-3 p-3 carddiv"
            style={{
              backgroundImage: `url(${images.window})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
              color: "white",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% transparency
                zIndex: 1,
              }}
            ></div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className="icondiv">
                <IoTicketSharp size={30} />
              </div>
              <div className="hdingdiv">Easy & Quick Booking</div>
              <div className="txtdiv">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt laborum repellendus dolorum possimus officia est soluta
                quis, id perferendis odit.
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-3 p-3 carddiv"
            style={{
              backgroundImage: `url(${images.window})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
              color: "white",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% transparency
                zIndex: 1,
              }}
            ></div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className="icondiv">
                <RiCustomerService2Fill size={30} />
              </div>
              <div className="hdingdiv">Customer Care 24/7</div>
              <div className="txtdiv">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt laborum repellendus dolorum possimus officia est soluta
                quis, id perferendis odit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
