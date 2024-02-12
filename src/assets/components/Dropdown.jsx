import { useEffect } from "react"
import DropdownItem from "./DropdownItem"

export default function Dropdown(props) {

    return (
        <label htmlFor="pokemon">
            <select name="pokemon" onChange={(e) => console.log(e.target.value)}>
                {props.data.map((item) => <DropdownItem name = {item.name} ></DropdownItem>)}
            </select>

        </label>

    )
}