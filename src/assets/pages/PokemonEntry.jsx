import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import "../styles/PokemonEntry.css"
import PokemonData from "../components/PokemonData";
import PokemonStats from "../components/PokemonStats";

export default function PokemonEntry() {

  const params = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      // You can await here
      try {
        console.log(params.name);
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + params.name);
        setData(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, []); // Or [] if effect doesn't need props or state


  return (
    <>
      {data ? <>
        <div className="PokeContainer">
          <div className="art">
            <h1 style={{ textAlign: 'center' }}>{params.name.charAt(0).toUpperCase() + params.name.slice(1)}</h1>
            <img src={data.sprites.other["official-artwork"].front_default} style={{width : "40vw"}} />
          </div>
          <div className="dataContainer">
            <div className="Data">
              <PokemonData types={data.types} abilities = {data.abilities} />
            </div>
            <PokemonStats stats = {data.stats}/>

          </div>

        </div>

      </> : <h2>LOADING!!!</h2>}

    </>
  )
}