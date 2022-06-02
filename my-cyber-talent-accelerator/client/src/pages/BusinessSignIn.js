import BottomPartOfPage from "../components/footer";
import React, { useState } from "react";
// import { json } from "body-parser";

export default function SignInComBus() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChange1 = (event) => {
    setUsername(event.target.value);
  };
  const handleChange2 = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    PostLoginDetails();
  };
  const PostLoginDetails = () => {
    fetch("http://localhost:5000/Business-Sign-In", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data === "Correct") {
          window.location.href = `/Business-Profile:${result.id}`;
        } else {
          alert("Incorrect UserName or Password");
        }
      })
      .catch((err) => console.log("error"));
  };

  return (
    <div className="bg-light-gray w-100 h-100">
      <div class="flex">
        <div className="w-50 h-75 bg-light-gray br3 ma1 pt3">
          {/* <h3>User ID: {id}</h3> */}
          <div className="w-75 h3 center">
            <h2>Sign into MiCyber Talent Accelerator Business Account</h2>
          </div>
          <form
            method="post"
            className="w-75 h5 center tc mt2"
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
              Dont have a Business account?{" "}
              <a href="/business-sign-up">Register here</a>
            </p>
          </div>
        </div>
        <div className="w-50 vh-75 br3 bg-gray ma1"></div>
      </div>
      <BottomPartOfPage />
    </div>
  );
}
