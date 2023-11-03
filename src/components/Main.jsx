import { useEffect, useState } from 'react'
import PokemonInfo from './PokemonInfo';
import Card from './Card';

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, seyQuery] = useState("?limit=10");
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon${query}`);
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokedex, setPokedex] = useState();
  
  
  
    const pokeFun = async () => {
      try {
      const res = await fetch(url);
      const newURL = await res.json();
      
     setLoading(true)
    getPokemon(newURL.results);
      setNextUrl(newURL.next);
      setPrevUrl(newURL.previous);
      setLoading(false)
      
      
        
      
      } catch (error) {
        console.log("nie pobrało URL")
      }
      
    }
  
      const getPokemon = async (newURL) => {
        newURL.map(async(item) => {
            const res = await fetch(item.url);
            const newResult = await res.json();
          
          //  console.log(newResult)
            setPokeData(state => {
              state = [...state, newResult]
              state.sort((a, b) => a.id> b.id ? 1 : -1)
             // console.log(state)
              return state;
              
            })
          }) 
      }
  
  
      useEffect(()=>{
        pokeFun();
    },[url])
  
  
    return (
      <> 
      <div className='poke_row'>
  
      
        <div>
     
        <div className='container_grid'>
       
        <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokedex(poke)}/>
        
        </div>
       <div>
       {prevUrl && <button onClick={() => {
            
            setPokeData([])
            setUrl(prevUrl)
          }}>
            Poprzednia Strona
          </button> }
          {nextUrl &&  <button onClick={() => {
       
            setPokeData([])
            setUrl(nextUrl)
          }}>
            Nasteopna Strona
          </button> }
       </div>
       </div>
       <div>
        <PokemonInfo data={pokedex}/>
       </div>
       </div>
      </>
    )
  }

export default Main