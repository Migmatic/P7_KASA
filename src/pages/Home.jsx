import Banner from '../components/Banner'
import Card from '../components/Card'
import BZH from '../assets/images/bretagne.png'
import { useContext, useState } from 'react'
import { LogementsContext } from '../utils/context'


function Home() {
    let description ="Chez vous, partout et ailleurs";
    const logements  = useContext(LogementsContext);
    const nbrLogements = logements.length;
    const [nbrCardDisplay, setnbrCardDisplay] = useState(6);
    if(nbrCardDisplay>nbrLogements){
        setnbrCardDisplay(nbrLogements)
    }
    return (
        <div class={"home"}>
            <Banner desc={description} img={BZH}/>

            <div class={"cardContainer"}>
            {logements.filter((item, index) => index < nbrCardDisplay).map((logement,index) => (
                <Card title={logement["title"]} index={index} cover={logement["cover"]}/>
            ))}
                <div class="buttonWrapper">
                    <button class="cardContainer__button" onClick={() => setnbrCardDisplay(nbrCardDisplay + 6)}>
                        Afficher Plus 
                    </button>
                    <span>{nbrCardDisplay} affiché sur {nbrLogements}</span>
                </div>
            </div>
        </div>

    );
}

export default Home;
