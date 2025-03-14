import axios from "axios";
import {
  FETCH_COIN_BY_ID_REQUEST,
  FETCH_COIN_DETAILS_FAILURE,
  FETCH_COIN_DETAILS_REQUEST,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_MARKET_CHART_FAILURE,
  FETCH_MARKET_CHART_REQUEST,
  FETCH_MARKET_CHART_SUCCESS,
} from "./ActionType";
import { FETCH_COIN_BY_ID_SUCCESS } from "./ActionType";
import { FETCH_COIN_BY_ID_FAILURE } from "./ActionType";
import api, { API_BASE_URL } from "../../config/api";

export const getCoinList = (page) => async (dispatch) => {
  dispatch({ type: FETCH_COIN_BY_ID_REQUEST });

  try {
    const response = await axios.get(`${API_BASE_URL}/coins?page=${page}`);
    const data = response.data;
    console.log(data);
    dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error });
  }
};

export const getTop50CoinList = () => async (dispatch) => {
  dispatch({ type: FETCH_MARKET_CHART_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/coins/top50`);
    const data = response.data;
    console.log(data);
    dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error });
  }
};

export const fetchMarketChart =
  ({ coinId, days, jwt }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_MARKET_CHART_REQUEST }); // Đúng action type

    try {
      const response = await api.get(
        `${API_BASE_URL}/coins/${coinId}/chart?days=${days}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );
      const data = response.data;
      console.log(data);
      dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: data }); // Đúng action type
    } catch (error) {
      dispatch({ type: FETCH_MARKET_CHART_FAILURE, payload: error }); // Đúng action type
    }
  };

export const fetchCoinById = (coinId) => async (dispatch) => {
  dispatch({ type: FETCH_COIN_BY_ID_REQUEST });
  try {
    const response = await api.get(`${API_BASE_URL}/coins/${coinId}`);
    dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error });
  }
};

export const fetchCoinDetails =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_COIN_DETAILS_REQUEST });
    try {
      const response = await api.get(
        `${API_BASE_URL}/coins/details/${coinId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );
      dispatch({ type: FETCH_COIN_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_COIN_DETAILS_FAILURE, payload: error });
    }
  };
