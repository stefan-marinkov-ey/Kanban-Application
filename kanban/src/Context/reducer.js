import {
  BOARD_NAME,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REQUEST_LOGIN,
  THEMES,
  REFRESH,
  SEE_ALL,
} from "../utility/constantsWithRoutesAndMethods";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).firstName
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";
let picture = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).picture
  : "";
let themeToggle = localStorage.getItem("currentTheme")
  ? JSON.parse(localStorage.getItem("currentTheme"))
  : "";

let seeMoreLess = localStorage.getItem("currentLists")
  ? JSON.parse(localStorage.getItem("currentLists"))
  : "";

export const initialState = {
  user: user,
  token: token,
  picture: picture,
  loading: false,
  errorMessage: null,
  themeToggle: themeToggle,
  nameBoard: "",
  refresh: false,
  seeAll: seeMoreLess || false,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload.firstName,
        token: action.payload.token,
        picture: action.payload.picture,
        loading: false,
      };
    case LOGOUT:
      return {
        ...initialState,
        user: "",
        token: "",
        picture: "",
        themeToggle: "",
      };

    case LOGIN_ERROR:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case THEMES:
      return {
        ...initialState,
        themeToggle: action.payload,
      };
    case BOARD_NAME:
      return {
        ...initialState,
        [action.payload.name]: action.payload.value,
      };
    case REFRESH:
      return {
        ...initialState,
        refresh: action.payload,
      };
    case SEE_ALL:
      return {
        ...initialState,
        seeAll: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
