import React, { useCallback, useEffect } from "react";
import { getBoardData } from "../../../Context/actions";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { getBoard } from "../../../utility/constantsKeysAndUrl";
import { StyleHeader } from "./Header.style.jsx";
import { useManageContext } from "../../../Context/context";
import UserInfo from "../UserInfo";
import HeaderButtons from "../HeaderButtons/HeaderButtons";
const Header = (props) => {
  const { state, dispatch } = useManageContext();
  const { user, picture, nameBoard } = state;

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
    <StyleHeader>
      <HeaderButtons {...props} />
      <UserInfo user={user} picture={picture} nameBoard={nameBoard} />
    </StyleHeader>
  );
};

export default Header;
