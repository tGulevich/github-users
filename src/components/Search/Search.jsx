import './Search.scss';
import logo from '../../assets/github-logo.svg'

function Search() {
  return (
    <div className="Search">
      <img className="Search__logo" src={logo} alt="Github Logo" />
      <form>
        <input className="Search__bar" placeholder="Enter GitHub username" />
      </form>
    </div>
  );
}

export default Search;