import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchApiDetailPoke} from '../actions/actionPokemon'
import {API_FETCH_POKEMONS, API_FETCH_POKEMON_DETAIL_IMG} from '../constants/urlApi'
import Loading from '../components/loading'

const DetailPokemonContainer = ({fetchApiDetailPoke, detailPokemons}) => {

  const linkUrl = window.location.pathname
  const namePokemon = linkUrl.split('/')[linkUrl.split('/').length-1]
  const idPokemon = linkUrl.split('/')[linkUrl.split('/').length-2]

  //Call Info
  useEffect(() => {
    const api= `${API_FETCH_POKEMONS}/${idPokemon}`;
    fetchApiDetailPoke(api,namePokemon)
  }, [fetchApiDetailPoke])

  // Call Info Detail
    
  detailPokemons[namePokemon] && useEffect(() => {
      const api= detailPokemons[namePokemon].species.url;
      fetchApiDetailPoke(api,namePokemon)
    }, [fetchApiDetailPoke])

    console.log(detailPokemons[namePokemon] && 
      detailPokemons[namePokemon].pokemons)

  return (
    <>{
      detailPokemons[namePokemon] &&
      <div className="container-detail-poke">
        <div className="columns">
          <div className="pokemon column">
            <div className="card has-text-weight-bold has-text-white card--blastoise">
              <div className="card-image">
                <div className="card-image-container"><img src={`${API_FETCH_POKEMON_DETAIL_IMG}/other/dream-world/${idPokemon}.svg`} /></div>
              </div>
              <div className="card-content has-text-centered">
                <div className="main">
                  <div className="title has-text-white">{detailPokemons[namePokemon].pokemons.name}</div>
                  <div className="group-info-poke">
                    {detailPokemons[namePokemon].pokemons.stats && 
                    detailPokemons[namePokemon].pokemons.stats.map((item,index)=>
                      <div className="item-info-poke" key={index}>
                        {item.stat.name} : {item.base_stat}
                        <div className="hp" style={{width:`${item.base_stat}px`}}></div>
                      </div>
                    )}
                    
                  </div>
                </div>
                <div className="stats columns">
                  <div className="column has-text-centered">
                  {detailPokemons[namePokemon].pokemons.types && 
                  detailPokemons[namePokemon].pokemons.types.map(item=>
                    item.type.name==='fire'&&'🔥'||
                    item.type.name==='grass'&&'🌳'||
                    item.type.name==='poison'&&'☠️'||
                    item.type.name==='flying'&&'✈️'||
                    item.type.name==='bug'&&'🐞'||
                    item.type.name==='fighting'&&'⚔️'||
                    item.type.name==='ground'&&'⛰️'||
                    item.type.name==='rock'&&'🗿'||
                    item.type.name==='ghost'&&'👻'||
                    item.type.name==='steel'&&'🔪'||
                    item.type.name==='electric'&&'⚡'||
                    item.type.name==='psychic'&&'🔮'||
                    item.type.name==='ice'&&'❄️'||
                    item.type.name==='dragon'&&'🐉'||
                    item.type.name==='dark'&&'⚫'||
                    item.type.name==='fairy'&&'🧚🏻‍♀️'||
                    item.type.name==='unknown'&&'❔'||
                    item.type.name==='normal'&&'😐'||
                    item.type.name==='shadow'&&'👥'||
                    item.type.name==='water'&&'💧'||'❔'
                  )}<br />
                    <span className="tag">Type</span>
                  </div>
                  <div className="column has-text-centered center-column">
                    <span className="color-white">{detailPokemons[namePokemon].pokemons.weight} lbs</span>
                    <br />
                    <span className="tag">Weight</span>
                  </div>
                  <div className="column has-text-centered">
                  <span className="color-white">{detailPokemons[namePokemon].pokemons.height} m</span> 
                  <br />
                    <span className="tag">Height</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns detail-poke-init">
          <div className="pokemon column">
            <div className="card has-text-weight-bold has-text-white card--blastoise">
              <div className="title">Info {detailPokemons[namePokemon].pokemons.name}</div>
            </div>
          </div>
        </div>
      </div>
        }
      {/* <Loading detailPokemons[namePokemon] && loading={ detailPokemons[namePokemon].loading}/> */}
    </>
  )
}
const mapStateToProps = state => {
  return { 
    detailPokemons: state.collectionPokeDetail,
  }
}

export default connect(mapStateToProps,{fetchApiDetailPoke})(DetailPokemonContainer)
