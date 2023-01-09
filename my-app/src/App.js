import './App.css';
import ButtonAuth from './components/ButtonAuth'
import ButtonAPI from './components/ButtonInvokeApI'

function App() {
  return (
    <div className="App">
      <h1> <ButtonAuth /> </h1>
      
      <ButtonAPI />
    </div>
  );
}

export default App;
