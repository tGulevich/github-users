import './App.scss';
import Search from './components/Search/Search';
import StartScreen from './components/screens/StartScreen';
import NoUserScreen from './components/screens/NoUserScreen';
import NoRepositoriesScreen from './components/screens/NoRepositoriesScreen';


function App() {
  return (
    <div className="App">
      <Search />
      <main className="App__main">
        <StartScreen />
        {/* <NoUserScreen /> */}
        {/* <NoRepositoriesScreen /> */}
      </main>
    </div>
  );
}

export default App;
