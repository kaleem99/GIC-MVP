import { Link } from "react-router-dom";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF"];
export default function BusinessDashBoard() {
  const redirectToJobPost = () => {
    window.location.href = "/job-post";
  };
  const [file, setFile] = useState("bmw.png");
  const handleChange = (file) => {
    setFile(file[0].name);
    console.log(file[0].name);
  };
  return (
    <div className="w-100 h-100 bg-light-gray">
      <nav className="w-100 bg-white h3 br2 tc ma1 shadow-2">
        <ul>
          <li>
            <button
              className="bg-light-red w4 br3 h2 mr2 white"
              onClick={redirectToJobPost}
            >
              Post Service
            </button>
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
            <img
              className="pic mt1"
              src="https://www.logopik.com/wp-content/uploads/edd/2018/11/Free-Business-Company-Logo-Design-And-Download.png"
              alt=""
            ></img>
            <h3>Business Name</h3>
            <h4>Business@Gmail.com</h4>
            <br></br>
            <h1>Hello To Drag & Drop Files</h1>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p>
              {file ? `File name: ${file}` : "no files uploaded yet"}
            </p>
            <img src={!file ? require(`../images/${file}`) : "https://image.shutterstock.com/image-vector/add-image-icon-editable-vector-260nw-1692684598.jpg"} height="200" width="200" />
          </div>
        </div>
        <div class="w-75 h-100 bg-light-gray">
          <div className="w-100 h-25"></div>
          <div class="flex w-100 h-75">
            <div class=" w-70 h-75 br3 ml2 bg-white"></div>
            <div class=" w-25 ml3 h-75 br3 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
