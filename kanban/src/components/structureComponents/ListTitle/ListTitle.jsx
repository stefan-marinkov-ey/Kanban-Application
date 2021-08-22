import React, { useState } from "react";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import { addBtn } from "../../../utility/constantsText";
import Button from "../../reusableComponents/Button";
import InputField from "../../reusableComponents/Input/InputField";

const ListTitle = ({ listId, listName, refreshCard, setRefreshCard }) => {
  const [listTitle, setListTitle] = useState(false);
  const [newListName, setListName] = useState(listName || "");

  const handleListName = async (e) => {
    let value = e.target.value;
    setListName(value);
  };

  const handleTitleOnBlur = () => {
    setListTitle(!listTitle);
    setListName(listName);
    setRefreshCard(!refreshCard);
  };
  const handleListTitle = async () => {
    await handleTitleOnBlur();

    await httpRequest({
      method: "put",
      url: `${baseTrelloUrl}lists/${listId}?key=${apiKey}&token=${apiToken}`,
      data: {
        name: newListName,
      },
    });

    setRefreshCard(!refreshCard);
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

  return <div>{showListTitle}</div>;
};

export default ListTitle;
