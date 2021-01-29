import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {fetchApiByColor} from '../actions/actionPokemons'
import Loading from '../components/loading'
import PropTypes from 'prop-types';
import {API_FETCH_POKEMONS} from '../constants/urlApi'
import PokemonItem from '../components/pokemonItem'
import { useParams } from 'react-router-dom';

const propTypes = {
  collectionPokes: PropTypes.object.isRequired,
  fetchApiByColor: PropTypes.func.isRequired
};

const PokemonsContainer = ({fetchApiByColor, collectionPokes}) => {
  
  const prams = useParams()
  const getDataBy = `${prams.queryPoke}-${prams.id}`
  const api= `${API_FETCH_POKEMONS}-color/${prams.id}`;
  
  useEffect(() => {
    !Object.keys(collectionPokes).includes(getDataBy) &&
    fetchApiByColor(api,getDataBy)
  }, [fetchApiByColor,collectionPokes,getDataBy])

  return (
    <>
      <div className="row">
        {collectionPokes[getDataBy] && collectionPokes[getDataBy].pokemons.map((item,index)=>
          <PokemonItem key={index} {...item}/>
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

export default connect(mapStateToProps,{fetchApiByColor})(PokemonsContainer)
