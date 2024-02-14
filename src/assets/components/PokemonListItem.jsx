import { Link } from "react-router-dom";
import capitalize from "../utils";


export default function PokemonListItem({ name, index }) {
    const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + index + ".png";
    return (
        // <a>{props.name}</a>
        <li key = {name} style={{listStyleType:"none", border:"solid black 1px", backgroundColor:"gray"}}>
            <a href={"/" + name}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={imgSrc}/>
            {capitalize(name)}
            </div>
            </a>

        </li>
    )

}