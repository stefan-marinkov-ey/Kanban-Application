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
  cardDescription,
  chosenColor,
  editCard,
  editCardName,
  errorResponse,
  nameForCard,
} from "../../../utility/constantsText";
import { getBoardData, refreshEffect } from "../../../Context/actions";
import { useManageContext } from "../../../Context";
import { StyleEdit } from "./EditCard.style.jsx";
import { colorCheckobox, makeLighterColor } from "../../../utility/utilityFunc";

const EditCard = ({ cardId, cardName, cardDesc, cardColor, toggle }) => {
  const { state, dispatch } = useManageContext();
  const { refresh } = state;
  const [cardEditName, setCardEditName] = useState(cardName || "");
  const [cardEditDescription, setCardEditDescription] = useState(
    cardDesc || ""
  );
  const [cardEditColor, setCardEditColor] = useState(cardColor);
  const handleChangeName = async (e) => {
    let value = e.target.value;
    setCardEditName(value);
  };
  const handleChangeDescription = async (e) => {
    let value = e.target.value;
    setCardEditDescription(value);
  };

  const handleChangeColor = async (color) => {
    let chosen = "";
    colorCheckobox.filter((item) => {
      return item === color ? (chosen = color) : item;
    });

    setCardEditColor(chosen);
  };
  const handleCancelEdit = () => {
    setCardEditName(cardName);
    setCardEditDescription(cardDesc);
    setCardEditColor(cardColor);
    toggle();
  };

  const handleEditCardFields = async () => {
    try {
      await toggle();
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
        value: errorResponse,
      });
    }

    refreshEffect(dispatch, !refresh);
  };

  const chooseColor = () =>
    colorCheckobox.map((color, index) => {
      let spanCheck = makeLighterColor(color);
      return (
        <span
          key={index}
          style={{
            width: "1rem",
            height: "1rem",
            background: spanCheck.background,
          }}
          onClick={() => handleChangeColor(color)}
        ></span>
      );
    });
  const preventNullShowing = cardEditColor || "";
  return (
    <StyleEdit>
      <div className="EditContent">
        <div className="editDiv">
          <h2>{`${editCard} ${cardName} ${editCardName}`}</h2>
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
          <p>
            {`${chosenColor}
            ${preventNullShowing}`}
          </p>
          <div className="checkboxes">{chooseColor()}</div>
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
