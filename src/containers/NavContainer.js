import React from 'react'

const NavContainer = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__inner container">
          <div className="nav__section"><a className="nav__logo__text" href="/">Pokemon</a></div>
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
