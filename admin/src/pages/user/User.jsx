import { Link } from "react-router-dom";
import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  FileUpload,
} from "@mui/icons-material";
import "./user.css";

export default function User() {
  //İmage file preview function
  const loadFile = (event) => {
    event.preventDefault();
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  return (
    <div className="userPage">
      <div className="userPageContainer">
        <h1 className="userContainerTitle">Edit User</h1>
        <Link to="/createUser">
          <button className="userAddButton">Create User</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="" alt="" className="userShowImg" />
            <div className="useShowTopTitle">
              <span className="userShowFullname">Full Name</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowInfoHeading">Account Details</span>

            <div className="userShowInfo">
              <PermIdentity className="userShowInfoIcon" />
              <span className="userShowInfoTitle">User Name</span>
            </div>

            <span className="userShowInfoHeading">Contact Details</span>

            <div className="userShowInfo">
              <MailOutline className="userShowInfoIcon" />
              <span className="userShowInfoTitle">Email Address</span>
            </div>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowInfoIcon" />
              <span className="userShowInfoTitle">"0 000 000 00 00"</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowInfoIcon" />
              <span className="userShowInfoTitle">"No Adress Detail"</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateHeading">Edit</span>
          <form id="editForm" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" name="email" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" name="phone" className="userUpdateInput" />
              </div>

              <div className="userUpdateItem">
                <label>Adress</label>
                <input type="text" name="adress" className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="" alt="" id="output" className="userUpdateImg" />
                <label htmlFor="img">
                  <FileUpload className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="img"
                  onChange={loadFile}
                  style={{ display: "none" }}
                />
              </div>
              <button type="submit" className="userUpdateButton">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
