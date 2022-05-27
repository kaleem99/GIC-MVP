import React, { useState, useEffect } from "react";

export default function BusinessSignUp() {
  const ID = window.location.href.split(":")[3];
  const [BusinessName, setBusinessName] = useState("");
  const [Pname, setPName] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [AboutCompany, setAboutCompany] = useState("");
  useEffect(() => {
    // FetchGetRequest();
  }, []);
  const FetchGetRequest = () => {
    fetch("http://localhost:5000/completeStudentProfile:id", {
      method: "GET",
    })
      .then((res) => res.json())
      // .then((result) => setData(result.data))
      .catch((err) => console.log("error"));
  };
  const FetchPostRequest = () => {
    fetch("http://localhost:5000/newCompanyBusiness", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID: ID,
        BusinessName: BusinessName,
        Pname: Pname,
        password: password,
        location: location,
        businessEmail: businessEmail,
        industry: industry,
        AboutCompany: AboutCompany
      }),
    })
      .then((res) => res.json())
      // .then((result) => setData(JSON.stringify(result.message)))
      .catch((err) => console.log("error"));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    FetchPostRequest();
    // window.location.href = "/";
  };
  const handleChange1 = (event) => {
    setBusinessName(event.target.value)
  };
  const handleChange2 = (event) => {
    setPName(event.target.value)
  };
  const handleChange3 = (event) => {
    setPassword(event.target.value)
  };
  const handleChange4 = (event) => {
    setLocation(event.target.value)
  };
  const handleChange5 = (event) => {
    setBusinessEmail(event.target.value)
  };
  const handleChange6 = (event) => {
    setIndustry(event.target.value)
  };
  const handleChange7 = (event) => {
    setAboutCompany(event.target.value)
  };
  return (
    <div className="w-100 h-100 bg-light-gray tc">
      <h1>Pls complete your Business profile</h1>
      <form method="post" className="w-75 center tc" onSubmit={handleSubmit}>
        <br></br>
        <label>
          Your Company/Business Name
          <br></br>
          <input
            className="ba pa2 mb1 db w-100"
            type="text"
            // value="Required"
            onChange={handleChange1}
            required
          />
        </label>
        <br></br>
        <label>
          Profile Name
          <br></br>
          <input
            className="ba pa2 mb1 db w-100"
            type="text"
            // value="Required"
            onChange={handleChange2}
            required
          />
        </label>
        <br></br>
        <label>
          Password
          <br></br>
          <input
            className="ba pa2 mb1 db w-100"
            type="text"
            // value="Required"
            onChange={handleChange3}
            required
          />
        </label>
        <br></br>
        <label>
          Your Location
          <br></br>
          <input
            className="ba pa2 mb1 db w-100"
            type="text"
            // value="Required"
            onChange={handleChange4}
            required
          />
        </label>
        <br></br>
        <label>
           Business Email
          <br></br>
          <input
            className="ba pa2 mb3 db w-100"
            type="text"
            // value="Required"
            onChange={handleChange5}
            required
          />
          <br></br>
        </label>
        <label>
           Industry
          <br></br>
          <input
            className="ba pa2 mb3 db w-100"
            type="text"
            // value="Not Required"
            onChange={handleChange6}
            // required
          />
          <br></br>
        </label>
        <label>
            About The Company/Business
          <br></br>
          <input
            className="ba pa2 mb3 db w-100 h4"
            type="text"
            // value={password2}
            onChange={handleChange7}
            required
          />
          <br></br>
        </label>
        <input className="bg-light-red white pt2" type="submit" />
      </form>
    </div>
  );
}
