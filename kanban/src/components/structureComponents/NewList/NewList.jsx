import React, { useState } from "react";
import InputField from "../../reusableComponents/InputField/InputField";
import Button from "../../reusableComponents/Button/Button";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  addBtn,
  cancelBtn,
  creatingNewList,
  errorResponse,
} from "../../../utility/constantsText";
import { useManageContext } from "../../../Context";
import { getBoardData, refreshEffect } from "../../../Context/actions";
import { StyleNewList } from "./NewList.style.jsx";

const NewList = ({ toggle }) => {
  const { state, dispatch } = useManageContext();
  const { refresh } = state;
  const [listName, setListName] = useState("");

  const handleChange = async (e) => {
    let value = e.target.value;
    setListName(value);
  };

  const handleListName = async () => {
    try {
      await toggle();

      const res = await httpRequest({
        method: "post",
        url: `${baseTrelloUrl}lists?key=${apiKey}&token=${apiToken}&name=${listName}&idBoard=61152cf60660483f28f5ffda`,
      });
      if (res) refreshEffect(dispatch, !refresh);
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: errorResponse,
      });
    }
  };
  const handleCancelEdit = () => {
    setListName("");
    toggle();
  };
  return (
    <StyleNewList>
      <div className="middleDiv">
        <div className="titleAndCancel">
          <h3>{creatingNewList}</h3>
        </div>
        <InputField onChange={handleChange} value={listName} />
      </div>
      <div className="addEndClose">
        <Button label={addBtn} onClick={handleListName} />
        <Button label={cancelBtn} onClick={handleCancelEdit} />
      </div>
    </StyleNewList>
  );
};

export default NewList;
