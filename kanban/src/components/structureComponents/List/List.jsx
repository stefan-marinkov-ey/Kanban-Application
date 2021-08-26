import React, { useCallback, useEffect, useMemo, useState } from "react";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import Cards from "../Cards/Cards";

import ListTitle from "../ListTitle/ListTitle";
import SetNewCard from "../SetNewCard/SetNewCard";
import { getBoardData } from "../../../Context/actions";
import { useManageContext } from "../../../Context";
import { StyleList } from "./List.style.jsx";
import { errorResponse } from "../../../utility/constantsText";

const List = ({ listName, listId, lists }) => {
  const { state, dispatch } = useManageContext();
  const { errorMessage, refresh, seeAll } = state;
  const [cards, setCards] = useState([]);

  const getAllCards = useCallback(async () => {
    try {
      let response = await httpRequest({
        method: "get",
        url: `${baseTrelloUrl}lists/${listId}/cards?key=${apiKey}&token=${apiToken}`,
      });

      if (response.responseData.data) {
        setCards(response.responseData.data);
      }
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: errorResponse,
      });
    }
  }, [listId, dispatch]);

  useEffect(() => {
    (!seeAll || seeAll) && lists.length && !refresh && getAllCards();
  }, [getAllCards, refresh, lists.length, seeAll]);

  const getMapingCards = useMemo(() => {
    return (
      lists.length &&
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
              listName={listName}
            />
          </div>
        );
      })
    );
  }, [cards, listName, lists.length]);

  const errorMessageForDisplay = errorMessage ? <h2>{errorMessage}</h2> : null;

  return (
    <StyleList>
      {errorMessageForDisplay}
      <ListTitle listId={listId} listName={listName} />
      {getMapingCards}
      <SetNewCard listId={listId} />
    </StyleList>
  );
};

export default List;
