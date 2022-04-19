import { Link } from "react-router-dom";
export default function BusinessDashBoard() {
  const redirectToJobPost = () => {
    window.location.href = "/job-post";
  }
  return (
    <div className="w-100 h-100 bg-light-gray">
      <nav className="w-100 bg-white h3 br2 tc ma1 shadow-2">
        <ul>
          <li>
            <button className="bg-light-red w4 br3 h2 mr2 white" onClick={redirectToJobPost}>Post Service</button>
          </li>
          <li className="left">
            <p className="w-100">MiCyber Talent Accelerator</p>
          </li>
        </ul>
      </nav>
      {/* <br></br> */}
      <div class="flex w-95 center h-100">
        <div class="w-25 br3 bg-white h-100">
          <div className="w-100 center tc br3 bg-gray picture-div">
            <img className="pic mt1" src="https://www.logopik.com/wp-content/uploads/edd/2018/11/Free-Business-Company-Logo-Design-And-Download.png" alt=""></img>
            <h3>Business Name</h3>
            <h4>Business@Gmail.com</h4>
          </div>
        </div>
        <div class="w-75 h-100 bg-light-gray">
          <div className="w-100 h-25">

          </div>
          <div class="flex w-100 h-75">
            <div class=" w-70 h-75 br3 ml2 bg-white">

            </div>
            <div class=" w-25 ml3 h-75 br3 bg-white">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
