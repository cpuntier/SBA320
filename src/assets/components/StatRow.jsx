export default function StatRow({ stat }) {
    let stat_width = (stat.base_stat / 230) * 60;
    stat_width = stat_width + "vw";
    console.log((stat.base_stat/230) * 255/100);
    

    // console.log(barColor)
    return (
        <>
            <div style={{ display: "flex"}}>
                <h3 style={{width : "100px"}}>{stat.stat.name.toUpperCase()}</h3>
                <div style={{ width: stat_width, backgroundColor: "black" , height: "10px", margin: "auto 0", }}></div>
                <h3 style={{margin:"auto 0"}}> {stat.base_stat}</h3>
            </div>
        </>
    )
}