import {useState } from "react"
import PokemonListItem from "./PokemonListItem"

export default function PokemonList(props) {
    const [filterText, setFilterText] = useState("");

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input type="text" placeholder="Enter here" onChange={(e) => setFilterText(e.target.value)} style={{ width: "100px" }}></input><br></br>
                <ul style={{ width: "350px", height: "500px", overflow: "auto" }}>

                    {/* <select name="pokemon" onChange={(e) =>window.location.href=e.target.value} style={{width:"177px", height:"21px"}}> */}
                    {props.data.map((item, index) => {
                        if (filterText.length > 2) {
                            if (item.name.indexOf(filterText.toLowerCase()) !== -1) {
                                return <PokemonListItem name={item.name} index={index + 1} />
                            }
                        }
                    })}
                </ul>

            </div>
        </>

    )
}