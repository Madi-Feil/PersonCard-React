import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Madi"} lastName={"Greeley"} age={"22"} haircolor={"red"}/>
      <PersonCard firstName={"Blake"} lastName={"Greeley"} age={"26"} haircolor={"bald"}/>
      <PersonCard firstName={"Levi"} lastName={"Ackerman"} age={"32"} haircolor={"black"}/>
      <PersonCard firstName={"Naruto"} lastName={"Uzumaki"} age={"32"} haircolor={"yellow"}/>
    </div>
  );
}

export default App;