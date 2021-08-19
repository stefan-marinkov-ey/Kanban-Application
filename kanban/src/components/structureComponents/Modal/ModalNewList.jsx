import React, { useState } from "react";
import InputField from "../../reusableComponents/Input/InputField";
import Button from "../../reusableComponents/Button/Button";
import {
  apiKey,
  apiToken,
  baseTrelloUrl,
} from "../../../utility/constantsKeysAndUrl";
import { httpRequest } from "../../../fetchComponent/httpRequest";
import { ModalDivNewList } from "../../styleComponents/Container/Modal_styleNewList";
import {
  addBtn,
  cancelBtn,
  creatingNewList,
  deleteX,
} from "../../../utility/constantsText";

const ModalNewList = ({ setShowModal, showModal }) => {
  const [listName, setListName] = useState("");

  const handleChange = async (e) => {
    let value = e.target.value;
    setListName(value);
  };

  const handleListName = async () => {
    await httpRequest({
      method: `post`,
      url: `${baseTrelloUrl}lists?key=${apiKey}&token=${apiToken}&name=${listName}&idBoard=61152cf60660483f28f5ffda`,
    });
    setShowModal(!showModal);
  };
  const handleCancelEdit = () => {
    setListName("");
    setShowModal(!showModal);
  };
  return (
    <ModalDivNewList>
      <div className="modalContent">
        <div className="newListContent">
          <div>
            <div className="middleDiv">
              <div className="titleAndCancel">
                <h5>{creatingNewList}</h5>
                <Button
                  className="cancelX"
                  label={deleteX}
                  onClick={handleCancelEdit}
                />
              </div>
              <InputField onChange={handleChange} value={listName} />
            </div>
            <div className="addEndClose">
              <Button label={addBtn} onClick={handleListName} />
              <Button label={cancelBtn} onClick={handleCancelEdit} />
            </div>
          </div>
        </div>
      </div>
    </ModalDivNewList>
  );
};

export default ModalNewList;
