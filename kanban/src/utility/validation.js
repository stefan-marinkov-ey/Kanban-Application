import { required, validMail, validPass, validUsername } from "./constantsText";

export const inputLetterValidation = (validationTarget) => {
  if (
    !validationTarget ||
    !/^[a-z ,.'-]+$/i.test(validationTarget) ||
    !/^\S+(?: \S+)*$/.test(validationTarget)
  ) {
    return <span>{validUsername}</span>;
  }
};

export const numberValidate = (fieldValue) => {
  let numbReg = /^[1-9]\d*(\.\d+)?$/;
  if (!fieldValue || !numbReg.test(fieldValue) || fieldValue.length < 5) {
    return <span>{validPass}</span>;
  }
};

export const textAndCheckAreaValidation = (text) => {
  if (!text) {
    return <span>{required}</span>;
  }
};

export const validateNameOrEmail = (fieldValue) => {
  let monkeyReg = /@/;
  let emailReg =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  let lettersReg = /^[a-z ,.'-]+$/i;
  let spaceReg = /^\S+(?: \S+)*$/;
  if (!monkeyReg.test(fieldValue)) {
    if (!fieldValue || !emailReg.test(fieldValue))
      return <span>{validMail}</span>;
  } else {
    if (
      !fieldValue ||
      !lettersReg.test(fieldValue) ||
      !spaceReg.test(fieldValue)
    )
      return <span>{validUsername}</span>;
  }
};
