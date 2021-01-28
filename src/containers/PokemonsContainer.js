import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {fetchApiPoke} from '../actions/actionPokemons'
import Loading from '../components/loading'
import PropTypes from 'prop-types';
import {API_FETCH_POKEMONS, API_FETCH_POKEMON_DETAIL_IMG} from '../constants/urlApi'
import { Link } from 'react-router-dom';

const propTypes = {
  collectionPokes: PropTypes.object.isRequired,
  fetchApiPoke: PropTypes.func.isRequired
};

const PokemonsContainer = ({fetchApiPoke, collectionPokes}) => {

  const getIdByUrl = (url) => url.split('/')[url.split('/').length-2];
  const imgPokemon = (getIdByUrl) => `${API_FETCH_POKEMON_DETAIL_IMG}/versions/generation-v/black-white/animated/${getIdByUrl}.gif`
  const bgImgPokemon = (getIdByUrl) => `${API_FETCH_POKEMON_DETAIL_IMG}/other/dream-world/${getIdByUrl}.svg`
  
  const getDataBy = 'all'
  const api= `${API_FETCH_POKEMONS}?limit=24`;
  
  useEffect(() => {
    !Object.keys(collectionPokes).includes(getDataBy) &&
    fetchApiPoke(api,getDataBy)
  }, [])
  
  useEffect(() => {
    const handleScroll = () => {
      if (
        collectionPokes[getDataBy] &&  window.innerHeight + window.scrollY ==
        document.body.offsetHeight + 100
      ) {
        setTimeout(
          () => fetchApiPoke(collectionPokes[getDataBy].nextUrl,getDataBy)
        );
      }
    };
      window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchApiPoke,collectionPokes,getDataBy]);

  return (
    <>
      <div className="row">
        {collectionPokes[getDataBy] && collectionPokes[getDataBy].pokemons.map((item,index)=>
        <div className="poke-card" key={index}>
          <div className="poke-card__inner">
            <div className="poke-card__artwork" style={{backgroundImage: `url(${bgImgPokemon(getIdByUrl(item.url))})`}}>
              <div className="artwork-play" role="button"><i className="artwork-play__icon fas fa-play" /></div>
            </div>
            <div className="poke-card__body row">
              <div className="poke-card__avatar" style={{backgroundImage: `url(${imgPokemon(getIdByUrl(item.url))})`}} />
              <div className="poke-card__details">
                <Link className="poke-card__title" to={{pathname: '/pokemon/'+getIdByUrl(item.url)+'/'+ item.name}} title="Ed Sheeran - Lego House">{item.name}</Link>
                <a className="poke-card__username" href="#" title="Warner Music Brasil">Warner Music Brasil</a></div>
            </div>
          </div>
          <div className="poke-card__mobile-event" role="button" />
        </div>
        )}
      </div>
      { collectionPokes[getDataBy] && <Loading loading={collectionPokes[getDataBy].loading}/>}
    </>
  )
}
const mapStateToProps = state => {
  return { 
    collectionPokes: state.collectionPokes,
  }
}

PokemonsContainer.propTypes = propTypes;

export default connect(mapStateToProps,{fetchApiPoke})(PokemonsContainer)
