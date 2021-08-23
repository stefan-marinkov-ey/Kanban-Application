import React, { useState } from "react";
import { useManageContext } from "../../../Context";
import { getBoardData, refreshEffect } from "../../../Context/actions";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import { addBtn } from "../../../utility/constantsText";
import Button from "../../reusableComponents/Button";
import InputField from "../../reusableComponents/InputField/InputField";
import { StyleListTitle } from "./StyleListTitle";

const ListTitle = ({ listId, listName }) => {
  const { state, dispatch } = useManageContext();
  const { refresh } = state;
  const [listTitle, setListTitle] = useState(false);
  const [newListName, setListName] = useState(listName || "");

  const handleListName = (e) => {
    let value = e.target.value;
    setListName(value);
  };

  const handleTitleOnBlur = () => {
    setListTitle(!listTitle);
    setListName(listName);
    refreshEffect(dispatch, !refresh);
  };
  const handleListTitle = async () => {
    try {
      await Promise.all([
        handleTitleOnBlur(),
        httpRequest({
          method: "put",
          url: `${baseTrelloUrl}lists/${listId}?key=${apiKey}&token=${apiToken}`,
          data: {
            name: newListName,
          },
        }),
      ]);
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: "Something goes wrong",
      });
    }

    refreshEffect(dispatch, !refresh);
    setListTitle(!listTitle);
    setListName(newListName);
  };

  const showListTitle = !listTitle ? (
    <h4 onClick={handleListTitle}>{newListName}</h4>
  ) : (
    <div className="titleChange">
      <InputField
        onChange={handleListName}
        value={newListName}
        onBlur={handleTitleOnBlur}
      />
      <Button label={addBtn} onMouseDown={handleListTitle} />
    </div>
  );

  return <StyleListTitle>{showListTitle}</StyleListTitle>;
};

export default ListTitle;
