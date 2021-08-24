import React, { useState } from "react";
import { logoutAction, themes } from "../../../Context/actions";
import { useManageContext } from "../../../Context/context";
import { darkMode, lightMode, logoutBtn } from "../../../utility/constantsText";
import { loginRoute } from "../../../utility/constantsWithRoutesAndMethods";
import Button from "../../reusableComponents/Button";
import { StyleHeaderButtons } from "./StyleHeaderButtons.style";

const HeaderButtons = (props) => {
  const { state, dispatch } = useManageContext();
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
  return (
    <StyleHeaderButtons>
      <Button
        className="themeButton"
        label={
          state.themeToggle === `${darkMode}` ? `${lightMode}` : `${darkMode}`
        }
        type="button"
        onClick={changeLabel}
      />
      <Button
        className="logoutButton"
        label={logoutBtn}
        onClick={handleLogout}
      />
    </StyleHeaderButtons>
  );
};

export default HeaderButtons;
