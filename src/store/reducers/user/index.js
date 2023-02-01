import {
  GET_USER_SUCCESS,
  SEND_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USERS_SUCCESS,
} from "../../actions/user";

const userReducer = ({ types, mapActionToKey }) => {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expected types to be an array of three elements.");
  }
  if (!types.every((t) => typeof t === "string")) {
    throw new Error("Expected types to be strings.");
  }
  if (typeof mapActionToKey !== "function") {
    throw new Error("Expected mapActionToKey to be a function.");
  }
  const initialState = {
    users: {
      data: [],
      total: 0,
    },
    userData: {
      id: "",
      name: "",
      lastName: "",
      userName: "",
      isAdmin: false,
      password: "",
      isKavak: false
    },
    sent: {},
    loading: false,
  };
  const [requestType, successType, failureType] = types;
  return (state = initialState, action) => {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          loading: true,
          sent: initialState.sent
        };
      case successType:
        return {
          ...state,
          users: {
            data: action.response ? action.response.data : [],
            total: action.response ? action.response.total : 0,
          },
          userData: initialState.userData,
          loading: false,
        };

      case GET_USER_SUCCESS:
        return {
          ...state,
          userData: action.response,
          loading: false,
        };
      case SEND_USER_SUCCESS:
        return {
          ...state,
          sent: action.response,
        };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          sent: action.response,
        };
      case DELETE_USERS_SUCCESS: {
        let filteredList = state.users.data;
        if (action.response.data.length > 0) {
          for (var id in action.response.data) {
            filteredList = filteredList.filter(
              (user) => user.id !== action.response.data[id]
            );
          }
        }
        return {
          ...state,
          users: {
            data: filteredList,
            total: filteredList.length,
          },
        };
      }
      case failureType:
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };
};

export default userReducer;
