import React from 'react'
import { Link } from 'react-router-dom';
import LogoPoke from '../assets/images/LogoPoke.png';
import ListColor from '../components/listColor'

const NavContainer = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__inner container">
          <div className="nav__section">
            <Link className="nav__logo__text" to="/"><img src={LogoPoke} alt="" className='logo'/></Link>
          </div>
          <div className="nav__section">
            <ul className="nav__menu">
              <li className="nav__menu__item">
                <span className="nav__menu__item__title">color</span>
                <ul className="nav__menu__item__dropdown">
                  <ListColor/>
                </ul>
              </li>
              <li className="nav__menu__item">
                <span className="nav__menu__item__title">egg groups</span>
              </li>
              <li className="nav__menu__item" >
                <span className="nav__menu__item__title">habitat</span>
              </li>
            </ul>
          </div>
          <div className="nav__section">
            <div className="nav-search">
              <i className="nav-search__icon fas fa-search" />
              <input className="nav-search__input" type="text" placeholder="Search" />
              <i className="fas fa-times-circle nav-search__clear" />
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavContainer
