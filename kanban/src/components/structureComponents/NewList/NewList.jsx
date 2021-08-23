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
  deleteX,
} from "../../../utility/constantsText";
import { useManageContext } from "../../../Context";
import { getBoardData, refreshEffect } from "../../../Context/actions";

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
      await httpRequest({
        method: `post`,
        url: `${baseTrelloUrl}lists?key=${apiKey}&token=${apiToken}&name=${listName}&idBoard=61152cf60660483f28f5ffda`,
      });
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: "Something goes wrong",
      });
    }

    refreshEffect(dispatch, !refresh);
    toggle();
  };
  const handleCancelEdit = () => {
    setListName("");
    toggle();
  };
  return (
    <div className="modalContent">
      <div className="newListContent">
        <div>
          <div className="middleDiv">
            <div className="titleAndCancel">
              <h5>{creatingNewList}</h5>
              <Button
                className="cancelX"
                label={deleteX}
                onClick={handleCancelEdit}
              />
            </div>
            <InputField onChange={handleChange} value={listName} />
          </div>
          <div className="addEndClose">
            <Button label={addBtn} onClick={handleListName} />
            <Button label={cancelBtn} onClick={handleCancelEdit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewList;
