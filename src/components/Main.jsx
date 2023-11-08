import { useEffect, useState } from 'react'
import PokemonInfo from './PokemonInfo';
import Card from './Card';
import Search from './Search';


const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query] = useState("?limit=24");
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokedex, setPokedex] = useState();
    const [namePokemon, setNamePokemon] = useState("")
    const [openModal, setOpenModal] = useState(false)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])
  
    return (
      <> 
       <div className='main_container'>
        <div className='search_wrapper'>
      <Search infoPokemon={poke=>setPokedex(poke)} setOpenModal={setOpenModal} open={openModal}  namePokemon={namePokemon} setNamePokemon={setNamePokemon}/>
        </div>
      <div className='card_wrapper'>
      <Card setOpenModal={setOpenModal} open={openModal}  pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokedex(poke)}/>
      </div>
      <div className='buttons_wrapper'>

       {prevUrl && <button className='btn' onClick={() => {
         setPokeData([])
         setUrl(prevUrl)
        }}>
            Poprzednia Strona
          </button> }
          {nextUrl &&  <button className='btn'  onClick={() => {
            
            setPokeData([])
            setUrl(nextUrl)
          }}>
            Nasteopna Strona
          </button> }
        </div>
      
        <PokemonInfo open={openModal} 
         onClose={() => setOpenModal(false)}  data={pokedex}/>  
</div>

      </>
    )
  }

export default Main