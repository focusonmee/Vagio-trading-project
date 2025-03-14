import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
} from "./ActionTypes";
export const clearError = () => ({
  type: "CLEAR_REGISTER_ERROR",
});

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  // const registerUrl = "http://localhost:8080/api/v1/signup";
  const registerUrl =
    "https://vagio-trading-project-be-production.up.railway.app/api/v1/signup";
  try {
    const response = await axios.post(registerUrl, userData);
    const user = response.data;
    const jwt = response.data?.result?.jwt;
    localStorage.setItem("jwt", jwt); // Lưu JWT vào localStorage

    console.log(user);
    dispatch({ type: REGISTER_SUCCESS, payload: user.jwt });
  } catch (error) {
    console.log(error);
    const errorData = error.response?.data;

    // ✅ Chỉ hiển thị lỗi khi trùng email
    if (errorData?.code === 2001) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: "Email đã tồn tại",
      });
    } else {
      dispatch({ type: REGISTER_FAILURE, payload: "" }); // Không lưu lỗi khác
    }
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  const loginUrl =
    "https://vagio-trading-project-be-production.up.railway.app/api/v1/login";
  try {
    const response = await axios.post(loginUrl, userData);
    const jwt = response.data?.result?.jwt;

    if (!jwt) {
      console.error("JWT is missing from API response!");
      return;
    }
    localStorage.removeItem("jwt");
    localStorage.setItem("jwt", jwt); // Lưu JWT vào localStorage
    dispatch({ type: LOGIN_SUCCESS, payload: jwt });
  } catch (error) {
    console.error("Login error:", error);
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  const getUserUrl =
    "https://vagio-trading-project-be-production.up.railway.app/api/v1/users/profile";
  try {
    const response = await axios.get(getUserUrl, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log(user);

    dispatch({ type: GET_USER_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_USER_FAILURE, payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt"); // Xóa token
  dispatch({ type: "LOGOUT_SUCCESS" }); // Cập nhật Redux
};

export const checkDuplicateEmail = async (email) => {
  const checkEmailUrl = `http://localhost:8080/api/v1/users/check-email?email=${email}`;
  try {
    const response = await axios.get(checkEmailUrl);
    return response.data.result;
  } catch (error) {
    console.error("Check email error:", error);
    return false;
  }
};
