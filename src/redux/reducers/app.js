const initialState = {
  email: "",
  password: "",
  name: "",
  surname: "",
  user: "",
  hasAccount: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_SURNAME":
      return { ...state, surname: action.payload };
    case "SET_ONLINE":
      return { ...state, hasAccount: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};

export default app;
