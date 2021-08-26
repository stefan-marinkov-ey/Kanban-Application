import axios from "axios";

export const httpRequest = async (option) => {
  let responseData = null;
  let error = null;
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
  try {
    const response = await axios(option, { cancelToken: source.token });

    responseData = response;
  } catch (err) {
    error = err.message;
  }

  return { responseData, error, source };
};
