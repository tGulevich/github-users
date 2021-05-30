import axios from 'axios';
import { setRepos } from '../../reducers/reposReducer';
import { setUser, setUserStatus } from '../../reducers/userReducer';

const API_URL = 'https://api.github.com'

export const getUser = (searchQuery) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/users/${searchQuery}`);
      await dispatch(setUser(response.data));
      await dispatch(setUserStatus(false));
      console.log(response.status);
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 404) {
        await dispatch(setUserStatus(true));
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
    console.log(response.data)
    if (response.data.length) {
      resultData = resultData.concat(response.data)
    }
    if (response.data.length === PER_PAGE) {
      pageNum += 1;
      await getData();
    }
    console.log(resultData)
    return resultData;
  };
  return async (dispatch) => {
    try {
      await getData();
      await dispatch(setRepos(resultData));

    } catch (error) {
      console.log(error);
    }
  }
};