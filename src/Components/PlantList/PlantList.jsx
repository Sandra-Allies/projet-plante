import './PlantList.scss';
import { Icon } from '@iconify/react';

function PlantList({ image, nom, origine, arrosage, tmini, tmaxi }) {

  return (
    <div className="plantList-container">
      <div className="plantList-picture"><img src={image} /> </div>
      <div className="plantList-box">
        <h1>{nom}</h1>
        <p>
          <li className="plantList-texte">
            <strong>Origine de la plante :</strong> {origine}</li>
          <li className="plantList-texte">
            <strong>Arrosage :</strong> {arrosage}</li>
          <li className="plantList-icon">
            <Icon icon="mingcute:low-temperature-line" /> : {tmini}</li>
          <li className="plantList-icon">
            <Icon icon="carbon:temperature-hot" /> : {tmaxi}</li>
        </p>
      </div>
    </div>
  );
}

export default PlantList;