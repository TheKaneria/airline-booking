import React, { useState } from "react";
import "./TicketBookingDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../Constants/images";
import PathHero from "../../Components/PathHeroComponent/PathHero";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { Helmet } from "react-helmet";

const TicketBookingDetails = () => {
  const location = useLocation();

  const item = location.state?.item;
  const ttltraveller = location.state?.totaltraveller || 1;

  // console.log("ZK ", item);
  // console.log("KZ", ttltraveller);

  const animatedComponents = makeAnimated();

  const [travelers, setTravelers] = useState(
    Array.from({ length: ttltraveller }, () => ({
      fname: "",
      lname: "",
      email: "",
      number: "",
      gender: null,
    }))
  );
  const [check, setCheck] = useState(false);

  const togglecheck = () => {
    setCheck(!check);
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (index, field, value) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index][field] = value;
    setTravelers(updatedTravelers);
  };

  const handleGenderChange = (index, selectedOption) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index].gender = selectedOption;
    setTravelers(updatedTravelers);
  };

  const handleSubmit = () => {
    // Check if all fields are filled for each traveler
    for (let i = 0; i < travelers.length; i++) {
      const traveler = travelers[i];
      if (traveler.fname.trim() === "") {
        alert(`Please enter the First Name for Traveler ${i + 1}.`);
        return; // Stop further checks if a field is missing
      }
      if (traveler.lname.trim() === "") {
        alert(`Please enter the Last Name for Traveler ${i + 1}.`);
        return;
      }
      if (traveler.email.trim() === "") {
        alert(`Please enter the Email for Traveler ${i + 1}.`);
        return;
      }
      if (traveler.number.trim() === "") {
        alert(`Please enter the Phone Number for Traveler ${i + 1}.`);
        return;
      }
      if (traveler.gender === null) {
        alert(`Please select the Gender for Traveler ${i + 1}.`);
        return;
      }
    }

    // Check if the terms and conditions are accepted
    if (!check) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }

    // If all fields are filled, proceed with the form submission
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Helmet>
        <title>Booking</title>
      </Helmet>

      <PathHero name={"Flight Booking"} />

      <div className="container-fluid details-contt py-4">
        <div className="bg-cont">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7 order-2 order-lg-1">
              <div className="row mt-3">
                <div className="col-12">
                  <h2 className="fw-bold fs-4 fs-lg-3 text-white">
                    Enter Your Details
                  </h2>
                  <p className="text-white">
                    Enter required information for each traveler and be sure
                    that it exactly matches the government-issued ID presented
                    at the airport.
                  </p>
                </div>
              </div>
              <div className="row mt-4 gap-2 align-items-center">
                <div className="col-12 col-lg-4 d-flex gap-2 align-items-center ">
                  <h5 className="fw-bold fs-5 fs-lg-4 text-white">
                    Total Traveller(s) :{" "}
                  </h5>
                  <h5 className="fw-semibold text-white">{ttltraveller}</h5>
                </div>
              </div>
              {travelers.map((traveler, index) => (
                <div key={index} className="traveler-details mt-4">
                  <div className="row align-items-center gap-2 mt-3 mb-3">
                    <div className="col-md-5">
                      <h5 className="fs-5 text-white">Traveler {index + 1}</h5>
                    </div>
                    <div className="col-12 col-md-5">
                      <h4 className="fw-bold fs-5 text-white">Gender</h4>
                      <Select
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        isMulti={false}
                        options={genderOptions}
                        value={traveler.gender}
                        onChange={(selectedOption) =>
                          handleGenderChange(index, selectedOption)
                        }
                        styles={{
                          container: (provided) => ({
                            ...provided,
                            backgroundColor: "#fffbdb",
                            borderRadius: "10px",
                          }),
                          control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderRadius: "10px",
                          }),
                          menu: (provided) => ({
                            ...provided,
                            backgroundColor: "#fff",
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isFocused
                              ? "#dbb46b"
                              : "transparent",
                            color: state.isFocused ? "#fff" : "#000",
                          }),
                        }}
                      />
                    </div>
                  </div>
                  <div className="row gap-2">
                    <div className="col-12 col-md-5">
                      <h4 className="fw-bold fs-5 text-white">First Name</h4>
                      <input
                        type="text"
                        value={traveler.fname}
                        onChange={(e) =>
                          handleInputChange(index, "fname", e.target.value)
                        }
                        className="w-100 p-2  inpttticket"
                      />
                    </div>
                    <div className="col-12 col-md-5">
                      <h4 className="fw-bold fs-5 text-white">Last Name</h4>
                      <input
                        type="text"
                        value={traveler.lname}
                        onChange={(e) =>
                          handleInputChange(index, "lname", e.target.value)
                        }
                        className="w-100 p-2 inpttticket"
                      />
                    </div>
                  </div>

                  <div className="row gap-2 mt-3">
                    <div className="col-12 col-md-5">
                      <h4 className="fw-bold fs-5 text-white">Email</h4>
                      <input
                        type="email"
                        value={traveler.email}
                        onChange={(e) =>
                          handleInputChange(index, "email", e.target.value)
                        }
                        className="w-100 p-2 inpttticket"
                      />
                    </div>
                    <div className="col-12 col-md-5">
                      <h4 className="fw-bold fs-5 text-white">Phone Number</h4>
                      <input
                        type="text"
                        value={traveler.number}
                        maxLength={12}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, ""); // Keep only numbers
                          handleInputChange(index, "number", value);
                        }}
                        className="w-100 p-2 inpttticket"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="row justify-content-center my-3 my-lg-5">
                <div className="col-12  align-items-center justify-content-center d-flex">
                  <input
                    type="checkbox"
                    checked={check}
                    onChange={() => togglecheck()}
                  />
                  <div className="fw-bold text-white">
                    I agree with the Terms & Condition
                  </div>
                </div>
              </div>

              <div className="row px-3 px-lg-0 align-items-center justify-content-center">
                <div
                  className="col-2 btnn text-center sbmitbtn"
                  onClick={handleSubmit}
                >
                  SUBMIT
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 order-1 order-lg-2">
              <div className="row">
                <div className="col-12 pricee-tag">
                  <h2 className="fs-4 fs-lg-2">Your Booking Detail</h2>
                </div>
              </div>
              <div className="row border border-top-none">
                <div className="col-12 py-3 flight-box">
                  <div className="flight-departure">
                    <h5 className="text-white fs-6 fs-lg-5 fw-bold">
                      {item?.dep_time}
                    </h5>
                    <h5 className="text-white fs-6 fs-lg-5">
                      {item?.dep_airport_code}
                    </h5>
                  </div>
                  <div className="d-inline-flex column-gap-0 column-gap-lg-3 align-items-center">
                    <span className="d-inline-block text-white">From</span>
                    <div className="text-center">
                      <p className="text-white">
                        {item?.duration &&
                          `${item.duration.split(":")[0]}h ${
                            item.duration.split(":")[1]
                          }min`}
                      </p>
                      <img src={images.vimaan} alt="" />
                      <p className="text-white">{item?.no_of_stop} stop</p>
                    </div>
                    <span className="d-inline-block text-white">To</span>
                  </div>
                  <div className="flight-departure">
                    <h5 className="text-white fs-6 fs-lg-5 fw-bold">
                      {item?.arr_time}
                    </h5>
                    <h5 className="text-white fs-6 fs-lg-5">
                      {item?.arr_city_code}
                    </h5>
                  </div>
                </div>
                <div className="flight-box">
                  <div className="col-lg-5 d-flex flex-column ">
                    <div className="text-white align-self-center">
                      Departure
                    </div>
                    <div className="fw-bold fs-lg-5 text-white align-self-center">
                      {moment(item?.onward_date).format("D MMMM, YYYY")}
                    </div>
                  </div>
                  <div className="col-lg-1 lito"></div>
                  <div className="col-lg-5 d-flex flex-column ">
                    <div className="text-white align-self-center">Arrival</div>
                    <div className="fw-bold fs-lg-5 text-white align-self-center">
                      {moment(item?.arr_date).format("D MMMM, YYYY")}
                    </div>
                  </div>
                </div>
                <div className="flight-box">
                  <div className="col-10 align-self-center bottomlito"></div>
                </div>
                <div className="flight-box mb-3">
                  <div className="col-12 d-flex flex-column">
                    <div className="text-white"> - {item?.airline_name}</div>
                    {/* <div className="text-white">
                      - Operated by Feel Dubai Airlines
                    </div> */}
                    <div className="text-white"> - {item?.flight_number} </div>
                    {/* <div className="text-white">
                      - Adult(s): 25KG luggage free
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 pricee-tag">
                  <h2 className="fs-4 fs-lg-2">Price Summary</h2>
                </div>
                <div className="border">
                  <div className="row mt-3 w-100 ">
                    <div className="col-6 text-start text-white">Base Fare</div>
                    <div className="col-6 text-end text-white">
                      <span>&#8377;</span> {item?.price_breakup.base_fare}
                    </div>
                  </div>
                  <div className="row my-3 w-100 ">
                    <div className="col-6 text-start text-white">Discount</div>
                    <div className="col-6 text-end text-white">
                      <span>&#8377;</span> {item?.price_breakup.discount}
                    </div>
                  </div>
                  <div className="row my-3 w-100 ">
                    <div className="col-6 text-start text-white">
                      Taxes & Others
                    </div>
                    <div className="col-6 text-end text-white">
                      <span>&#8377;</span> {item?.price_breakup.fee_taxes}
                    </div>
                  </div>
                  <div className="row mb-3 w-100 ">
                    <div className="col-6 text-start text-white">
                      Service Fees
                    </div>
                    <div className="col-6 text-end text-white">
                      <span>&#8377;</span> {item?.price_breakup.service_charge}
                    </div>
                  </div>
                  <div className="bottomlito"></div>
                  <div className="row mb-3 w-100 ">
                    <div className="col-6 text-start fs-4 fw-bolder text-white">
                      Total
                    </div>
                    <div className="col-6 text-end text-white fw-bolder fs-4">
                      <span>&#8377;</span> {item?.total_payable_price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBookingDetails;
