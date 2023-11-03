


const Card = ({setOpenModal, pokemon, loading, infoPokemon}) => {
  
  return (

    <>
    { 
    loading ? <h1>Wczytywanie...</h1> : 
      pokemon.map((item, index) =>{
        return (
            <>
             <div key={index}  onClick={() => {
              infoPokemon(item)
              setOpenModal(true)
             } }>
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