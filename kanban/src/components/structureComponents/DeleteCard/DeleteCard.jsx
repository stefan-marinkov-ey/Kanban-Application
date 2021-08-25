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
  errorResponse,
  twoSlash,
} from "../../../utility/constantsText";
import { useManageContext } from "../../../Context";
import { getBoardData, refreshEffect } from "../../../Context/actions";
import { StyleDeleteCard } from "./DeleteCard.style.jsx";

const DeleteCard = ({ cardName, cardId, toggle }) => {
  const { state, dispatch } = useManageContext();
  const { refresh } = state;

  const deleteMethod = async () => {
    try {
      await toggle();
      await httpRequest({
        method: "delete",
        url: `${baseTrelloUrl}cards/${cardId}?key=${apiKey}&token=${apiToken}`,
      });
      refreshEffect(dispatch, !refresh);
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: errorResponse,
      });
    }
  };

  return (
    <StyleDeleteCard>
      <div className="question">
        <h3>
          {`${deletingCard}  
          ${twoSlash} ${cardName}${twoSlash} 
          ${deletingCardName}`}
        </h3>
      </div>

      <div className="buttonHolderDelete">
        <Button label={deleteBtn} onClick={deleteMethod} />
        <Button label={cancelBtn} onClick={() => toggle()} />
      </div>
    </StyleDeleteCard>
  );
};

export default DeleteCard;
