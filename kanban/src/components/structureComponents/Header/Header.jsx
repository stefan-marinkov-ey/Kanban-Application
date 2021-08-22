import React, { useCallback, useEffect, useState } from "react";
import Button from "../../reusableComponents/Button";
import { getBoardData, logoutAction, themes } from "../../../Context/actions";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { getBoard } from "../../../utility/constantsKeysAndUrl";
import { HeaderStyle } from "../../styleComponents/Container/Header_style";
import { darkMode, lightMode, logoutBtn } from "../../../utility/constantsText";
import { loginRoute } from "../../../utility/constantsWithRoutesAndMethods";
import { useManageContext } from "../../../Context/context";
import UserInfo from "../UserInfo";
const Header = (props) => {
  const { state, dispatch } = useManageContext();
  const { user, picture, nameBoard } = state;
  const [lightText, setLightText] = useState(false);
  const [themeColor, setThemeColor] = useState(`${darkMode}`);

  const changeLabel = () => {
    themes(dispatch, themeColor);
    setLightText(!lightText);
    setThemeColor(!lightText ? `${lightMode}` : `${darkMode}`);
  };

  const handleLogout = () => {
    logoutAction(dispatch);
    props.history.push(`${loginRoute}`);
  };

  const getBoardName = useCallback(async () => {
    try {
      let response = await httpRequest(getBoard);
      getBoardData(dispatch, {
        name: "nameBoard",
        value: response.responseData.data.name,
      });
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: "Something goes wrong",
      });
    }
  }, [dispatch]);

  useEffect(() => {
    getBoardName();
  }, [getBoardName]);

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
      <UserInfo user={user} picture={picture} nameBoard={nameBoard} />
    </HeaderStyle>
  );
};

export default Header;
