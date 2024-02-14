import PokemonList from "../components/PokemonList";

export default function Home(){


    
    return(
        <>
    <h1 style={{textAlign:"center"}}>Search for a Pokemon Below</h1>
    <PokemonList ></PokemonList>
    <h2 style={{textAlign:"center",}}>Welcome!</h2>
    <h3 style={{textAlign: "center"}}>Use the search bar above to search for a Pokemon.Or click the button on the top right to go to a random page!</h3>
    {/* <PokeCarousel></PokeCarousel> */}
    </>
    )

}