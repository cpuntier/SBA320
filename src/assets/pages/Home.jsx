import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import axios from "axios";
export default function Home(){
    const [data, setData] = useState(null);


    useEffect(() => {
        async function getData() {
          // You can await here
          try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
            setData(response.data);
          } catch (error) {
            console.log(error)
          }
        }
        getData();
      }, []); // Or [] if effect doesn't need props or state
    


    return(
        <>
    <h1>Hello</h1>
    {data ? <Dropdown data = {data.results}></Dropdown> : <h1>Loading</h1>}
    </>
    )

}