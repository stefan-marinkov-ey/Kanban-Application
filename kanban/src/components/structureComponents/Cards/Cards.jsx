import React from "react";
import { deleteX } from "../../../utility/constantsText";
import Button from "../../reusableComponents/Button/Button";
import { StyleCards } from "./Cards.style.jsx";
import CardHolder from "../CardHolder/CardHolder";
import useModal from "../Modal/useModal.js";
import Modal from "../Modal/Modal";
import DeleteCard from "../DeleteCard/DeleteCard";

const Cards = ({ cardName, cardColor, cardId, cardDesc, listName }) => {
  const { isShowing, toggle } = useModal();
  return (
    <StyleCards>
      <div className="holder">
        <CardHolder
          cardName={cardName}
          cardColor={cardColor}
          cardId={cardId}
          cardDesc={cardDesc}
          listName={listName}
        />
        <Button label={deleteX} onClick={toggle} />

        <Modal isShowing={isShowing} hide={toggle}>
          <DeleteCard cardName={cardName} cardId={cardId} toggle={toggle} />
        </Modal>
      </div>
    </StyleCards>
  );
};

export default Cards;
