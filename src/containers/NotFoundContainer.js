import React from 'react'
import { Link } from 'react-router-dom';
import LogoPoke from '../assets/images/LogoPoke.png';
import Pika from '../assets/images/pika.png';

const NotFoundContainer = () => {
  return (
    <>
      <div className='content-404'>
        <img src={LogoPoke} alt=""/>
        <div className="text-404">
          <img src={Pika} alt=""/>4o4
        </div>
        <div className="text-404-alert">
          <span>Oops!</span> A wild Snorlax has blockrd your path!
        </div>
        <Link to="/" className="btn-goback">go back</Link>
      </div>
    </>
  )
}

export default NotFoundContainer
