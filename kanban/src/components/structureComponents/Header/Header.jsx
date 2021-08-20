import React, { useEffect, useState } from "react";
import Button from "../../reusableComponents/Button";
import { getBoardData, themes } from "../../../Context/actions";
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
import { useManageContext } from "../../../Context/context";
const Header = (props) => {
  const { state, dispatch } = useManageContext();
  const { logout, user, picture, nameBoard } = state;
  const [lightText, setLightText] = useState(false);
  const [themeColor, setThemeColor] = useState(`${darkMode}`);

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

      getBoardData(dispatch, {
        name: "nameBoard",
        value: response.responseData.data.name,
      });
    }
    getBoardName();
  }, [dispatch]);

  return (
    <HeaderStyle>
      <div className="headerButtons">
        <Button
          className="themeButton"
          label={
            state.user.themeToggle === `${darkMode}`
              ? `${lightMode}`
              : `${darkMode}`
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
        <h2>{nameBoard}</h2>
        <div>
          <p>
            {welcome}
            <br /> {user}
          </p>

          <img src={picture} alt={state.user.user} />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
