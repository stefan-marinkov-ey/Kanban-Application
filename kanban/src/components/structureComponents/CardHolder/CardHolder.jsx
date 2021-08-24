import React from "react";
import { clickDesc, threeDots } from "../../../utility/constantsText";
import { makeLighterColor } from "../../../utility/utilityFunc";
import Modal from "../Modal/Modal";
import EditCard from "../EditCard/EditCard";
import useModal from "../Modal/useModal.js";
import CardDescription from "../CardDescription/CardDescription";
import { StyleCardHolder } from "./CardHolder.style.jsx";

const CardHolder = ({ cardName, cardColor, cardDesc, cardId, listName }) => {
  const { isShowing, toggle } = useModal();
  const { isShowing: Desc, toggle: toggleDesc } = useModal();
  const elementP = makeLighterColor(cardColor);

  return (
    <StyleCardHolder>
      <p className="cardFunc" onClick={toggle} style={elementP}>
        {cardName} <span>{threeDots}</span>
      </p>
      <p className="cardDesc" onClick={toggleDesc}>
        {clickDesc}
      </p>
      <Modal isShowing={Desc} hide={toggleDesc}>
        <CardDescription
          cardDesc={cardDesc}
          cardName={cardName}
          elementP={elementP}
          listName={listName}
          toggleDesc={toggleDesc}
          Desc={Desc}
        />
      </Modal>
      <Modal isShowing={isShowing} hide={toggle}>
        <EditCard
          cardId={cardId}
          cardDesc={cardDesc}
          cardColor={cardColor}
          cardName={cardName}
          toggle={toggle}
        />
      </Modal>
    </StyleCardHolder>
  );
};

export default CardHolder;
