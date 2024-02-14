import { Link, redirect } from "react-router-dom"
import { useLocation } from "react-router-dom"
import PokemonList from "./PokemonList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NavBar() {
    const path = useLocation().pathname;
    const [newLink,setNewLink] = useState("/")
    console.log("You are here", path)

    

    useEffect(() => {
        async function randomGet() {
            try {
                const randomNumber = Math.floor(Math.random() * 492);
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1&offset="+randomNumber)
                const newLink = "/" + response.data.results[0].name;
                console.log(newLink)
                setNewLink(newLink);
    
            } catch (error) {
                console.log(error)
            }
        }
        randomGet();
        console.log("This is new link",newLink)
    },[])


    return (
        <div style={{ display: "flex", justifyContent: "space-between", border: "solid black 1px", backgroundColor: "#F6E8EA" }}>
            <Link to="/">
                <button>Home</button>
            </Link>
            {path !== "/" ? <PokemonList /> : <></>}        
            <a href={newLink}><button>Random Pokemon</button></a>

        </div>
    )
}