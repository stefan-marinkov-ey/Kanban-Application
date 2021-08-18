import axios from "axios";

export const httpRequest = async (option) => {
  const request = option;
  let responseData = null;
  let error = null;
  try {
    const response = await axios(option);
    responseData = response;
  } catch (err) {
    error = err.message;
  }

  return { responseData, error };
};
