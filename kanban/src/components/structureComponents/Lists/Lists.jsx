import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { getLists } from "../../../utility/constantsKeysAndUrl";
import List from "../List/List";
import Button from "../../reusableComponents/Button";
import {
  creatingNewList,
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
  const mountedRef = useRef(true);
  const { state, dispatch } = useManageContext();
  const { refresh, seeAll, errorMessage } = state;
  const { isShowing, toggle } = useModal();
  const [lists, setLists] = useState([]);

  const handleSeeAll = () => {
    seeAllLists(dispatch, !seeAll);
  };

  const getAllLists = useCallback(async () => {
    try {
      let response = await httpRequest(getLists);
      setLists(response.responseData.data);
      if (!mountedRef.current) return null;
      refreshEffect(dispatch, !refresh);
    } catch (e) {
      getBoardData(dispatch, {
        name: "errorMessage",
        value: "Something went wrong, refresh the page",
      });
    }
  }, [dispatch, refresh]);

  useEffect(() => {
    !refresh && getAllLists();

    return () => {
      refreshEffect(dispatch, true);
      mountedRef.current = false;
    };
  }, [getAllLists, refresh, dispatch]);

  const getListsAll = useMemo(
    () =>
      !lists.length ? (
        <Loading />
      ) : !seeAll ? (
        lists
          .filter((list, index) => (!seeAll ? index < 3 : list))
          .map((list) => {
            return <List key={list.id} listName={list.name} listId={list.id} />;
          })
      ) : (
        lists.map((list) => {
          return <List key={list.id} listName={list.name} listId={list.id} />;
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
