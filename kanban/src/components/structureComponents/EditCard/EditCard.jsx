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
  cardColorText,
  cardDescription,
  editCard,
  editCardName,
  editInput,
  nameForCard,
} from "../../../utility/constantsText";
import { getBoardData, refreshEffect } from "../../../Context/actions";
import { useManageContext } from "../../../Context";
import { StyleEdit } from "./StyleEdit.style";

const EditCard = ({ cardId, cardName, cardDesc, cardColor, toggle }) => {
  const { state, dispatch } = useManageContext();
  const { refresh } = state;
  const [cardEditName, setCardEditName] = useState(cardName || "");
  const [cardEditDescription, setCardEditDescription] = useState(
    cardDesc || ""
  );
  const [cardEditColor, setCardEditColor] = useState(cardColor || "");

  const handleChangeName = async (e) => {
    let value = e.target.value;
    setCardEditName(value);
  };
  const handleChangeDescription = async (e) => {
    let value = e.target.value;
    setCardEditDescription(value);
  };
  const handleChangeColor = async (e) => {
    let value = e.target.value;
    setCardEditColor(value);
  };
  const handleCancelEdit = () => {
    setCardEditName(cardName);
    setCardEditDescription(cardDesc);
    setCardEditColor(cardColor);
    toggle();
  };

  const handleEditCardFields = async () => {
    try {
      await httpRequest({
        method: "put",
        url: `${baseTrelloUrl}cards/${cardId}?key=${apiKey}&token=${apiToken}`,
        data: {
          name: cardEditName,
          desc: cardEditDescription,
          cover: {
            color: cardEditColor,
            brightness: "light",
          },
        },
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

  return (
    <StyleEdit>
      <div className="EditContent">
        <div className="editDiv">
          <h2>
            {editCard} {cardName} {editCardName}
          </h2>
        </div>
        <div className="editDiv">
          <InputField
            label={nameForCard}
            onChange={handleChangeName}
            value={cardEditName}
          />
          <InputField
            label={cardDescription}
            onChange={handleChangeDescription}
            value={cardEditDescription}
          />
          <InputField
            className={editInput}
            label={cardColorText}
            onChange={handleChangeColor}
            value={cardEditColor}
          />
        </div>
        <div className="editDiv holderBtns">
          <Button label={addBtn} onClick={handleEditCardFields} />
          <Button label={cancelBtn} onClick={handleCancelEdit} />
        </div>
      </div>
    </StyleEdit>
  );
};

export default EditCard;
