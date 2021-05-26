import './Search.scss';
import logo from '../../assets/github-logo.svg';
import { getUser, getRepos } from '../../services/api/requests';
import { useDispatch, useSelector } from 'react-redux';

function Search() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.userName)


  const handleChange = (event) => {
    dispatch({ type: 'GET_USER_NAME', payload: event.target.value });
  };

  const handleSubmit = (event) => {

    console.log(user);
    if (user) {
      getUser(user);
      getRepos(user);
    }
    event.preventDefault();
  };

  return (
    <div className="Search">
      <img className="Search__logo" src={logo} alt="Github Logo" />
      <form onSubmit={handleSubmit}>
        <input className="Search__bar" placeholder="Enter GitHub username" onChange={handleChange} />
      </form>
    </div>
  );
}

export default Search;