import './Screen.scss'
import iconUser from '../../assets/user.svg'

function NoUserScreen() {
  return (
    <div className="Screen">
      <div className="Screen__icon">
        <img className="Screen__icon_user" src={iconUser} alt="User Icon" />
      </div>
      <p>User not found</p>
    </div>
  );
}

export default NoUserScreen;