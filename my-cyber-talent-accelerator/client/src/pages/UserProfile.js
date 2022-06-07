import React, { useState, useEffect } from "react";
import { configuration } from "../configuration";
export default function Profile() {
  const ID = window.location.href.split(":")[3];
  const [Uname, setUName] = useState("");
  const [Pname, setPName] = useState("");
  const [location, setLocation] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [AboutYou, setAboutYou] = useState("");
  useEffect(() => {
    FetchGetRequest();
  }, []);
  const FetchGetRequest = () => {
    fetch(`http://localhost:${configuration.port}/completeStudentProfile:id`, {
      method: "GET",
    })
      .then((res) => res.json())
      // .then((result) => setData(result.data))
      .catch((err) => console.log("error"));
  };
  const FetchPostRequest = () => {
    fetch("http://localhost:5000/studentProfile:id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID: ID,
        Uname: Uname,
        Pname: Pname,
        location: location,
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
        AboutYou: AboutYou
      }),
    })
      .then((res) => res.json())
      // .then((result) => setData(JSON.stringify(result.message)))
      .catch((err) => console.log("error"));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    FetchPostRequest();
    window.location.href = "/";
  };
  const handleChange1 = (event) => {
    setUName(event.target.value)
  };
  const handleChange2 = (event) => {
    setPName(event.target.value)
  };
  const handleChange3 = (event) => {
    setLocation(event.target.value)
  };
  const handleChange4 = (event) => {
    setSkill1(event.target.value)
  };
  const handleChange5 = (event) => {
    setSkill2(event.target.value)
  };
  const handleChange6 = (event) => {
    setSkill3(event.target.value)
  };
  const handleChange7 = (event) => {
    setAboutYou(event.target.value)
  };
  return (
    <div className="w-100 h-100 bg-light-gray tc">
      <h1>Pls complete your student profile</h1>
      <form method="post" className="w-75 center tc" onSubmit={handleSubmit}>
        <br></br>
        <label>
          Your University Name
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
          Your Profile Name
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
          Your Location
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
           Skill 1
          <br></br>
          <input
            className="ba pa2 mb3 db w-100"
            type="text"
            // value="Required"
            onChange={handleChange4}
            required
          />
          <br></br>
        </label>
        <label>
           Skill 2
          <br></br>
          <input
            className="ba pa2 mb3 db w-100"
            type="text"
            // value="Not Required"
            onChange={handleChange5}
            // required
          />
          <br></br>
        </label>
        <label>
           Skill 3
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
            About You
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
