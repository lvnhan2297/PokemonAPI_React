import React from 'react'
import { Link } from 'react-router-dom';
import {API_FETCH_POKEMON_DETAIL_IMG} from '../constants/urlApi'

const getIdByUrl = (url) => url.split('/')[url.split('/').length-2];
const imgPokemon = (getIdByUrl) => `${API_FETCH_POKEMON_DETAIL_IMG}/versions/generation-v/black-white/animated/${getIdByUrl}.gif`
const imgPokemonSp = (getIdByUrl) => `${API_FETCH_POKEMON_DETAIL_IMG}/${getIdByUrl}.png`
const bgImgPokemon = (getIdByUrl) => `${API_FETCH_POKEMON_DETAIL_IMG}/other/dream-world/${getIdByUrl}.svg`
const bgImgPokemonSp = (getIdByUrl) => `${API_FETCH_POKEMON_DETAIL_IMG}/other/official-artwork/${getIdByUrl}.png`

const pokemonItem= ({name,url}) => {

  return (
    <>
      <div className="poke-card">
        <div className="poke-card__inner">
          <div className="poke-card__artwork" 
          style={{backgroundImage: `url(${bgImgPokemonSp(getIdByUrl(url))})`}}
            onMouseOver={e => e.target.style.backgroundImage= `url(${bgImgPokemon(getIdByUrl(url))})`}
            onMouseOut={e => e.target.style.backgroundImage= `url(${bgImgPokemonSp(getIdByUrl(url))})`}
          >
          </div>
          <div className="poke-card__body row">
            <div className="poke-card__avatar" style={{backgroundImage: `url(${
              imgPokemon(getIdByUrl(url))||imgPokemonSp(getIdByUrl(url))
              })`}} />
            <div className="poke-card__details">
              <Link className="poke-card__title" to={{pathname: '/pokemon/'+getIdByUrl(url)+'/'+ name}} title={name}>{name}</Link>
              <a className="poke-card__username" href="#" title="Pokemon API">Pokemon API</a></div>
          </div>
        </div>
        <div className="poke-card__mobile-event" role="button" />
      </div>
    </>
  )
}

export default  pokemonItem