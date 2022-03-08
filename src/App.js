import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import "@fontsource/montserrat";

const style = {
  app: {
    fontFamily: 'Montserrat'
  }
}

function App() {
  return (
    <div className="App" style={style.app}>
      <MainPage/>
    </div>
  );
}

export default App;
