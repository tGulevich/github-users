import './Search.scss';
import logo from '../../assets/github-logo.svg';
import React, { useState } from 'react'
import { getUser, getRepos } from '../../services/api/requests';
import { useDispatch } from 'react-redux';
import { setCurrPage } from '../../reducers/reposReducer'

function Search() {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const clearValue = () => {
    setValue('');
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    clearValue();
    event.preventDefault();

    if (value) {
      dispatch(getUser(value));
      dispatch(getRepos(value));
      dispatch(setCurrPage(1));
    }
  };

  return (
    <div className="Search">
      <div className="Search__container">
        <img className="Search__logo" src={logo} alt="Github Logo" />
        <form onSubmit={handleSubmit}>
          <input className="Search__bar" value={value} placeholder="Enter GitHub username" onChange={handleChange} type="text" />
        </form>
      </div>
    </div>
  );
}

export default Search;