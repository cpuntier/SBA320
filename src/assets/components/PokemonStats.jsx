import StatRow from "./StatRow"

export default function PokemonStats({ stats }) {
    return (<>

        <div><h2 style={{ textAlign: "center" }}>Stats</h2></div>
        <div className="Stats">
            {stats.map((stat) => {return <StatRow key = {stat.stat.name}stat = {stat}/>})}

        </div>



    </>)
};