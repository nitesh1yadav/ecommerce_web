import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <section className='sec-pad error'>
      <div className="container ">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1>404</h1>
            <p>OH! YOU'R LOST</p>
            <p>The Page You Are Looking For Dos'nt Exit</p>
            <NavLink to={"/home"}>Go To Home</NavLink>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Error