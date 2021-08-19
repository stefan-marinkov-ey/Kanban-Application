import React, { useState, useEffect } from "react";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { getLists } from "../../../utility/constantsKeysAndUrl";
import List from "../List/List";
import ModalNewList from "../Modal/ModalNewList";
import Button from "../../reusableComponents/Button";
import { ListsDiv } from "../../styleComponents/Container/Lists_style";
import {
  creatingNewList,
  listsText,
  seeAllCards,
  showLess,
} from "../../../utility/constantsText";

const Lists = () => {
  const [lists, setLists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  const handleSeeAll = () => {
    setSeeAll(!seeAll);
  };

  useEffect(() => {
    async function getAllLists() {
      let response = await httpRequest(getLists);
      setLists(response.responseData.data);
    }

    getAllLists();
  }, [showModal]);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const getListsAll = () => {
    return lists
      .filter((list, index) => (!seeAll ? index < 3 : list))
      .map((list) => {
        return <List key={list.id} listName={list.name} listId={list.id} />;
      });
  };

  const showModalHolder = () => {
    return showModal ? (
      <ModalNewList setShowModal={setShowModal} showModal={showModal} />
    ) : null;
  };
  return (
    <ListsDiv>
      <div className="listsContent">
        <span>{listsText}</span>
        <Button
          class="seeAll"
          label={seeAll ? showLess : seeAllCards}
          onClick={handleSeeAll}
        ></Button>
      </div>
      <div>{getListsAll()}</div>
      {showModalHolder()}
      <Button
        className="newListBtn"
        label={creatingNewList}
        onClick={handleShowModal}
      />
    </ListsDiv>
  );
};

export default Lists;
