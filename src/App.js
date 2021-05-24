import './App.scss';
import Search from './components/Search/Search';
import StartScreen from './components/screens/StartScreen';
import NoUserScreen from './components/screens/NoUserScreen';
import NoRepositoriesScreen from './components/screens/NoRepositoriesScreen';
import User from './components/User/User';



function App() {
  return (
    <div className="App">
      <Search />
      <main className="App__main">
        <User />
        {/* <StartScreen /> */}
        {/* <NoUserScreen /> */}
        <NoRepositoriesScreen />
      </main>
    </div>
  );
}

export default App;
