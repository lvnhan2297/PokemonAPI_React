import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchApiDetailPoke} from '../actions/actionPokemon'
import {API_FETCH_POKEMON_DETAIL_IMG} from '../constants/urlApi'
import Loading from '../components/loading'
import { Link } from 'react-router-dom'
const evolutionPoke = ({api_evolution_poke, namePoke, fetchApiDetailPoke, detailPokemons}) => {

  useEffect(() => {
    const api= api_evolution_poke;
    fetchApiDetailPoke(api,namePoke)
  }, [namePoke])

  return (
    <>
      {
        detailPokemons[namePoke] && detailPokemons[namePoke].pokemons?
        <Link to={`/pokemon/${detailPokemons[namePoke].pokemons.id}/${detailPokemons[namePoke].pokemons.name}`}>
        <img src={`${API_FETCH_POKEMON_DETAIL_IMG}/versions/generation-v/black-white/animated/${detailPokemons[namePoke].pokemons.id}.gif`} />
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
