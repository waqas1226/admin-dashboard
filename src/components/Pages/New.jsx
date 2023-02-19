import React, { useState } from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";
import pic from "../../../src/pic.jpg";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NaveBar/Nav";
import { DriveFolderUpload } from "@mui/icons-material";

const New = ({inputs, title}) => {
  const [question, setQuestion] = useState("");

  return (
    <div className="new">
      <SideBar />
      <div className="newcontainer">
        <NavBar />
        <div className="newtop">{title}
        </div>

        <div className="newbottom">
          <div className="newleft">
            <img className="newimg" src={pic} alt="dsa" />
            <div className="nupload">
                <label htmlFor="file">
                  <DriveFolderUpload />
                </label>
                <input id="file" type="file" />
              </div>
          </div>

          <div className="newright">
            <form>
              
{inputs.map(input=>
              <div className="inputdiv" key={input.id}>
                <label htmlFor="in1">{input.label}</label>
                <input type={input.type} className="inputcell" placeholder={input.placeholder} />
              </div>
                )}
             
            </form>
            <div className="nsubmitdiv ">
              <button className="nfsubmit">Send</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
