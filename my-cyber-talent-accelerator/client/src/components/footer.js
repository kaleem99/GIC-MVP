import React from "react";
export default function BottomPartOfPage() {
  return (
    <div className="">
      <div class="flex h-50 w-100 tc">
        <div class="ml2 w-25 h5 mt5 mr2">
          <h2>Company Logo</h2>
          <p>Random company Text that needs to be changed</p>
          <p>Random company Text that needs to be changed</p>
        </div>
        <div class="w-25 h5 mt5 mr2">
          <h3>Job Locations</h3>
          <p>Michigan</p>
          <p>North Carolina</p>
          <p>Boston</p>
          <p>New York</p>
          <p>California</p>
        </div>
        <div class="w-25 h5 mt5 mr2">
          <h3>Sub Heading</h3>
          <p>More Text</p>
          <p>More Text</p>
          <p>More Text</p>
          <p>More Text</p>
        </div>
        <div class="w-25 h5 mt5 mr2">
          <h3>Navigation</h3>
          <a href="/">
            <p>Home Page</p>
          </a>
          <a href="/sign-up">
            {" "}
            <p>Registration Page</p>
          </a>
          <a href="/log-in">
            <p>Sign In Page</p>
          </a>
          <a href="/contact-us">Contact Us</a>
          <a href="/Student-grid">
            <p>View All Students</p>
          </a>
        </div>
      </div>
      <div className="w-100 h3 bg-dark-gray mt0 br3"></div>
    </div>
  );
}
