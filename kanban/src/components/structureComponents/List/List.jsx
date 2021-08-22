import React, { useCallback, useEffect, useMemo, useState } from "react";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import Cards from "../Cards/Cards";
import { ListCardsDiv } from "../../styleComponents/Container/ListCards_style";

import ListTitle from "../ListTitle/ListTitle";
import SetNewCard from "../SetNewCard/SetNewCard";

const List = ({ listName, listId }) => {
  const [refreshCard, setRefreshCard] = useState(false);
  const [cards, setCards] = useState([]);

  const getAllCards = useCallback(async () => {
    let response = await httpRequest({
      method: "get",
      url: `${baseTrelloUrl}lists/${listId}/cards?key=${apiKey}&token=${apiToken}`,
    });
    setRefreshCard(!refreshCard);
    if (response.responseData.data) setCards(response.responseData.data);
  }, [listId, refreshCard]);

  useEffect(() => {
    if (!refreshCard) getAllCards();
  }, [getAllCards, refreshCard]);

  const getMapingCards = useMemo(
    () =>
      cards &&
      cards.map((card) => {
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
      }),
    [cards, listName, refreshCard]
  );

  return (
    <ListCardsDiv>
      <ListTitle
        listId={listId}
        listName={listName}
        refreshCard={refreshCard}
        setRefreshCard={setRefreshCard}
      />
      {getMapingCards}
      <SetNewCard
        listId={listId}
        refreshCard={refreshCard}
        setRefreshCard={setRefreshCard}
      />
    </ListCardsDiv>
  );
};

export default List;
