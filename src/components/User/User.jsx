import './User.scss';
// import photo from '../../assets/photo.png' 

// Delete photo from assets !!!!!

function Search(props) {
  const user = props.userInfo;

  const roundNumber = (num) => {
    if (num > 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num;
  }
  return (
    <div className="User">
      <img className="User__avatar" src={user.avatar_url} alt="User Avatar" />
      <p className="User__name">{user.name}</p>
      <a className="User__link" href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
      <div className="User__network">
        <p className="User__network_followers">{roundNumber(user.followers)} followers</p>
        <p className="User__network_following">{roundNumber(user.following)} following</p>
      </div>
    </div>
  );
}

export default Search;