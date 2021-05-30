import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Search from './components/Search/Search';
import StartScreen from './components/screens/StartScreen';
import NoUserScreen from './components/screens/NoUserScreen';
import NoRepositoriesScreen from './components/screens/NoRepositoriesScreen';
import User from './components/User/User';
import Repositories from './components/Repositories/Repositories';
import Loader from './components/Loader/Loader'

function App() {
  const userData = useSelector(state => state.user.userName);
  const userStatus = useSelector(state => state.user.isNotFound);
  const reposData = useSelector(state => state.repos.reposItems);
  const loadingStatus = useSelector(state => state.repos.isLoading);

  let mainBlock;
  if (!userData && !userStatus) {
    mainBlock = <StartScreen />
  } else if (loadingStatus) {
    mainBlock = <Loader />
  } else if (userStatus) {
    mainBlock = <NoUserScreen />
  } else {
    let reposBlock;
    if (reposData && !reposData.length) {
      reposBlock = <NoRepositoriesScreen />
    } else if (reposData && reposData.length) {
      reposBlock = <Repositories repos={reposData} />
    }
    mainBlock = <React.Fragment>
      <User userInfo={userData} />
      {reposBlock}
    </React.Fragment>
  }

  return (
    <div className="App">
      <Search />
      <main className="App__main">
        <div className="App__container">
          {mainBlock}
        </div>
      </main>
    </div>
  );
}

export default App;
