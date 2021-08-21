import React from "react";
import { welcome } from "../../../utility/constantsText";

const UserInfo = ({ nameBoard, user, picture }) => {
  return (
    <div>
      <h2>{nameBoard}</h2>
      <div>
        <p>
          {welcome}
          <br /> {user}
        </p>
        <img src={picture} alt={user} />
      </div>
    </div>
  );
};

export default UserInfo;
