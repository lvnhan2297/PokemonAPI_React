import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {fetchApiByColor} from '../actions/actionPokemons'
import Loading from '../components/loading'
import PropTypes from 'prop-types';
import {API_POKEMONS} from '../constants/urlApi'
import PokemonItem from '../components/pokemonItem'
import LazyLoad from 'react-lazyload';

const propTypes = {
  collectionPokes: PropTypes.object.isRequired,
  fetchApiByColor: PropTypes.func.isRequired
};

const PokemonsContainer = ({fetchApiByColor, collectionPokes}) => {
  
  const linkUrl = window.location.href
  const idPokemonMenu = linkUrl.split('/')[linkUrl.split('/').length-1]
  const nameType = linkUrl.split('/')[linkUrl.split('/').length-2]
  const api= `${API_POKEMONS}/${nameType}/${idPokemonMenu}`;
  const getDataBy = `${nameType}-${idPokemonMenu}`

  useEffect(() => {
    !Object.keys(collectionPokes).includes(getDataBy) &&
    fetchApiByColor(api,getDataBy)
  }, [fetchApiByColor,collectionPokes,getDataBy])
    
  return (
    <>
      <LazyLoad height={200} one placeholder={<Loading oading={true}/>}>
      <div className="row">
        {collectionPokes[getDataBy] && collectionPokes[getDataBy].pokemons.map((item,index)=>
          <PokemonItem key={index} {...item}/>
        )}
      </div>
      </LazyLoad>
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

export default connect(mapStateToProps,{fetchApiByColor})(PokemonsContainer)
