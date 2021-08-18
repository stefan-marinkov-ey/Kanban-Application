import React, { useEffect, useState } from "react";
import Button from "../../reusableComponents/Button";
import { logout, useAuthDispatch, useAuthState } from "../../../Context";
import { themes } from "../../../Context/actions";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { getBoard } from "../../../utility/constantsKeysAndUrl";
import { HeaderStyle } from "../../styleComponents/Container/Header_style";
import { logoutBtn, welcome } from "../../../utility/constantsText";
const Header = (props) => {
  const [boardName, setBoardName] = useState("");

  const user = useAuthState();
  const theme = useAuthState();
  const [lightText, setLightText] = useState(false);
  const [themeColor, setThemeColor] = useState("Dark Mode");
  const dispatch = useAuthDispatch();

  const changeLabel = () => {
    themes(dispatch, themeColor);
    setLightText(!lightText);
    setThemeColor(!lightText ? "Light Mode" : "Dark Mode");
  };

  const handleLogout = () => {
    logout(dispatch);
    props.history.push(`/login`);
  };

  useEffect(() => {
    async function getBoardName() {
      let response = await httpRequest(getBoard);
      setBoardName(response.responseData.data.name);
    }
    getBoardName();
  }, []);

  return (
    <HeaderStyle>
      <div className="headerButtons">
        <Button
          className="themeButton"
          label={theme.themeToggle === "Dark Mode" ? "Light Mode" : "Dark Mode"}
          type="button"
          onClick={changeLabel}
        />
        <Button
          className="logoutButton"
          label={logoutBtn}
          onClick={handleLogout}
        />
      </div>
      <div>
        <h2>{boardName}</h2>
        <div>
          <p>
            {welcome}
            <br /> {user.user}
          </p>

          <img src={user.picture} />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
