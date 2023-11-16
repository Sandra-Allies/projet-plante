import './PlantList.scss';
import Data from '../../data.json';
import { Icon } from '@iconify/react';

function PlantList() {
  // console.log(Data.data[0]);
  return (
    <div className="plantList">
      {/* <img src={Data.data[0].picture} /> */}
      <div className="plantList-container">
        <div className="plantList-picture"><img src={Data.data[5].picture} /> </div>
        <div className="plantList-box">
            <h1>{Data.data[5].name}</h1>
            <p>
                <li className="plantList-texte">
                  <strong>Origine de la plante :</strong> {Data.data[5].origine}</li>
                <li className="plantList-texte">
                <strong>Arrosage :</strong> {Data.data[5].arrosage}</li>
                <li className="plantList-icon">
                  <Icon icon="mingcute:low-temperature-line" /> : {Data.data[5].tmini}</li>
                <li className="plantList-icon">
                  <Icon icon="carbon:temperature-hot" /> : {Data.data[5].tmaxi}</li>
            </p>
        </div>
      </div>
    </div>
  )
}

export default PlantList;