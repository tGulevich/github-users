import './Screen.scss'
import iconSearch from '../../assets/search.svg'

function StartScreen() {
  return (
    <div className="Screen">
      <div className="Screen__icon">
        <img className="Screen__icon_search" src={iconSearch} alt="Search Icon" />
      </div>
      <p>Start with searching a GitHub user</p>
    </div>
  );
}

export default StartScreen;