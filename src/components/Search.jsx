import{ useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const Search = ({infoPokemon, setOpenModal, namePokemon, setNamePokemon}) => {
const [pokeData2, setPokeData2] = useState([])


let onePokemon = async () => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseUrl}pokemon/${namePokemon}`);
    const data = await res.json();

    if(namePokemon === data.name){
     setPokeData2(data) 
    }else{
        console.log("nie ma")
    }
}

useEffect(() => {
    onePokemon()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [namePokemon]);

 //console.log(pokeData2.types[0].type.name)
  return (
<div className='search_container'>
        <input 
        className='search_input'
        type="text"  
        placeholder='szukaj pokemona'
        id="name" 
        onChange={(e)=>{setNamePokemon(e.target.value)}}
        value={namePokemon}/>

    {namePokemon !== pokeData2.name ? "" :   
    
    <div className={`card_container ${pokeData2.types[0].type.name}`}
  onClick={() => {
    infoPokemon(pokeData2)
    setOpenModal(true)
   } }
  >
        <img className='card_items' src={pokeData2.sprites.front_default} alt="" /> 
        <p className='card_id'># {!pokeData2 ? "" : pokeData2.id}</p> 
        <p className='card_title'>{!pokeData2 ? "" : pokeData2.name}</p>
  </div>
}
    </div>
  )
}

export default Search