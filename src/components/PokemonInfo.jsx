/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const PokemonInfo = ({ data, open, onClose }) => {
  if (!open) return null;
  const style = `info_type ${data.types[0].type.name}`
  const style2 = `${!data.types[1] ? "" : data.types[1].type.name}`
  return (
    <>
      <div onClick={onClose} >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer '
        >

          <div >
            {!data ? "" : (
              <>

                <div className='info_container'>
                  <div className="info_wrapper">
                    <p className="info_id"># {data.id}</p>
                    <h1 className="info_title">{data.name}</h1>
                    <img className="info_img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="info_types">
                      {/* <p className={style}>{data.types[0].type.name }</p> */}
                      <p className={style}>{data.types[0].type.name}</p>
                      <p>{!data.types[1] ? "" : <span className={style2}> {data.types[1].type.name} </span>}</p>
                    </div>
                  </div>

                  <div>
                    {
                      !data ? "" : data.stats.map(poke => {
                        return (
                          <>
                            <div className="state_wrapper">
                              <h3 className="state_title">{poke.stat.name} : {poke.base_stat}</h3>

                            </div>

                          </>
                        )
                      })
                    }
                  </div>
                </div>

              </>
            )
            }
            <div className='btn_container'>

              <button onClick={onClose}  >
                <span >Zamknij</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </>

  )
}

export default PokemonInfo

