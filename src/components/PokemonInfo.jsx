

const PokemonInfo = ({data}) => {
 
  return (
    <>
    { !data ? "" :  (
        
        <>
        
        <h1>{data.name}</h1>
        <img src={data.sprites.front_default} alt="" />
        <h3>{data.types[0].type.name } {!data.types[1] ? "" : <span>/ {data.types[1].type.name} </span>  }</h3>
  
        
           
           {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name} : {poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
        
        </>
    )
      
        
        
    }
    </>
   
  )
}

export default PokemonInfo

{/* <h1>{item.name}</h1>
<div className='pokemon_info'>
<h1>Charmander</h1>
<img src="#" alt="" />
<h3>type</h3>
<ul>
<li>item 1</li>
<li>item 1</li>
<li>item 1</li>
<li>item 1</li>
<li>item 1</li>
<li>item 1</li>
</ul>
</div> */}