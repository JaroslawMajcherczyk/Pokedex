import React from 'react'

const Card = ({pokemon, loading}) => {

    //console.log(pokemon)
  return (

    <>
    { 
    loading ? <h1>Wczytywanie...</h1> : 
    pokemon.map((item) =>{
        return (
            <>
             <div  key={item.id}>
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