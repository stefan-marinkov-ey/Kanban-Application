import React, { useState } from "react";
import { useManageContext } from "../../../Context";
import { getBoardData, refreshEffect } from "../../../Context/actions";
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
import { StyleSetNewCard } from "./StyleSetNewCard.style";

const SetNewCard = ({ listId }) => {
  const { state, dispatch } = useManageContext();
  const { refresh } = state;
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
    try {
      await httpRequest({
        method: "post",
        url: `${baseTrelloUrl}/cards?key=${apiKey}&token=${apiToken}&idList=${listId}&name=${newCardName}`,
      });
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: "Something goes wrong",
      });
    }

    setShowField(!showField);
    refreshEffect(dispatch, !refresh);
  };

  const getAddBtn = newCardName && (
    <Button label={addBtn} onClick={handleAddCart} />
  );
  const showHideField = showField ? (
    <div className="cardField">
      <textarea
        placeholder={newCardPlaceholder}
        onChange={handleNewCardName}
      ></textarea>
      <div className="btnTextField">
        {getAddBtn}
        <Button label={cancelBtn} onClick={handleCancel} />
      </div>
    </div>
  ) : (
    <Button label={`${addBtn}${cardTitle}`} onClick={handleShowTex} />
  );

  return <StyleSetNewCard>{showHideField}</StyleSetNewCard>;
};

export default SetNewCard;
