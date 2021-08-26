import React, { useState, useEffect, useCallback, useMemo } from "react";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import List from "../List/List";
import Button from "../../reusableComponents/Button";
import {
  creatingNewList,
  errorResponse,
  listsText,
  seeAllCards,
  showLess,
} from "../../../utility/constantsText";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal.js";
import NewList from "../NewList";
import { useManageContext } from "../../../Context";
import {
  getBoardData,
  refreshEffect,
  seeAllLists,
} from "../../../Context/actions";
import Loading from "../Loading";
import { StyleLists } from "./Lists.style.jsx";

const Lists = () => {
  const { state, dispatch } = useManageContext();
  const { refresh, seeAll, errorMessage, idBoard } = state;
  const { isShowing, toggle } = useModal();
  const [lists, setLists] = useState([]);

  const handleSeeAll = () => {
    seeAllLists(dispatch, !seeAll);
    refreshEffect(dispatch, !refresh);
  };

  const getAllLists = useCallback(async () => {
    if (idBoard)
      try {
        let res = await httpRequest({
          method: "get",
          url: `${baseTrelloUrl}boards/${idBoard}/lists?key=${apiKey}&token=${apiToken}`,
        });
        setLists(res.responseData.data);
        if (res) refreshEffect(dispatch, !refresh);
      } catch (e) {
        getBoardData(dispatch, {
          name: "errorMessage",
          value: errorResponse,
        });
      }
  }, [dispatch, refresh, idBoard]);

  useEffect(() => {
    !refresh && getAllLists();

    return () => {
      refreshEffect(dispatch, true);
    };
  }, [getAllLists, refresh, dispatch]);

  const getListsAll = useMemo(
    () =>
      !lists.length ? (
        <Loading />
      ) : (
        lists
          .filter((list, index) => (seeAll ? list : index < 3))
          .map((list) => {
            return (
              <List
                key={list.id}
                listName={list.name}
                listId={list.id}
                lists={lists}
              />
            );
          })
      ),
    [lists, seeAll]
  );
  const errorMessageForDisplay = errorMessage ? <h2>{errorMessage}</h2> : null;
  return (
    <StyleLists>
      {errorMessageForDisplay}
      <div className="listsContent">
        <span>{listsText}</span>
        <Button
          class="seeAll"
          label={seeAll ? showLess : seeAllCards}
          onClick={handleSeeAll}
        />
      </div>
      <div className="allLists">{getListsAll}</div>
      <Button className="newListBtn" label={creatingNewList} onClick={toggle} />
      <Modal isShowing={isShowing} hide={toggle}>
        <NewList toggle={toggle} />
      </Modal>
    </StyleLists>
  );
};

export default Lists;
