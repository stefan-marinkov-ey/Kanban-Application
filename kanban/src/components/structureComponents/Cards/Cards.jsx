import { getByPlaceholderText } from "@testing-library/react";
import React, { useState } from "react";
import { clickDesc, deleteX, threeDots } from "../../../utility/constantsText";
import Button from "../../reusableComponents/Button/Button";
import { CardDivStyled } from "../../styleComponents/Container/CardStyle";
import ModalDeleteCard from "../Modal/ModalDeleteCard";
import ModalEditNewCard from "../Modal/ModalEditNewCard";
import ModalShowDescModal from "../Modal/ModalShowDescModal";

const Cards = ({
  cardName,
  cardId,
  setRefreshCard,
  refreshCard,
  cardDesc,
  cardColor,
  listName,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDescModal, setShowDescModal] = useState(false);

  const handleShowCardModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  const handleEditCard = () => {
    setShowEditModal(!showEditModal);
  };
  const handleShowDiscription = () => {
    setShowDescModal(!showDescModal);
  };

  const getShowDescriptionModal = () => {
    return showDescModal ? (
      <ModalShowDescModal
        cardName={cardName}
        cardColor={cardColor}
        cardDesc={cardDesc}
        setShowDescModal={setShowDescModal}
        showDescModal={showDescModal}
        listName={listName}
        elementP={elementP}
      />
    ) : null;
  };

  const getShowModalEditCard = () => {
    return showEditModal ? (
      <ModalEditNewCard
        cardId={cardId}
        cardName={cardName}
        setRefreshCard={setRefreshCard}
        refreshCard={refreshCard}
        setShowEditModal={setShowEditModal}
      />
    ) : null;
  };

  const getShowDeleteModal = () => {
    return showDeleteModal ? (
      <ModalDeleteCard
        cardName={cardName}
        cardId={cardId}
        setShowDeleteModal={setShowDeleteModal}
        setRefreshCard={setRefreshCard}
        refreshCard={refreshCard}
      />
    ) : null;
  };

  const getShowDesc = () => {
    return cardDesc ? <p onClick={handleShowDiscription}>{clickDesc}</p> : null;
  };

  const makeLighterColor = (cardColor) => {
    if (cardColor)
      return {
        background: `${
          cardColor === "red"
            ? "tomato"
            : cardColor === "blue"
            ? "lavender"
            : cardColor === "yellow"
            ? "palegoldenrod"
            : cardColor === "green"
            ? "lightgreen"
            : cardColor === "purple"
            ? "mediumorchid"
            : cardColor === "orange"
            ? "sandybrown"
            : cardColor === "lime"
            ? "palegreen"
            : cardColor === "sky"
            ? "lightskyblue"
            : cardColor
        }`,
        color: "white",
        fontWeight: "bold",
      };
  };

  const elementP = makeLighterColor(cardColor);

  return (
    <CardDivStyled>
      <div>
        <div className="cardFunctionality">
          <p onClick={handleEditCard} style={elementP}>
            {cardName} <span>{threeDots}</span>
          </p>
          {getShowDesc()}
          {getShowDescriptionModal()}
          {getShowModalEditCard()}
        </div>
        <Button label={deleteX} onClick={handleShowCardModal} />
      </div>
      {getShowDeleteModal()}
    </CardDivStyled>
  );
};

export default Cards;
