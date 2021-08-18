export const inputLetterValidation = (validationTarget) => {
  if (
    !validationTarget ||
    !/^[a-z ,.'-]+$/i.test(validationTarget) ||
    !/^\S+(?: \S+)*$/.test(validationTarget)
  ) {
    return <span>"Enter valid username, use just letters"</span>;
  }
};

export const numberValidate = (validationTarget) => {
  if (
    !validationTarget ||
    !/^[1-9]\d*(\.\d+)?$/.test(validationTarget) ||
    validationTarget.length < 5
  ) {
    return (
      <span>
        Enter Real Passwor. Use just numbers with minimum length of 5.
      </span>
    );
  }
};

export const textAndCheckAreaValidation = (text) => {
  if (!text) {
    return <span>Required</span>;
  }
};

export const validateNameOrEmail = (fieldValue) => {
  if (!/\@/.test(fieldValue)) {
    if (
      !fieldValue ||
      !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
        fieldValue
      )
    )
      return <span>Enter validate mail</span>;
  } else {
    if (
      !fieldValue ||
      !/^[a-z ,.'-]+$/i.test(fieldValue) ||
      !/^\S+(?: \S+)*$/.test(fieldValue)
    )
      return <span>Enter Valid Username</span>;
  }
};
