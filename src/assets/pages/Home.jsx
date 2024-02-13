import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import axios from "axios";
export default function Home(){
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState([])


    useEffect(() => {
        async function getData() {
          try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=493");
            setData(response.data);
          } catch (error) {
            console.log(error)
          }
        }
        getData();
      }, []); 
    


    return(
        <>
    <h1>Search for a Pokemon Below</h1>
    {data ? <PokemonList filteredData = {filteredData} data = {data.results} setFilteredData = {setFilteredData}></PokemonList> : <h1>Loading</h1>}
    </>
    )

}