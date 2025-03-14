// src/State/rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./authReducer"; // 🟢 Thêm dòng này
import registerReducer from "./registerReducer"; // 🟢 Nếu có

const rootReducer = combineReducers({
  auth: authReducer, // 🟢 Đặt tên là `auth` để khớp với `useSelector`
  register: registerReducer, // 🟢 Nếu có thêm reducer khác
});

export default rootReducer;
