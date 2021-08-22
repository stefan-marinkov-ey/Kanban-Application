import React from "react";
import Button from "../../reusableComponents/Button/Button";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  cancelBtn,
  deleteBtn,
  deletingCard,
  deletingCardName,
} from "../../../utility/constantsText";

const DeleteCard = ({ cardName, cardId, refreshCard, setRefreshCard }) => {
  const handleDelete = async () => {
    await httpRequest({
      method: `delete`,
      url: `${baseTrelloUrl}cards/${cardId}?key=${apiKey}&token=${apiToken}`,
    });
    setRefreshCard(!refreshCard);
  };
  const handleCancel = () => {};

  return (
    <div className="DeleteContent">
      <div>
        <h2>
          {deletingCard}
          {cardName}
          {deletingCardName}
        </h2>
      </div>

      <div className="buttonHolderDelete">
        <Button label={deleteBtn} onClick={handleDelete} />
        <Button label={cancelBtn} onClick={handleCancel} />
      </div>
    </div>
  );
};

export default DeleteCard;
