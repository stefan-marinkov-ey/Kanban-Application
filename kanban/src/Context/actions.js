import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REQUEST_LOGIN,
  THEMES,
} from "../utility/constantsWithRoutesAndMethods";

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: REQUEST_LOGIN });
    let response = await axios(loginPayload);
    response.data.results.map((user) => {
      let data = {
        firstName: user.name.first,
        lastName: user.name.last,
        picture: user.picture.medium,
        token: user.login.uuid,
      };
      if (data.token) {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        localStorage.setItem("currentUser", JSON.stringify(data));
        return data;
      }

      dispatch({ type: LOGIN_ERROR, error: data.errors[0] });
      return;
    });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error: error });
  }
}
export async function themes(dispatch, mode) {
  dispatch({ type: THEMES, payload: mode });
  localStorage.setItem("currentTheme", JSON.stringify(mode));
}

export async function logout(dispatch) {
  dispatch({ type: LOGOUT });
  localStorage.clear();
}
