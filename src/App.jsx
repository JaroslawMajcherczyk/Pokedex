import { useEffect, useState } from 'react'

import './App.css'
import Card from './components/Card';

function App() {

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  
  const pokeFun = async () => {
    try {
    setLoading(true)
    const res = await fetch(url)
    const newURL = await res.json();
    
    
    setNextUrl(newURL.next);
    setPrevUrl(newURL.previous);
    getPokemon(newURL.results);
    setLoading(false)
    
    console.log(pokeData);
    
    } catch (error) {
      console.log("nie pobrało URL")
    }
  }

    const getPokemon = async (newURL) => {
      newURL.map(async(item) => {
          const result = await fetch(item.url);
          const newResult = await result.json();
          //console.log(newResult)
          setPokeData(state => {
            state = [...state, newResult]
            state.sort((a, b) => a.id> b.id ? 1 : -1)
            console.log(state)
            return state;
          })
        })
    }

useEffect(() => {
  
  pokeFun();
}, [url]);


  return (
    <> 
      <h1>siema</h1>
      <div className='container_grid'>

      <Card pokemon={pokeData} loading={loading}/>
      </div>
     <div>
     { prevUrl && <button onClick={() => {
          setPokeData([])
          setUrl(prevUrl)
        }}>
          Poprzedni
        </button> }
        { nextUrl && <button onClick={() => {
          setPokeData([])
          setUrl(nextUrl)
        }}>
          Nasteopny
        </button> }
     </div>
    
    </>
  )
}

export default App
