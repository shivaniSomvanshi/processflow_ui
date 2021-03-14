import React from "react";
import "./Card.css";
import Radio from "@material-ui/core/Radio";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function Card(props) {
  return (
    <div>
      <section>
        <div className="wrapper">
          <h3>START EVENT</h3>
          <div className="rightSide">
            <div className="row">
              <div>
                <Radio className="radio_icon"></Radio>
                <span className="radio_text">Case Initiation</span>
              </div>
              <div>
                <p>USER</p>
              </div>
            </div>
            {/* ------------------------------------ */}
            <div className="row">
              <div className="flag">
                <p>
                  <a>
                    Employee <span>X</span>
                  </a>
                </p>
              </div>
              <div className="clipText">
                <AttachFileIcon className="pinIcon"></AttachFileIcon>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
