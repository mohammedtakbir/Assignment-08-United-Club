import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Question></Question>
    </div>
  );
}

export default App;
