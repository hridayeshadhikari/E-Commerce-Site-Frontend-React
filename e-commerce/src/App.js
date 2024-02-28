import './App.css';
import HomePage from './Pages/HomePage';
import Footer from './User/Component/Footer/Footer';
import Navbar from './User/Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <HomePage/>
        <Footer/>
      
    </div>
  );
}

export default App;
