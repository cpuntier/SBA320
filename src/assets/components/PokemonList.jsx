import { useEffect, useState } from "react"
import PokemonListItem from "./PokemonListItem"
import axios from "axios";

export default function PokemonList(props) {
    const [filterText, setFilterText] = useState("");
    const [data, setData]  = useState([]);


    
    useEffect(() => {
        async function getData() {
          try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=493");
            setData(response.data.results);
            console.log(data);
          } catch (error) {
            console.log(error)
          }
        }
        getData();
      }, []); 



    return (

        <>
        { data ? 
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <input type="text" placeholder="Search here(try gon)" onChange={(e) => setFilterText(e.target.value)} style={{ width: "200px", marginBottom:"10px"}}></input><br></br>
                <ul style={{ width: "350px", height: "500px", overflow: "auto", zIndex: 1, position:"absolute"}}>

                    {data.map((item, index) => {
                        if (filterText.length > 2) {
                            if (item.name.indexOf(filterText.toLowerCase()) !== -1) {
                                return <PokemonListItem name={item.name} index={index + 1} />
                            }
                        }
                    })}
                </ul>

            </div> : <h2>Loading</h2>
}
        </>

    )
}