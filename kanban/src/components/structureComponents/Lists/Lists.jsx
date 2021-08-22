import React, { useState, useEffect } from "react";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { getLists } from "../../../utility/constantsKeysAndUrl";
import List from "../List/List";
import Button from "../../reusableComponents/Button";
import { ListsDiv } from "../../styleComponents/Container/Lists_style";
import {
  creatingNewList,
  listsText,
  seeAllCards,
  showLess,
} from "../../../utility/constantsText";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";
import NewList from "../NewList";

const Lists = () => {
  const { isShowing, toggle } = useModal();
  const [lists, setLists] = useState([]);
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
  }, [toggle]);

  const getListsAll = () => {
    return lists
      .filter((list, index) => (!seeAll ? index < 3 : list))
      .map((list) => {
        return <List key={list.id} listName={list.name} listId={list.id} />;
      });
  };

  return (
    <ListsDiv>
      <div className="listsContent">
        <span>{listsText}</span>
        <Button
          class="seeAll"
          label={seeAll ? showLess : seeAllCards}
          onClick={handleSeeAll}
        />
      </div>
      <div>{getListsAll()}</div>
      <Button className="newListBtn" label={creatingNewList} onClick={toggle} />
      <Modal isShowing={isShowing} hide={toggle}>
        <NewList toggle={toggle} />
      </Modal>
    </ListsDiv>
  );
};

export default Lists;
