import React, { useState } from "react";
import InputField from "../../reusableComponents/Input/InputField";
import Button from "../../reusableComponents/Button/Button";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { ModalDivEdit } from "../../styleComponents/Container/Modal_styleEdit";
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

const ModalEditNewCard = ({
  cardId,
  setRefreshCard,
  refreshCard,
  setShowEditModal,
  cardName,
}) => {
  const [cardEditName, setCardEditName] = useState("");
  const [cardEditDescription, setCardEditDescription] = useState("");
  const [cardEditColor, setCardEditColor] = useState("");

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
    setCardEditName("");
    setCardEditDescription("");
    setCardEditColor("");
    setShowEditModal(false);
  };

  const handleEditCardFields = async () => {
    await httpRequest({
      method: `put`,
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
    setShowEditModal(false);
    setRefreshCard(!refreshCard);
  };

  return (
    <ModalDivEdit>
      <div className="modalContent">
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
      </div>
    </ModalDivEdit>
  );
};

export default ModalEditNewCard;
