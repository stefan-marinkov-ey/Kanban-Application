import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import debounce from "lodash.debounce";

const List = ({ listName, listId }) => {
  const mountedRef = useRef(true);
  const { state, dispatch } = useManageContext();
  const { refresh, errorMessage } = state;
  const [cards, setCards] = useState([]);

  const getAllCards = useCallback(async () => {
    try {
      let response = await httpRequest({
        method: "get",
        url: `${baseTrelloUrl}lists/${listId}/cards?key=${apiKey}&token=${apiToken}`,
      });

      if (response.responseData.data) setCards(response.responseData.data);
      if (!mountedRef.current) return null;
      refreshEffect(dispatch, !refresh);
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: "Something went wrong, refresh the page",
      });
    }
  }, [listId, refresh, dispatch, mountedRef]);

  const getCardsRefresh = debounce(getAllCards, 200);

  useEffect(() => {
    getCardsRefresh();
    return () => {
      mountedRef.current = false;
      getCardsRefresh.cancel();
    };
  }, [getCardsRefresh]);

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
