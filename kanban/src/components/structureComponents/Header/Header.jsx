import React, { useCallback, useEffect } from "react";
import { getBoardData } from "../../../Context/actions";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { getBoard } from "../../../utility/constantsKeysAndUrl";
import { StyleHeader } from "./Header.style.jsx";
import { useManageContext } from "../../../Context/context";
import UserInfo from "../UserInfo";
import HeaderButtons from "../HeaderButtons/HeaderButtons";
import { errorResponse } from "../../../utility/constantsText";
const Header = (props) => {
  const { state, dispatch } = useManageContext();
  const { user, picture, nameBoard, errorMessage } = state;

  const getBoardName = useCallback(async () => {
    try {
      let response = await httpRequest(getBoard);

      getBoardData(dispatch, {
        name: "nameBoard",
        value: response.responseData.data[0].name,
      });
      getBoardData(dispatch, {
        name: "idBoard",
        value: response.responseData.data[0].id,
      });
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: errorResponse,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    getBoardName();
  }, [getBoardName]);
  const errorMessageForDisplay = errorMessage ? <h2>{errorMessage}</h2> : null;

  return (
    <StyleHeader>
      {errorMessageForDisplay}
      <HeaderButtons {...props} />
      <UserInfo user={user} picture={picture} nameBoard={nameBoard} />
    </StyleHeader>
  );
};

export default Header;
