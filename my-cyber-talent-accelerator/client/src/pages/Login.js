import { element } from "prop-types";
import React, { useState, useEffect } from "react";
import BottomPartOfPage from "../components/footer";

function LoginPage() {
  const [id, setID] = useState("");
  const [visitors, setVisitors] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/visitors", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setVisitors(result.message))
      .catch((err) => console.log("error"));
  }, []);
  const checkLoginDetails = () => {
    const arr = [];
    visitors.forEach((element) => {
      if (element.email === email) {
        arr.push(element);
      }
    });
    if (arr.length === 0) {
      alert("User does not exist");
      return 0;
    } else {
      if (arr[0].password === password) {
        alert("logging in");
        window.location.href = "/Profile:1";
        return 0;
      } else {
        alert("Password is incorrect");
        return 0;
      }
    }
  };
  const handleChange1 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange2 = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    checkLoginDetails();
  };
  return (
    <div className="w-100 bg-white h-50">
      <div class="flex">
        <div className="w-50 vh-75 bg-light-gray br3 ma1 pt6">
          {/* <h1>User ID: {visitors}</h1> */}
          <div className="w-75 h4 center">
            <h2>Sign into MiCyber Talent Accelerator</h2>
          </div>
          <form
            method="post"
            className="w-75 h5 center tc"
            onSubmit={handleSubmit}
          >
            <br></br>
            <label>
              email:
              <br></br>
              <input
                type="text"
                className="ba pa2 mb2 db w-100"
                onChange={handleChange1}
                required
              />
            </label>
            <br></br>
            <label>
              Password:
              <br></br>
              <input
                className="ba pa2 mb3 db w-100"
                type="password"
                onChange={handleChange2}
                required
              />
              <br></br>
            </label>
            <input className="bg-light-red white pt2" type="submit" />
          </form>
          <br></br>
          <div className="w-100 pt4 h3 center">
            <hr></hr>
            <p className="tc">
              Dont have an account? <a href="">Register here</a>
            </p>
          </div>
        </div>
        <div className="w-50 vh-75 br3 bg-gray ma1"></div>
      </div>
      <BottomPartOfPage />
    </div>
  );
}

export default LoginPage;
