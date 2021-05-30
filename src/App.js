import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Search from './components/Search/Search';
import StartScreen from './components/screens/StartScreen';
// import NoUserScreen from './components/screens/NoUserScreen';
import NoRepositoriesScreen from './components/screens/NoRepositoriesScreen';
import User from './components/User/User';
import Repositories from './components/Repositories/Repositories';

function App() {
  const userData = useSelector(state => state.user.userName);
  const reposData = useSelector(state => state.repos.reposItems);

  console.log(userData)
  console.log(reposData)

  return (
    <div className="App">
      <Search />
      <main className="App__main">
        {!userData ? <StartScreen /> :
          <React.Fragment>
            <User userInfo={userData} />
            {reposData && !reposData.length ? <NoRepositoriesScreen /> : <Repositories repos={reposData} />}
          </React.Fragment>
        }
        {/* <StartScreen /> */}
        {/* <NoUserScreen /> */}
        {/* <NoRepositoriesScreen /> */}
      </main>
    </div>
  );
}

export default App;
