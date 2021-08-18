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

export const initialState = {
  user: user,
  token: token,
  picture: picture,
  loading: false,
  errorMessage: null,
  themeToggle: themeToggle,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.firstName,
        token: action.payload.token,
        picture: action.payload.picture,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
        picture: "",
        themeToggle: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "THEMES":
      return {
        ...initialState,
        themeToggle: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
