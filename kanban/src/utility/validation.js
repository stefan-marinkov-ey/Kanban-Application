import {
  required,
  requiredField,
  validMail,
  validPass,
  validUsername,
} from "./constantsText";

export const inputLetterValidation = (validationTarget) => {
  if (
    !validationTarget ||
    !/^[a-z ,.'-]+$/i.test(validationTarget) ||
    !/^\S+(?: \S+)*$/.test(validationTarget)
  ) {
    return validUsername;
  }
};

export const numberValidate = (fieldValue) => {
  let numbReg = /^[1-9]\d*(\.\d+)?$/;
  if (!fieldValue) {
    return requiredField;
  }
  if (!numbReg.test(fieldValue) || fieldValue.length < 5) {
    return validPass;
  }
};

export const textAndCheckAreaValidation = (text) => {
  if (!text) {
    return required;
  }
};

export const validateNameOrEmail = (fieldValue) => {
  let monkeyReg = /\@/;
  let emailReg =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  let lettersReg = /^[a-z ,.'-]+$/i;
  let spaceReg = /^\S+(?: \S+)*$/;

  if (monkeyReg.test(fieldValue)) {
    if (!fieldValue) {
      return requiredField;
    }
    if (!emailReg.test(fieldValue)) return validMail;
  } else {
    if (!fieldValue) {
      return requiredField;
    }
    if (!lettersReg.test(fieldValue) || !spaceReg.test(fieldValue)) {
      return validUsername;
    }
  }
};
