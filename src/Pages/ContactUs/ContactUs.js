import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PathHero from "../../Components/PathHeroComponent/PathHero";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [num, setNumber] = useState("");
  const [sub, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact | Airline Booking</title>
      </Helmet>

      <PathHero name={"Contact Us"} />
      <section className="container shadow formcont p-4">
        <div className="row align-items-center justify-content-center z-3">
          <div className="col-12 col-lg-8 text-center mb-3">
            <p className="fw-bold fs-4">
              Please Fill Out This Form and We Will Reach You Out{" "}
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center gap-3 gap-lg-2 mb-3">
          <div className="col-lg-5">
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="inputdtails w-100 text-start p-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-lg-5">
            <input
              type="text"
              value={email}
              placeholder="Email"
              className="inputdtails w-100 text-start p-3"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
        </div>
        <div className="row align-items-center justify-content-center gap-3 gap-lg-2 mb-3">
          <div className="col-lg-5">
            <input
              type="text"
              value={num}
              placeholder="Mobile Number"
              className="inputdtails w-100 text-start p-3"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="col-lg-5">
            <input
              type="text"
              value={sub}
              placeholder="Subject"
              className="inputdtails w-100 text-start p-3"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>
        <div className="row align-items-center justify-content-center gap-2 mb-3">
          <div className="col-12 col-lg-10">
            <textarea
              value={message}
              rows={7}
              type="text"
              placeholder="Message"
              className="inputdtails w-100 text-start p-3"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5"></div>
          <div className="col-lg-5 d-flex justify-content-end">
            <div className="sendbtndiv">
              <div className="divvv">Send Message</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container shadow mapcont mt-4">
        <div className="row justify-content-between align-items-center ">
          <div className="col-12 col-lg-6">
            <div className="row align-items-center justify-content-center">
              <div className="col-3 d-flex justify-content-center">
                <div className="rounded-circle roundgod">
                  <HiBuildingOffice2 size={30} color="#fff" />
                </div>
              </div>
              <div className="col-7 d-flex flex-column">
                <div className="fs-5 fw-semibold">Address</div>
                <div className="fs-6 fw-normal">
                  <p>
                    Shop 4, Dalwani Building, Subhash Road, next to Hotel
                    Everland, Moti Tanki Chowk, Sadar, Rajkot, Gujarat 360001
                  </p>
                </div>
              </div>
            </div>
            <div className="row my-4 align-items-center justify-content-center">
              <div className="col-3 d-flex justify-content-center">
                <div className="rounded-circle roundgod">
                  <FaPhone size={25} color="#fff" />
                </div>
              </div>
              <div className="col-7 d-flex flex-column">
                <div className="fs-5 fw-semibold">Phone Number</div>
                <div className="fs-6 fw-normal">
                  <p>98795 99994</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-3 d-flex justify-content-center">
                <div className="rounded-circle roundgod">
                  <SiGmail size={25} color="#fff" />
                </div>
              </div>
              <div className="col-7 d-flex flex-column">
                <div className="fs-5 fw-semibold">Email</div>
                <div className="fs-6 fw-normal">
                  <p>
                    Shop 4, Dalwani Building, Subhash Road, next to Hotel
                    Everland, Moti Tanki Chowk, Sadar, Rajkot, Gujarat 360001
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9008049270838!2d70.79508527482197!3d22.294805935620136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca1c0eebd313%3A0x15fe516307641f4e!2sEagle%20Connect%20Novex!5e1!3m2!1sen!2sin!4v1737114573618!5m2!1sen!2sin"
              width={"100%"}
              className="mapview"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
