import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchApiDetailPoke} from '../actions/actionPokemon'
import Loading from '../components/loading'
import { Link } from 'react-router-dom'
const evolutionPoke = ({api_evolution_poke, namePoke, fetchApiDetailPoke, detailPokemons}) => {

  useEffect(() => {
    const api= api_evolution_poke.replace('-species', '');
    fetchApiDetailPoke(api,namePoke)
  }, [namePoke,api_evolution_poke])
  
  return (
    <>
      {
        detailPokemons[namePoke] &&  
        detailPokemons[namePoke].pokemons?
        <Link to={`/pokemon/${detailPokemons[namePoke].pokemons.id}/${namePoke}`}>
          { 
            detailPokemons[namePoke].pokemons.sprites&&
            detailPokemons[namePoke].pokemons.sprites.versions&&
            detailPokemons[namePoke].pokemons.sprites.versions['generation-v']&&
            <img src={
              detailPokemons[namePoke].pokemons.sprites.versions['generation-v']['black-white'].animated.front_default||
              detailPokemons[namePoke].pokemons.sprites.front_default
            } />
          }
        </Link>
        : <Loading loading={true}/>
      }
    </>
  )
}

const mapStateToProps = state => {
  return { 
    detailPokemons: state.collectionPokeDetail,
  }
}
export default connect(mapStateToProps,{fetchApiDetailPoke})(evolutionPoke)
