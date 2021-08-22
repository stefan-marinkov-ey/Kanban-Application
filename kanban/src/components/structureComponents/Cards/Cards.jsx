import React from "react";
import { deleteX } from "../../../utility/constantsText";
import Button from "../../reusableComponents/Button/Button";
import { CardDivStyled } from "../../styleComponents/Container/CardStyle";
import CardHolder from "../CardHolder/CardHolder";
import useModal from "../Modal/useModal";
import Modal from "../Modal/Modal";
import DeleteCard from "../DeleteCard/DeleteCard";

const Cards = ({
  cardName,
  cardColor,
  cardId,
  refreshCard,
  setRefreshCard,
  cardDesc,
}) => {
  const { isShowing, toggle } = useModal();
  return (
    <CardDivStyled>
      <div>
        <CardHolder
          cardName={cardName}
          cardColor={cardColor}
          cardId={cardId}
          cardDesc={cardDesc}
          refreshCard={refreshCard}
          setRefreshCard={setRefreshCard}
        />
        <Button label={deleteX} onClick={toggle} />

        <Modal isShowing={isShowing} hide={toggle}>
          <DeleteCard
            cardName={cardName}
            cardId={cardId}
            refreshCard={refreshCard}
            setRefreshCard={setRefreshCard}
            toggle={toggle}
          />
        </Modal>
      </div>
    </CardDivStyled>
  );
};

export default Cards;
