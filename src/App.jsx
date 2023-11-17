import './App.css';
import Header from './Components/Header/header';
import PlantList from './Components/PlantList/PlantList';
import Form from './Components/Form/Form';
import Data from './data';

function App() {
  const data = Data;

  return (
    <div className="App">
      <Header />
      <Form />
      <div className="plantList">
        {data.map((plante) => (
          <PlantList 
          key={plante.id}
          image={plante.picture}
          origine={plante.origine}
          nom={plante.name}
          arrosage={plante.arrosage}
          tmini={plante.tmini}
          tmaxi={plante.tmaxi}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
