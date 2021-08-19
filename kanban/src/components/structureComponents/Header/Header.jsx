import React, { useEffect, useState } from "react";
import Button from "../../reusableComponents/Button";
import { logout, useAuthDispatch, useAuthState } from "../../../Context";
import { themes } from "../../../Context/actions";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { getBoard } from "../../../utility/constantsKeysAndUrl";
import { HeaderStyle } from "../../styleComponents/Container/Header_style";
import {
  darkMode,
  lightMode,
  logoutBtn,
  welcome,
} from "../../../utility/constantsText";
import { loginRoute } from "../../../utility/constantsWithRoutesAndMethods";
const Header = (props) => {
  const [boardName, setBoardName] = useState("");

  const user = useAuthState();
  const theme = useAuthState();
  const [lightText, setLightText] = useState(false);
  const [themeColor, setThemeColor] = useState(`${darkMode}`);
  const dispatch = useAuthDispatch();

  const changeLabel = () => {
    themes(dispatch, themeColor);
    setLightText(!lightText);
    setThemeColor(!lightText ? `${lightMode}` : `${darkMode}`);
  };

  const handleLogout = () => {
    logout(dispatch);
    props.history.push(`${loginRoute}`);
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
          label={
            theme.themeToggle === `${darkMode}` ? `${lightMode}` : `${darkMode}`
          }
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
