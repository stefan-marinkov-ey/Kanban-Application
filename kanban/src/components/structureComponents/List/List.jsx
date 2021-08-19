import React, { useEffect, useState } from "react";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import Cards from "../Cards/Cards";
import Button from "../../reusableComponents/Button";
import { ListCardsDiv } from "../../styleComponents/Container/ListCards_style";
import {
  addBtn,
  cancelBtn,
  cardTitle,
  newCardPlaceholder,
} from "../../../utility/constantsText";
import InputField from "../../reusableComponents/Input/InputField";

const List = ({ listName, listId }) => {
  const [refreshCard, setRefreshCard] = useState(false);
  const [listTitle, setListTitle] = useState(false);
  const [newCardName, setNewCardName] = useState("");
  const [showField, setShowField] = useState(false);
  const [cards, setCards] = useState([]);
  const [newListName, setListName] = useState(listName || "");

  const handleListName = async (e) => {
    let value = e.target.value;
    setListName(value);
  };

  const handleNewCardName = (e) => {
    let value = e.target.value;
    setNewCardName(value);
  };
  const handleAddCart = async () => {
    await httpRequest({
      method: "post",
      url: `${baseTrelloUrl}/cards?key=${apiKey}&token=${apiToken}&idList=${listId}&name=${newCardName}`,
    });

    setShowField(!showField);
  };

  const handleCancel = () => {
    setNewCardName("");
    setShowField(!showField);
  };

  const handleShowTex = () => {
    setShowField(!showField);
  };

  const handleTitleOnBlur = () => {
    setListTitle(!listTitle);
    setRefreshCard(!refreshCard);
    setListName(listName);
  };
  const handleListTitle = async () => {
    await handleTitleOnBlur();

    await httpRequest({
      method: "put",
      url: `${baseTrelloUrl}lists/${listId}?key=${apiKey}&token=${apiToken}`,
      data: {
        name: newListName,
      },
    });

    setRefreshCard(!refreshCard);
    setListTitle(!listTitle);
    setListName(newListName);
  };

  useEffect(() => {
    async function getAllCards() {
      let response = await httpRequest({
        method: `get`,
        url: `${baseTrelloUrl}lists/${listId}/cards?key=${apiKey}&token=${apiToken}`,
      });
      setCards(response.responseData.data);
    }

    getAllCards();
  }, [newListName, refreshCard, showField, listId]);

  const getMapingCards = () => {
    return cards.map((card) => {
      return (
        <div key={card.id}>
          <Cards
            key={card.id}
            cardName={card.name}
            cardId={card.id}
            cardColor={card.cover.color}
            cardDesc={card.desc}
            setRefreshCard={setRefreshCard}
            refreshCard={refreshCard}
            listName={listName}
          />
        </div>
      );
    });
  };

  const getListTitle = () => {
    return !listTitle ? (
      <h4 onClick={handleListTitle}>{newListName}</h4>
    ) : (
      <div className="titleChange">
        <InputField
          onChange={handleListName}
          value={newListName}
          onBlur={handleTitleOnBlur}
        />
        <Button label={addBtn} onMouseDown={handleListTitle} />
      </div>
    );
  };

  const getAddBtn = () =>
    newCardName && <Button label={addBtn} onClick={handleAddCart} />;

  const getShowTextarea = () => {
    return showField ? (
      <div className="cardField">
        <textarea
          placeholder={newCardPlaceholder}
          onChange={handleNewCardName}
        ></textarea>
        <div>
          {getAddBtn()}
          <Button label={cancelBtn} onClick={handleCancel} />
        </div>
      </div>
    ) : (
      <Button label={`${addBtn}${cardTitle}`} onClick={handleShowTex}></Button>
    );
  };

  return (
    <ListCardsDiv>
      <div>{getListTitle()}</div>
      {getMapingCards()}
      {getShowTextarea()}
    </ListCardsDiv>
  );
};

export default List;
