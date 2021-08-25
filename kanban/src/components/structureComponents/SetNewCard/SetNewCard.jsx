import React, { useEffect, useRef, useState } from "react";
import { useManageContext } from "../../../Context";
import { getBoardData, refreshEffect } from "../../../Context/actions";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import {
  addBtn,
  cancelBtn,
  cardTitle,
  newCardPlaceholder,
} from "../../../utility/constantsText";
import Button from "../../reusableComponents/Button";
import { StyleSetNewCard } from "./SetNewCard.style.jsx";
import debounce from "lodash.debounce";

const SetNewCard = ({ listId }) => {
  const ref = useRef();
  const { state, dispatch } = useManageContext();
  const { refresh } = state;
  const [newCardName, setNewCardName] = useState("");
  const [showField, setShowField] = useState(false);

  const handleNewCardName = (e) => {
    const value = e.target.value;
    setNewCardName(value);
  };

  const handleCancel = () => {
    setNewCardName("");
    setShowField(!showField);
  };

  const handleShowTex = () => {
    setShowField(!showField);
  };

  const puttingCardMethod = async () => {
    try {
      await httpRequest({
        method: "post",
        url: `${baseTrelloUrl}/cards?key=${apiKey}&token=${apiToken}&idList=${listId}&name=${newCardName}`,
      });
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: "Something went wrong, refresh the page",
      });
    }

    setShowField(!showField);
    refreshEffect(dispatch, !refresh);
  };
  const handleAddCart = debounce(puttingCardMethod, 300);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showField && ref.current && !ref.current.contains(e.target)) {
        setShowField(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showField]);

  const getAddBtn = newCardName && (
    <Button label={addBtn} onClick={handleAddCart} />
  );
  const showHideField = showField ? (
    <div className="cardField" ref={ref}>
      <textarea
        placeholder={newCardPlaceholder}
        onChange={handleNewCardName}
      ></textarea>
      <div className="btnTextField">
        {getAddBtn}
        <Button label={cancelBtn} onClick={handleCancel} />
      </div>
    </div>
  ) : (
    <Button label={`${addBtn}${cardTitle}`} onClick={handleShowTex} />
  );

  return <StyleSetNewCard>{showHideField}</StyleSetNewCard>;
};

export default SetNewCard;
