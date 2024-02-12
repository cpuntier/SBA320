import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function PokemonEntry(){
    const params = useParams();
    const [data,setData] = useState(null);
    useEffect(() => {
        async function getData() {
          // You can await here
          try {
            console.log(params.name);
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+params.name);
            setData(response.data);
          } catch (error) {
            console.log(error)
          }
        }
        getData();
      }, []); // Or [] if effect doesn't need props or state
    

    return (
        <>
        <h2>You are looking at {params.name}</h2>

        </>
    )
}