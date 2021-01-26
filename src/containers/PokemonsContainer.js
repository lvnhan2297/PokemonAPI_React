import axios from 'axios';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {fetchApiPoke} from '../actions/actionPokemon'
import Loading from '../components/loading'

const PokemonsContainer = ({fetchApiPoke, listPokemons, loading}) => {
  const getIdByUrl = (url) => url.split('/')[url.split('/').length-2];
  const imgPokemon = (getIdByUrl) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${getIdByUrl}.gif`
  const bgImgPokemon = (getIdByUrl) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getIdByUrl}.svg`
  
  useEffect(() => {
    const api= "https://pokeapi.co/api/v2/pokemon?limit=24";
    fetchApiPoke(api)
  }, [fetchApiPoke])
  
  return (
    <div>
      <div className="container">
        <div id="songs" className="songs">
          <div className="row">
            {listPokemons.map((item,index)=>
            <div className="song-card" key={index}>
              <div className="song-card__inner">
                <div className="song-card__artwork" style={{backgroundImage: `url(${bgImgPokemon(getIdByUrl(item.url))})`}}>
                  <div className="artwork-play" role="button"><i className="artwork-play__icon fas fa-play" /></div>
                </div>
                <div className="song-card__body row">
                  <div className="song-card__avatar" style={{backgroundImage: `url(${imgPokemon(getIdByUrl(item.url))})`}} />
                  <div className="song-card__details">
                    <a className="song-card__title" href="#" title="Ed Sheeran - Lego House">{item.name}</a>
                    <a className="song-card__username" href="#" title="Warner Music Brasil">Warner Music Brasil</a></div>
                </div>
              </div>
              <div className="song-card__mobile-event" role="button" />
            </div>
            )}
          </div>
        </div>
      </div>
      <Loading loading={loading}/>
    </div>
  )
}
const mapStateToProps = state => {
  return { 
    listPokemons: state.collectionPoke.pokemons,
    loading: state.collectionPoke.loading,
  }
}
export default connect(mapStateToProps,{fetchApiPoke})(PokemonsContainer)
