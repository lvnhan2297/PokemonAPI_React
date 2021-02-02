import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {fetchApiMenuPoke} from '../actions/actionMenu'
import { Link } from 'react-router-dom';

const listMenuItem = ({nameMenu,apiListMenu,fetchApiMenuPoke,collectionPokeMenu}) => {

  useEffect(() => {
    fetchApiMenuPoke(apiListMenu,nameMenu)
  }, [])

  const changeBgStyle = (e,color) => {
    e.target.style.color= color
  }

  return (
    <>
    {collectionPokeMenu[nameMenu] && collectionPokeMenu[nameMenu].listItems.map((item,index) =>
      <li className="nav__dropdown__item" key={index}>
        <Link to={`/${item.url.split('/')[item.url.split('/').length-3]}/${item.url.split('/')[item.url.split('/').length-2]}`} 
        onMouseOver={e => changeBgStyle(e,item.name)}
        onMouseOut={e => changeBgStyle(e,'#ffff')}
        >{item.name}</Link>
      </li>
    )}
    </>
  )
}
const mapStateToProps = state => {
  return { 
    collectionPokeMenu: state.collectionPokeMenu,
  }
}
export default connect(mapStateToProps,{fetchApiMenuPoke})(listMenuItem)
