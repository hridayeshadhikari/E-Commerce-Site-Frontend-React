import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './User/Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
