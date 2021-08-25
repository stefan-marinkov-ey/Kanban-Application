import React, { useEffect, useRef, useState } from "react";
import { useManageContext } from "../../../Context";
import { getBoardData, refreshEffect } from "../../../Context/actions";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import { addBtn, errorResponse } from "../../../utility/constantsText";
import Button from "../../reusableComponents/Button";
import InputField from "../../reusableComponents/InputField/InputField";
import { StyleListTitle } from "./ListTitle.style.jsx";

const ListTitle = ({ listId, listName }) => {
  const ref = useRef();
  const { state, dispatch } = useManageContext();
  const { refresh } = state;
  const [listTitle, setListTitle] = useState(false);
  const [newListName, setListName] = useState(listName || "");

  const handleListName = (e) => {
    let value = e.target.value;
    setListName(value);
  };

  const handleListTitle = async () => {
    try {
      await httpRequest({
        method: "put",
        url: `${baseTrelloUrl}lists/${listId}?key=${apiKey}&token=${apiToken}`,
        data: {
          name: newListName,
        },
      });
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: errorResponse,
      });
    }

    refreshEffect(dispatch, !refresh);
    setListTitle(!listTitle);
    setListName(newListName);
  };

  const showListTitle = listTitle ? (
    <div className="titleChange" ref={ref}>
      <InputField onChange={handleListName} value={newListName} />
      <Button label={addBtn} onMouseDown={handleListTitle} />
    </div>
  ) : (
    <h4 onClick={handleListTitle}>{newListName}</h4>
  );

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (listTitle && ref.current && !ref.current.contains(e.target)) {
        setListTitle(false);
        setListName(listName);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [listTitle, listName]);

  return <StyleListTitle>{showListTitle}</StyleListTitle>;
};

export default ListTitle;
