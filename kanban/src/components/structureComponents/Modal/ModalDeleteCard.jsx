import React from "react";
import { ModalDivDelete } from "../../styleComponents/Container/Modal_styleDelete";
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

const ModalDeleteCard = ({
  setShowDeleteModal,
  cardId,
  setRefreshCard,
  refreshCard,
  cardName,
}) => {
  const handleDelete = async () => {
    await httpRequest({
      method: `delete`,
      url: `${baseTrelloUrl}cards/${cardId}?key=${apiKey}&token=${apiToken}`,
    });
    setShowDeleteModal(false);
    setRefreshCard(!refreshCard);
  };
  const handleCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <ModalDivDelete>
      <div className="modalContent">
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
      </div>
    </ModalDivDelete>
  );
};

export default ModalDeleteCard;
