import axios from 'axios';
import { setRepos, setLoadingStatus } from '../../reducers/reposReducer';
import { setUser, setUserStatus } from '../../reducers/userReducer';

const API_URL = 'https://api.github.com'

export const getUser = (searchQuery) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/users/${searchQuery}`);
      await dispatch(setUser(response.data));
      await dispatch(setUserStatus(false));
    } catch (error) {
      if (error.response.status === 404) {
        dispatch(setUserStatus(true));
      }
    }
  }
};

export const getRepos = (searchQuery) => {
  const PER_PAGE = 100;
  let pageNum = 1;
  let resultData = [];
  const getData = async function () {
    const response = await axios.get(`${API_URL}/users/${searchQuery}/repos?per_page=${PER_PAGE}&page=${pageNum}`);

    if (response.data.length) {
      resultData = resultData.concat(response.data)
    }
    if (response.data.length === PER_PAGE) {
      pageNum += 1;
      await getData();
    }
    return resultData;
  };
  return async (dispatch) => {
    try {
      dispatch(setLoadingStatus(true));
      await getData();
      await dispatch(setRepos(resultData));
      dispatch(setLoadingStatus(false));
    } catch (error) {
      dispatch(setLoadingStatus(false));
    }
  }
};