import './User.scss';
import photo from '../../assets/photo.png'

function Search() {
  return (
    <div className="User">
      <img className="User__avatar" src={photo} alt="User Avatar" />
      <p className="User__name">Dan Abramov</p>
      <a className="User__link" src="#">gaearon</a>
      <div className="User__network">
        <p className="User__network_followers">65.8k followers</p>
        <p className="User__network_following">171 following</p>
      </div>
    </div>
  );
}

export default Search;