import React from "react";
import { deleteX } from "../../../utility/constantsText";
import Button from "../../reusableComponents/Button/Button";
import { CardDivStyled } from "../../styleComponents/Container/CardStyle";
import CardHolder from "./CardHolder";

const Cards = ({ cardName, cardColor }) => {
  return (
    <CardDivStyled>
      <div>
        <CardHolder cardName={cardName} cardColor={cardColor} />
        <Button
          label={deleteX}
          onClick={console.log("Place Holder For Deleting card")}
        />
      </div>
    </CardDivStyled>
  );
};

export default Cards;
