import capitalize from "../utils"


export default function PokemonData({ types, abilities }) {
    return (
        <>
            <div style={{ width: "30vw" }}>
                <table style={{ width: "30vw" }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>{capitalize(types[0].type.name)}</td>
                            {types[1] ? <td>{capitalize(types[1].type.name)}</td> : null}</tr>
                    </tbody>
                </table>
            </div>
            <div style={{ width: "30vw" }}>
                <table style={{ width: "30vw" }}>
                    <thead>
                        <tr>
                        <th style={{ textAlign: "center" }}>Abilities</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{capitalize(abilities[0].ability.name)}</td>
                            {abilities[1] ? <td>{capitalize(abilities[1].ability.name)}</td> : <> </>}
                            {abilities[2] ? <td>{capitalize(abilities[2].ability.name)}</td> : <> </>}
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}