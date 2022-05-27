import React, { useState, useEffect } from "react";

export default function UserProfileDashBoard() {
  const [user, setUser] = useState([]);
  const [student, setStudent] = useState([]);
  const ID = window.location.href.split(":")[3];
  useEffect(() => {
    FetchGetRequest();
  }, []);

  const FetchGetRequest = () => {
    fetch("http://localhost:5000/user-profile:id", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => getUser(result, ID))
      .catch((err) => console.log(err));
  };
  const getUser = (result, id) => {
    setUser(result.userProfile[id-1]);
    setStudent(result.studentProfile[id-1]);
    return true;
  }
  return (
    <div className="w-100 h-100 bg-light-gray">
      <nav className="w-100 bg-white h3 br2 tc ma1 shadow-2">
        <ul>
          <li className="left">
            <p className="w-100">MiCyber Talent Accelerator</p>
          </li>
          <li>
            <button className="bg-light-red mr3 mt2 br3 h2" onClick={window.location.href="/"}>HomePage</button>
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
            <h3>{student.profilename}</h3>
            <h4>{user.email}</h4>
          </div>
        </div>
        <div class="w-75 h-100 bg-gray pa3">
          <div className="w-100 h-25"></div>
          <div class="flex w-100 h-75">
            <div class=" w-70 h-100 br3 ml2 bg-white">
           
            </div>
            <div class=" w-25 ml3 h-100 br3 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
