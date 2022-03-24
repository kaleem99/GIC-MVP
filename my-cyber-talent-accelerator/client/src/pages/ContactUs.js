import BottomPartOfPage from "../components/footer";
export default function ContactPage() {
  return (
    <div className="w-100 h-75">
      <div class="flex flex-column h-100 bg-light-gray">
        <div class=" w-100 h4 mr2">
          <img
            className="w-100 h5"
            src="https://www.onlinecoursereport.com/wp-content/uploads/2020/04/shutterstock_617737619-1024x553.jpg"
          ></img>
        </div>
        <div class=" w-90 h-75 center">
          <div class="flex h-100">
            <div class=" w-25 pa3 mr2 bg-gray br3 mt3"></div>
            <div class=" w-75 h-100 pa3 br3 bg-white mt3">
              <div className="h4 w-80 center">
                <h3>Drop Us a Line</h3>
                <p>
                  If you have a query to ask, or have questions in your mind
                  feel free to send us an email using this form. Our team will
                  be getting back to you soon.
                </p>
              </div>
              <br></br>
              <form className="w-80 h-75 center">
                <div className="inputBlock">
                  <label>
                    First Name:
                    <input type="text" name="FirstName" />
                  </label>
                </div>
                <div className="inputBlock">
                  <label>
                    Last Name:
                    <input type="text" name="lastName" />
                  </label>
                </div>
                <br></br>
                <br></br>
                <div className="inputBlock">
                  <label>
                    Your email:
                    <input type="email" name="email" />
                  </label>
                </div>
                <div className="inputBlock">
                  <label>
                    Contact number:
                    <input type="number" name="number" />
                  </label>
                </div>
                <br></br>
                <br></br>
                <label>
                  Contact number:
                  <input type="message" name="message" />
                </label>
                <input className="mt2 bg-light-red w-25 br2" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <BottomPartOfPage />
    </div>
  );
}
