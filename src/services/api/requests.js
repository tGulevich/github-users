import axios from 'axios';
import { setRepos } from '../../reducers/reposReducer';
import { setUser } from '../../reducers/userReducer';

const API_URL = 'https://api.github.com'

export const getUser = (searchQuery) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/users/${searchQuery}`);
      await dispatch(setUser(response.data));
    } catch (error) {
      console.log(error);
    }
  }
};

export const getRepos = (searchQuery) => { // !!!!!!!
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/users/${searchQuery}/repos?sort=updated`);
      console.log(response)
      await dispatch(setRepos(response.data));
    } catch (error) {
      console.log(error);
    }
  }
};