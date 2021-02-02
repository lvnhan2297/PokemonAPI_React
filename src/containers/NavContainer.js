import React from 'react'
import { Link } from 'react-router-dom';
import LogoPoke from '../assets/images/LogoPoke.png';
import ListMenuItem from '../components/listMenuItem';
import { FcSearch } from "react-icons/fc";
import {
  API_COLOR_POKE,
  API_EGG_POKE,
  API_HABITAT_POKE,
  API_TYPE_POKE} from '../constants/urlApi'

const NavContainer = () => {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav__inner container">
          <div className="nav__section">
            <Link className="nav__logo__text" to="/"><img src={LogoPoke} alt="" className='logo'/></Link>
          </div>
          <div className="nav__section">
            <ul className="nav__menu">
              <li className="nav__menu__item">
                <span className="nav__menu__item__title">color</span>
                <ul className="nav__menu__item__dropdown">
                  <ListMenuItem apiListMenu={API_COLOR_POKE} nameMenu={'color'}/>
                </ul>
              </li>
              <li className="nav__menu__item">
                <span className="nav__menu__item__title">egg groups</span>
                <ul className="nav__menu__item__dropdown">
                  <ListMenuItem apiListMenu={API_EGG_POKE} nameMenu={'egg'}/>
                </ul>
              </li>
              <li className="nav__menu__item" >
                <span className="nav__menu__item__title">habitat</span>
                <ul className="nav__menu__item__dropdown">
                  <ListMenuItem apiListMenu={API_HABITAT_POKE} nameMenu={'habitat'}/>
                </ul>
              </li>
            </ul>
          </div>
          <div className="nav__section">
            <div className="nav-search">
              <button className="nav-search__icon"><FcSearch 
                style={{fontSize: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 auto'
                  }}
                /></button>
              <input className="nav-search__input" type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavContainer
