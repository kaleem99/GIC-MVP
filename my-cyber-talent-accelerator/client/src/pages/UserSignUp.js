import React, { useState, useEffect } from "react";
import BottomPartOfPage from "../components/footer";

function SignUp() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    FetchGetRequest();
  }, []);

  const FetchGetRequest = () => {
    fetch("http://localhost:5000/api", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setData(result.message))
      .catch((err) => console.log("error"));
  };

  const FetchPostRequest = () => {
    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password1: password1,
        password2: password2,
      }),
    })
      .then((res) => res.json())
      .then((result) => setData(JSON.stringify(result.message)))
      .catch((err) => console.log("error"));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      if (password1 !== password2) {
        alert("password does not match");
        return 0;
      }
      if (password1.length < 8 || !password1.match(/[a-z0-9]/gi)) {
        alert(
          "Password should be greater than 8 characters and should contain numbers and alphabets"
        );
        return 0;
      }
      if (data.includes(email)) {
        alert("account already exists");
        return 0;
      } else {
        alert(
          "Your account has been created successfully pls proceed to the login page"
        );
      }
      FetchPostRequest();
      window.location.href = "/";
    }, 1500);
  };

  const handleChange1 = (event) => {
    setName(event.target.value);
  };
  const handleChange2 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange3 = (event) => {
    setPassword1(event.target.value);
  };
  const handleChange4 = (event) => {
    setPassword2(event.target.value);
  };

  return (
    <div className="h-75 w-100 bg-white">
      {/* <h3>DATA: {email}</h3> */}
      <div class="flex">
        <div className="w-50 h-75 bg-light-gray br3 pt2 ma1">
          <div className="w-75 h3 center">
            <h2>Register With Us Students</h2>
            <p>
              Create a new account with us and start applying to some of the
              most trusted companies.
            </p>
          </div>
          <form
            method="post"
            className="w-75 center tc"
            onSubmit={handleSubmit}
          >
            <br></br>
            <label>
              Enter your name:
              <br></br>
              <input
                className="ba pa2 mb1 db w-100"
                type="text"
                value={name}
                onChange={handleChange1}
                required
              />
            </label>
            <br></br>
            <label>
              email:
              <br></br>
              <input
                className="ba pa2 mb1 db w-100"
                type="text"
                value={email}
                onChange={handleChange2}
                required
              />
            </label>
            <br></br>
            <label>
              Password:
              <br></br>
              <input
                className="ba pa2 mb1 db w-100"
                type="password"
                value={password1}
                onChange={handleChange3}
                required
              />
            </label>
            <br></br>
            <label>
              Confirm Password:
              <br></br>
              <input
                className="ba pa2 mb3 db w-100"
                type="password"
                value={password2}
                onChange={handleChange4}
                required
              />
              <br></br>
            </label>
            <input className="bg-light-red white pt2" type="submit" />
          </form>
          <br></br>
          <div className="vw-100 pt4 h4 center bg-light-gray">
            <hr></hr>
            <p className="tc">
              Already have an account? <a href="/log-in">Login here</a>
              <p></p>
              Business account sign up <a href="/business-sign-up">Sign Up</a>
            </p>
          </div>
        </div>
        <div className="w-50 vh-75 bg-gray ma1 br3">
        </div>
      </div>
      <BottomPartOfPage />
    </div>
  );
}

export default SignUp;
