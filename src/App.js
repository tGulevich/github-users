import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Search from './components/Search/Search';
import StartScreen from './components/screens/StartScreen';
import NoUserScreen from './components/screens/NoUserScreen';
import NoRepositoriesScreen from './components/screens/NoRepositoriesScreen';
import User from './components/User/User';
import Repositories from './components/Repositories/Repositories';

function App() {
  const userData = useSelector(state => state.user.userName);
  const userStatus = useSelector(state => state.user.isNotFound);
  const reposData = useSelector(state => state.repos.reposItems);

  console.log(userStatus)
  console.log(reposData)

  let mainBlock;
  if (!userData) {
    mainBlock = <StartScreen />
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
        {mainBlock}
        {/* {!userData ? <StartScreen /> :
          <React.Fragment>
            <User userInfo={userData} /> */}
        {/* {reposData && !reposData.length ? <NoRepositoriesScreen /> : <Repositories repos={reposData} />} */}
        {/* {reposData ? <Repositories repos={reposData} /> : <NoRepositoriesScreen />}
          </React.Fragment>
        } */}
        {/* <StartScreen /> */}
        {/* <NoUserScreen /> */}
        {/* <NoRepositoriesScreen /> */}
      </main>
    </div>
  );
}

export default App;
