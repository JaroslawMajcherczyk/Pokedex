

const PokemonInfo = ({data, open, onClose }) => {
    if (!open) return null;
  return (
    <>
       <div onClick={onClose} className=''>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
          <div >
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
    </div>
          </div>
          <div className='btnContainer'>
            
            <button onClick={onClose}  className='btnOutline'>
              <span className='bold'>Zamknij</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default PokemonInfo

