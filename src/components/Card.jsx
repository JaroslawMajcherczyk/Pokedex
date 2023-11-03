

const Card = ({pokemon, loading, infoPokemon}) => {

    //console.log(pokemon)
  return (

    <>
    { 
    loading ? <h1>Wczytywanie...</h1> : 
      pokemon.map((item, index) =>{
        return (
            <>
             <div key={index} onClick={() => infoPokemon(item)}>
                 <div>{item.id}</div>
                 <div>{item.name}</div>
                 <div><img src={item.sprites.front_default} alt="" /></div>
             </div>
            </>
        )
   
    })
    }
    
    </>
  )
}

export default Card