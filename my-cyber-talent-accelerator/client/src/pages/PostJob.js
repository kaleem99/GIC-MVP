import React, { useState, useEffect } from "react";
import { configuration } from "../configuration";
export default function PostAJob() {
  const [jobTitle, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // handleChange1();
  }, []);

  const FetchPostRequest = () => {
    fetch(`http://localhost:${configuration.port}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobTitle: jobTitle,
        company: company,
        salary: salary,
        city: city,
        description: description,
      }),
    })
      .then((res) => res.json())
      // .then((result) => setData(JSON.stringify(result.message)))
      .catch((err) => console.log("error"));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      FetchPostRequest();
      alert("Job Posted")
      window.location.href = "/";
    }, 1500);
  };

  const handleChange1 = (event) => {
    setJob(event.target.value);
  };
  const handleChange2 = (event) => {
    setCompany(event.target.value);
  };
  const handleChange3 = (event) => {
    setSalary(event.target.value);
  };
  const handleChange4 = (event) => {
    setCity(event.target.value);
  };
  const handleChange5 = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div className="w-100 h-100 bg-light-gray">
      <div>
        <form method="post" className="w-50 center tc" onSubmit={handleSubmit}>
          <br></br>
          <label>
            Job Title:
            <br></br>
            <input
              className="ba pa2 mb1 db w-100"
              type="text"
              onChange={handleChange1}
              required
            />
          </label>
          <br></br>
          <label>
            Comapany:
            <br></br>
            <input
              className="ba pa2 mb1 db w-100"
              type="text"
              //   value={email}
              onChange={handleChange2}
              required
            />
          </label>
          <br></br>
          <label>
            Salary:
            <br></br>
            <input
              className="ba pa2 mb1 db w-100"
              type="number"
              //   value={password1}
              onChange={handleChange3}
              required
            />
          </label>
          <br></br>
          <label>
            City:
            <br></br>
            <input
              className="ba pa2 mb1 db w-100"
              type="text"
              onChange={handleChange4}
              required
            />
          </label>
          <br></br>
          <label>
            Description:
            <br></br>
            <input
              className="ba pa2 mb1 db w-100"
              type="text"
              onChange={handleChange5}
            />
          </label>
          <br></br>
          <input className="bg-light-red white pt2" type="submit" />
        </form>
      </div>
    </div>
  );
}
