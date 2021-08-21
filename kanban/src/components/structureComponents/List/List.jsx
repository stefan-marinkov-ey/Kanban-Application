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

import ListTitle from "./ListTitle";
import SetNewCard from "./SetNewCard";

const List = ({ listName, listId }) => {
  const [refreshCard, setRefreshCard] = useState(false);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getAllCards() {
      let response = await httpRequest({
        method: "get",
        url: `${baseTrelloUrl}lists/${listId}/cards?key=${apiKey}&token=${apiToken}`,
      });
      setCards(response.responseData.data);
    }
    getAllCards();
  }, [refreshCard, listId]);

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

  return (
    <ListCardsDiv>
      <ListTitle
        listId={listId}
        listName={listName}
        refreshCard={refreshCard}
        setRefreshCard={setRefreshCard}
      />
      {getMapingCards()}
      <SetNewCard
        listId={listId}
        refreshCard={refreshCard}
        setRefreshCard={setRefreshCard}
      />
    </ListCardsDiv>
  );
};

export default List;
