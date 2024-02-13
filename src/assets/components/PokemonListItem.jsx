import { Link } from "react-router-dom";

export default function PokemonListItem({ name, index }) {
    const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + index + ".png";
    return (
        // <a>{props.name}</a>
        <li style={{listStyleType:"none", border:"solid black 1px"}}>
            <a href={"/" + name}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={imgSrc}/>
            {name}
            </div>
            </a>

        </li>
    )

}