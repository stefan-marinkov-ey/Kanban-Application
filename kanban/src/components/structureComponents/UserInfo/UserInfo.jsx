import React from "react";
import { welcome } from "../../../utility/constantsText";
import { StyleUserInfo } from "./StyleUserInfo.style";

const UserInfo = ({ nameBoard, user, picture }) => {
  return (
    <StyleUserInfo>
      <div className="nameOfBoard">
        <h3>{nameBoard}</h3>
      </div>
      <div className="userData">
        <p>
          {welcome}
          <br /> {user}
        </p>
        <img src={picture} alt={user} />
      </div>
    </StyleUserInfo>
  );
};

export default UserInfo;
