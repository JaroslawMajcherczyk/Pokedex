


// eslint-disable-next-line react/prop-types
const Card = ({setOpenModal, pokemon, loading, infoPokemon}) => {


  
  return (
   
     <>

    {loading ? <h1>Wczytywanie...</h1> : 
      // eslint-disable-next-line react/prop-types
      pokemon.map((item, index) =>{
        
        const  style = `card_container ${item.types[0].type.name }`



        return (
            <>
            <div className="card_wrapper">
            <div className={style} key={index}  onClick={() => {
              infoPokemon(item)
              setOpenModal(true)
             } }>
                
                 <div><img className="card_img" src={item.sprites.front_default} alt="" /></div>
                 <div className="card_items">
                 <div className="card_id"># {item.id}</div>
                 <div className="card_title">{item.name}</div>
                 </div>
                
             </div>
             </div>
            </>
        )
   
    })
    }  
    </>
  )
}

export default Card