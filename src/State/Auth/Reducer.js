import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "./ActionTypes";

const initialState = {
  user: null,
  jwt: null,
  loading: false,
  error: null,
  emailError: null, // 🟢 Thêm dòng này
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, loading: false, jwt: action.payload };

    case GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload, // Lưu lỗi vào state
      };
    case "CLEAR_REGISTER_ERROR":
      return { ...state, error: "" }; // ✅ Xóa lỗi khi mở trang

    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, loading: false, error: action.payload, jwt: null };

    default:
      return state;

    case "LOGOUT_SUCCESS":
      return { ...initialState }; // Reset về mặc định
  }
};

export default authReducer;
