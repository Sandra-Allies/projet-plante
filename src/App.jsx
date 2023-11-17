import './App.css';
import Header from './Components/Header/header';
import PlantList from './Components/PlantList/PlantList';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <div className="plantList">
      <PlantList />
      <PlantList />
      <PlantList />
      </div>
    </div>
  )
}

export default App;
