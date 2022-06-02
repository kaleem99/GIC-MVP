import "./App.css";
import React from 'react'
import HomePage from "./pages/Home";
import SignUp from "./pages/UserSignUp";
import LoginPage from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/UserProfile";
import Layout from "./pages/layout";
import ContactPage from "./pages/ContactUs";
import BusinessDashBoard from "./pages/BusinessDashBoard";
import UserProfileDashBoard from "./pages/UserDashBoard";
import StudentGridPage from "./pages/StudentGrid";
import PostAJob from "./pages/PostJob";
import BusinessSignUp from "./pages/BusinessSignUp";
import StudentProfileView from "./pages/studentProfilePage";
import SignInComBus from "./pages/BusinessSignIn";
import BusinessGridPage from "./pages/BusinessDashBoardGrid";
import ViewBusinessProfile from "./pages/ViewBusinessProfile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="Home-page" element={<HomePage />} />
            <Route path="log-in" element={<LoginPage />} />
            <Route path="contact-us" element={<ContactPage />}></Route>
            <Route path="Student-grid" element={<StudentGridPage />}></Route>
          </Route>
          <Route path="completeStudentProfile:id" element={<Profile />}></Route>
          <Route
            path="Business-Profile:id"
            element={<BusinessDashBoard />}
          ></Route>
          <Route
            path="user-Profile:id"
            element={<UserProfileDashBoard />}
          ></Route>
          <Route path="job-post" element={<PostAJob />}></Route>
          <Route path="business-sign-up" element={<BusinessSignUp />}></Route>
          <Route
            path="View-StudentProfile:id"
            element={<StudentProfileView />}
          ></Route>
          <Route
            path="Business-Sign-In"
            element={<SignInComBus />}
          ></Route>
          <Route
            path="Business-GridPage"
            element={<BusinessGridPage />}
          ></Route>
          <Route
            path="View-Business-Profile:id"
            element={<ViewBusinessProfile />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
