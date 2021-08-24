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
import { useManageContext } from "../../../Context";
import { getBoardData, refreshEffect } from "../../../Context/actions";
import { StyleDeleteCard } from "./StyleDeleteCard.style";

const DeleteCard = ({ cardName, cardId, toggle }) => {
  const { state, dispatch } = useManageContext();
  const { refresh } = state;
  const handleDelete = async () => {
    try {
      await httpRequest({
        method: "delete",
        url: `${baseTrelloUrl}cards/${cardId}?key=${apiKey}&token=${apiToken}`,
      });
      refreshEffect(dispatch, !refresh);
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: "Something goes wrong",
      });
    }
  };

  return (
    <StyleDeleteCard>
      <div className="question">
        <h3>
          {`${deletingCard}  
          --${cardName}--  
          ${deletingCardName}`}
        </h3>
      </div>

      <div className="buttonHolderDelete">
        <Button label={deleteBtn} onClick={handleDelete} />
        <Button label={cancelBtn} onClick={() => toggle()} />
      </div>
    </StyleDeleteCard>
  );
};

export default DeleteCard;
