import { element } from "prop-types";
import React, { useState, useEffect } from "react";
import BottomPartOfPage from "../components/footer";

function LoginPage() {
  const [id, setID] = useState("");
  const [visitors, setVisitors] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange1 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange2 = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    PostLoginDetails();
  };
  const PostLoginDetails = () => {
    fetch("http://localhost:5000/visitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setVisitors(JSON.stringify(result.message));
        setID(JSON.stringify(result.id));
        if (result.id === 0) {
          alert(result.message);
        } else {
          alert(result.message);
          if (result.message === "correct") {
            if(result.profileExist.length === 0){
              window.location.href = `/completeStudentProfile:${result.id}`;
            }
            else{
              window.location.href = `/user-Profile:${result.id}`;
            }
          }
        }
      })
      .catch((err) => console.log("error"));
  };

  return (
    <div className="w-100 bg-white h-50">
      <div class="flex">
        <div className="w-50 h-75 bg-light-gray br3 ma1 pt2">
          {/* <h3>User ID: {id}</h3> */}
          <div className="w-75 h4 center">
            <h2>Sign into Mathiteia</h2>
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
          {/* <br></br> */}
          <div className="w-100 pt1 h4 center bg-light-gray br3">
            <hr></hr>
            <p className="tc">
              Dont have an account? <a href="/sign-up">Register here</a>
            </p>
            <p className="tc">
              Business Account <a href="/Business-Sign-In">Sign In</a>
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
