import React, { useState } from "react";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import {
  addBtn,
  cancelBtn,
  cardTitle,
  newCardPlaceholder,
} from "../../../utility/constantsText";
import Button from "../../reusableComponents/Button";

const SetNewCard = ({ listId, refreshCard, setRefreshCard }) => {
  const [newCardName, setNewCardName] = useState("");
  const [showField, setShowField] = useState(false);

  const handleNewCardName = (e) => {
    const value = e.target.value;
    setNewCardName(value);
  };

  const handleCancel = () => {
    setNewCardName("");
    setShowField(!showField);
  };

  const handleShowTex = () => {
    setShowField(!showField);
  };

  const handleAddCart = async () => {
    await httpRequest({
      method: "post",
      url: `${baseTrelloUrl}/cards?key=${apiKey}&token=${apiToken}&idList=${listId}&name=${newCardName}`,
    });
    setShowField(!showField);
    setRefreshCard(!refreshCard);
  };

  const getAddBtn = () =>
    newCardName && <Button label={addBtn} onClick={handleAddCart} />;
  return showField ? (
    <div className="cardField">
      <textarea
        placeholder={newCardPlaceholder}
        onChange={handleNewCardName}
      ></textarea>
      <div>
        {getAddBtn()}
        <Button label={cancelBtn} onClick={handleCancel} />
      </div>
    </div>
  ) : (
    <Button label={`${addBtn}${cardTitle}`} onClick={handleShowTex}></Button>
  );
};

export default SetNewCard;
