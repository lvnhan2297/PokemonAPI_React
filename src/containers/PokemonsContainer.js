import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {fetchApiPoke} from '../actions/actionPokemons'
import Loading from '../components/loading'
import PropTypes from 'prop-types';
import {API_FETCH_POKEMONS} from '../constants/urlApi'
import PokemonItem from '../components/pokemonItem'

const propTypes = {
  collectionPokes: PropTypes.object.isRequired,
  fetchApiPoke: PropTypes.func.isRequired
};

const PokemonsContainer = ({fetchApiPoke, collectionPokes}) => {
  
  const getDataBy = 'all'
  const api= `${API_FETCH_POKEMONS}?limit=24`;
  
  useEffect(() => {
    !Object.keys(collectionPokes).includes(getDataBy) &&
    fetchApiPoke(api,getDataBy)
  }, [])
  
  useEffect(() => {
    let elHeight = document.getElementById('nav').clientHeight;
    const handleScroll = () => {
      if (
        collectionPokes[getDataBy] &&  Math.ceil(window.innerHeight + window.scrollY) ==
        document.body.offsetHeight + (elHeight<=80?100:150)
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
          <PokemonItem key={index} {...item} />
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
