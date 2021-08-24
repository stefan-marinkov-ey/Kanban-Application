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
import { getBoardData, refreshEffect } from "../../../Context/actions";
import { useManageContext } from "../../../Context";
import { StyleList } from "./List.style.jsx";

const List = ({ listName, listId }) => {
  const { state, dispatch } = useManageContext();
  const { refresh } = state;
  const [cards, setCards] = useState([]);

  const getAllCards = useCallback(async () => {
    try {
      let response = await httpRequest({
        method: "get",
        url: `${baseTrelloUrl}lists/${listId}/cards?key=${apiKey}&token=${apiToken}`,
      });
      refreshEffect(dispatch, !refresh);
      if (response.responseData.data) setCards(response.responseData.data);
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: "Something goes wrong",
      });
    }
  }, [listId, refresh, dispatch]);

  useEffect(() => {
    !refresh && getAllCards();
  }, [getAllCards, refresh]);

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
              listName={listName}
            />
          </div>
        );
      }),
    [cards, listName]
  );

  return (
    <StyleList>
      <ListTitle listId={listId} listName={listName} />
      {getMapingCards}
      <SetNewCard listId={listId} />
    </StyleList>
  );
};

export default List;
