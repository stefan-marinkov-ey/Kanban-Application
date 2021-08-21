import React from "react";
import { ModalDivDescription } from "../../styleComponents/Container/Modal_styleDescription";
import Button from "../../reusableComponents/Button/Button";
import {
  cardColorText,
  cardDescription,
  cardTitle,
  closeBtn,
  listTitle,
  textBoardName,
  textName,
} from "../../../utility/constantsText";
import { useManageContext } from "../../../Context/context";

const ModalShowDescModal = ({
  cardDesc,
  setShowDescModal,
  showDescModal,
  cardName,
  listName,
  elementP,
}) => {
  const { state } = useManageContext();
  const { nameBoard } = state;
  const handleShowDesc = () => {
    setShowDescModal(!showDescModal);
  };

  return (
    <ModalDivDescription>
      <div className="modalContent">
        <div className="descriptionDiv">
          <div className="divAbout" style={elementP}>
            <h5>{cardColorText}</h5>
          </div>
          <div className="divAbout">
            <h5>
              {textBoardName} {textName}
            </h5>
            <p>{nameBoard}</p>
          </div>
          <div className="divAbout">
            <h5>
              {listTitle} {textName}
            </h5>
            <p>{listName}</p>
          </div>
          <div className="divAbout">
            <h5>
              {cardTitle} {textName}
            </h5>
            <p>{cardName}</p>
          </div>
          <div className="divAbout">
            <h5>{cardDescription}</h5>
            <p>{cardDesc}</p>
          </div>
          <div className="divAbout divBtnHolder">
            <Button label={closeBtn} onClick={handleShowDesc} />
          </div>
        </div>
      </div>
    </ModalDivDescription>
  );
};

export default ModalShowDescModal;
