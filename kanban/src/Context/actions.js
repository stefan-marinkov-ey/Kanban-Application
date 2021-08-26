import { httpRequest } from "../fetchComponent/httpRequest";
import {
  BOARD_NAME,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH,
  REQUEST_LOGIN,
  SEE_ALL,
  THEMES,
} from "../utility/constantsWithRoutesAndMethods";

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: REQUEST_LOGIN });
    let response = await httpRequest(loginPayload);
    response.responseData.data.results.map((user) => {
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
      return null;
    });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error: error });
  }
}
export async function themes(dispatch, mode) {
  dispatch({ type: THEMES, payload: mode });
  localStorage.setItem("currentTheme", JSON.stringify(mode));
}
export async function getBoardData(dispatch, kanban) {
  dispatch({ type: BOARD_NAME, payload: kanban });
}
export async function refreshEffect(dispatch, refreshList) {
  dispatch({ type: REFRESH, payload: refreshList });
}
export async function seeAllLists(dispatch, seeAll) {
  dispatch({ type: SEE_ALL, payload: seeAll });
  localStorage.setItem("currentLists", JSON.stringify(seeAll));
}

export async function logoutAction(dispatch) {
  dispatch({ type: LOGOUT });
  localStorage.clear();
}
