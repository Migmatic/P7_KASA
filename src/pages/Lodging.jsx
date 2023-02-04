import React from 'react';
import Collapse from '../components/Collapse'
import Carousel from '../components/Carousel'
import Tag from '../components/Tag'
import { useContext} from 'react'
import { LogementsContext } from '../utils/context'

function Lodging() {
  /*** Traitements des données ***/
  let currentUrl = document.location.href;
  const lodgingNumber = currentUrl.split("lodging/")[1];
  const logements  = useContext(LogementsContext);
  let logement = logements[lodgingNumber];
  /*** Équipements ***/
  let equipementString = [];
  let test = <> wesh la {logement.equipments} ezfr</>
  logement.equipments.map((equipement,index) => (
      equipementString.push(<li>{equipement}</li>)
    
    ))
  /*** Name ***/
  let nameTwo = <>{logement.host.name.split(' ')[0]} <br/> {logement.host.name.split(' ')[1]} </>
  /*** RATING ***/
  let ratingArray =[]
  let Star = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"/></svg>
  for(let i = 0; i < 5; i++){
    if(i < logement.rating){
      ratingArray.push(<li class="redStar">{Star}</li>)
    }
    else{
      ratingArray.push(<li class="grayStar">{Star}</li>)
    }
  }

  return (
    <div class="lodging">
      <Carousel img={logement.pictures} />
      <div class="lodging__top">
        <div class="lodging__topLeft">
          <h2>{logement.title}</h2>

          <h3>{logement.location}</h3>

          <div class="lodging__tags">
            {logement.tags.map((tag) => (
            <Tag tagName={tag}/>
            ))}
          </div>
        </div>

        <div class="lodging__topRight">
          <div class="lodging__host">
            <p>{nameTwo}</p>
            <img src={logement.host.picture} alt={logement.host.name}/>
          </div>

          <ul class="lodging__rating">
              {ratingArray}
          </ul>
        </div>
      </div>

      <div class="lodging__bot">
      <Collapse title="Description" >{logement.description}</Collapse>
      <Collapse title="Équipements" desc={test}><ul>{equipementString}</ul></Collapse>
      </div>

    </div>
  );
}

export default Lodging;
