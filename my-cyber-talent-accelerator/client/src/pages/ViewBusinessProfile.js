import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import BottomPartOfPage from "../components/footer";
const fileTypes = ["JPEG", "PNG", "GIF"];
export default function ViewBusinessProfile() {
  const [data, setData] = useState("");
  const redirectToJobPost = () => {
    window.location.href = "/job-post";
  };
  useEffect(() => {
    FetchGetRequest();
  }, []);
  const FetchGetRequest = () => {
    fetch("http://localhost:5000/View-Business-Profile:id", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setData(result.businessData))
      .catch((err) => console.log("error"));
  };
  return (
    <div className="w-100 h-100 bg-light-gray">
      <nav className="w-100 bg-white h3 br2 tc ma1 shadow-2">
        <ul>
          <li></li>
          <li className="left">
            <h2 className="w-100">Methiteia</h2>
          </li>
        </ul>
      </nav>
      {/* <br></br> */}
      <div class="flex w-95 center h-100">
        <div class="w-25 br3 bg-white h-100">
          <div className="w-75 center tc br3 bg-gray picture-div">
            <img
              className="pic mt1"
              src="https://media.istockphoto.com/vectors/profile-icon-man-icon-with-circle-shape-on-gray-background-vector-id1033334196?k=20&m=1033334196&s=170667a&w=0&h=z_ScYNeV7wCaID9R53k4NmufO9f1e14WRyziDOaY2mE="
              alt=""
            ></img>
          </div>
          <div className="tc center">
            <br></br>
          </div>
        </div>
        <div class="w-75 h-100 bg-gray pa3">
          <div className="w-100 h-25"></div>
          <div class="flex w-100 h-75">
            <div class=" w-80 h-100 br3 ml6 bg-white">
              <div className="w-100 br1 bg-light-gray h4 pl3">
                <h1>{"Name Of The Organization"}</h1>
                <h3>{"location"}</h3>
              </div>
              <div className="w-75 bg-light-gray h-75 pl3">
                <h3>About Us</h3>
                <h3>Who We Are</h3>
                <p>
                  The organization overview in a nonprofit job description
                  shares key descriptors of the organization. It should include
                  information that will help interested external candidates
                  better assess their fit with the organization and better
                  understand the organization's goals and beneficiaries. It
                  should include information that will help interested external
                  candidates better assess their fit with the organization and
                  better understand the organization's goals and beneficiaries.
                </p>
                <div className="w-75 h5 bg-light-blue"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomPartOfPage />
    </div>
  );
}
