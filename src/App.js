import './App.scss';
import Search from './components/Search/Search';
import StartScreen from './components/screens/StartScreen';
import NoUserScreen from './components/screens/NoUserScreen';
import NoRepositoriesScreen from './components/screens/NoRepositoriesScreen';
import User from './components/User/User';
import Repositories from './components/Repositories/Repositories';


function App() {
  return (
    <div className="App">
      <Search />
      <main className="App__main">
        <User />
        {/* <StartScreen /> */}
        {/* <NoUserScreen /> */}
        {/* <NoRepositoriesScreen /> */}
        <Repositories />
      </main>
    </div>
  );
}

export default App;
