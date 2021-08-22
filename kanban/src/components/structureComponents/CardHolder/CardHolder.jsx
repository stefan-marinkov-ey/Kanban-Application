import React from "react";
import { threeDots } from "../../../utility/constantsText";
import { makeLighterColor } from "../../../utility/utilityFunc";

const CardHolder = ({ cardName, cardColor }) => {
  const elementP = makeLighterColor(cardColor);

  return (
    <div className="cardFunctionality">
      <p onClick={console.log("Placeholder For Editing Card")} style={elementP}>
        {cardName} <span>{threeDots}</span>
      </p>
    </div>
  );
};

export default CardHolder;
