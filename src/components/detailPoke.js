import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchApiDetailPoke} from '../actions/actionPokemon'
import {API_FETCH_POKEMON_DETAIL_IMG} from '../constants/urlApi'
import Evolution from '../components/evolutionPoke'

function detailPoke({pokemons,fetchApiDetailPoke,detailPokemons}) {
  
  useEffect(() => {
    if(pokemons.species){
    const api= pokemons.species.url;
    fetchApiDetailPoke(api,pokemons.name)
    }
  }, [fetchApiDetailPoke,pokemons.species])

  return (
    <>
      { detailPokemons[pokemons.name] &&
        <div className="columns detail-poke-init">
          <div className="pokemon column">
            <div className="card has-text-weight-bold has-text-white card--blastoise">
              <div className="title">Info {pokemons.name}
              {detailPokemons[pokemons.name].pokemons.sprites&&
              detailPokemons[pokemons.name].pokemons.sprites.versions&&
              detailPokemons[pokemons.name].pokemons.sprites.versions['generation-v']&&
              <img src={
                detailPokemons[pokemons.name].pokemons.sprites.versions['generation-v']['black-white'].animated.front_default||
                detailPokemons[pokemons.name].pokemons.sprites.front_default
              }/>}
              </div>
              <div className="content-info-detail-poke">
                <div className="info-detail-poke-item">
                  <div className="cate-info">color: 
                    {detailPokemons[pokemons.name].pokemons.color && 
                    <span className="value-cate-info"> 
                      <Link to={`/pokemon-color/${detailPokemons[pokemons.name].pokemons.color.url.split('/')[detailPokemons[pokemons.name].pokemons.color.url.split('/').length-2]}`}
                      style={{color:`${detailPokemons[pokemons.name].pokemons.color.name}`}}
                      >{detailPokemons[pokemons.name].pokemons.color.name}</Link>
                    </span>}
                  </div>
                  <div className="cate-info">exp: 
                      <span className="value-cate-info" style={{color:'#64fc64'}}> 
                      {pokemons.base_experience} xp
                      </span>
                  </div>
                  <div className="cate-info">egg groups: 
                    {detailPokemons[pokemons.name].pokemons.egg_groups &&  
                    <span  className="value-cate-info">
                      {detailPokemons[pokemons.name].pokemons.egg_groups.map((item,index)=>
                      <Link key={index} to={`/egg-group/${item.url.split('/')[item.url.split('/').length-2]}`}>{index !== 0 && ', '}{ item.name}</Link>)}
                    </span>
                    }
                  </div>
                  <div className="cate-info">habitat: 
                    {detailPokemons[pokemons.name].pokemons.habitat ? 
                    <span className="value-cate-info"> 
                      <Link to={`/pokemon-habitat/${detailPokemons[pokemons.name].pokemons.habitat.url.split('/')[
                          detailPokemons[pokemons.name].pokemons.habitat.url.split('/').length-2
                        ]}`
                      }
                      >{detailPokemons[pokemons.name].pokemons.habitat.name.replace('-',' ')}</Link>
                      {detailPokemons[pokemons.name].pokemons.habitat.name==='cave'&&'🕳️'||
                      detailPokemons[pokemons.name].pokemons.habitat.name==='forest'&&'🌲'||
                      detailPokemons[pokemons.name].pokemons.habitat.name==='grassland'&&'🌿'||
                      detailPokemons[pokemons.name].pokemons.habitat.name==='rare'&&'💫'||
                      detailPokemons[pokemons.name].pokemons.habitat.name==='rough-terrain'&&'🎢'||
                      detailPokemons[pokemons.name].pokemons.habitat.name==='sea'&&'🌊'||
                      detailPokemons[pokemons.name].pokemons.habitat.name==='urban'&&'🏰'||
                      detailPokemons[pokemons.name].pokemons.habitat.name==='waters-edge'&&'🏖️'||
                      detailPokemons[pokemons.name].pokemons.habitat.name==='mountain'&&'⛰️'}
                    </span>:
                    <span className="value-cate-info">❔</span>
                    }
                  </div>
                  <div className="cate-info">hatching eggs time: 
                      <span className="value-cate-info"> 
                      {detailPokemons[pokemons.name].pokemons.hatch_counter} Day
                      </span>
                  </div>
                  <div className="cate-info">evolution: 
                    <span className="value-cate-info"> 
                    {detailPokemons[pokemons.name].pokemons.evolves_from_species &&
                      detailPokemons[pokemons.name].pokemons.evolves_from_species !==null? 
                      <Evolution 
                      namePoke = {detailPokemons[pokemons.name].pokemons.evolves_from_species.name}
                      api_evolution_poke={detailPokemons[pokemons.name].pokemons.evolves_from_species.url}/>
                      :' 🥚'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

const mapStateToProps = state => {
  return { 
    detailPokemons: state.collectionPokeDetail,
  }
}

export default connect(mapStateToProps,{fetchApiDetailPoke})(detailPoke)
