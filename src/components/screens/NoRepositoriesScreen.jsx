import './Screen.scss'
import iconUser from '../../assets/repository.svg'

function NoUserScreen() {
  return (
    <div className="Screen Screen_lg Screen_half">
      <div className="Screen__icon">
        <img className="Screen__icon_repository" src={iconUser} alt="User Icon" />
      </div>
      <p>Repository list is empty</p>
    </div>
  );
}

export default NoUserScreen;