import React from 'react'
import { NavLink } from 'react-router-dom'

const Herosection = ({titleName,heroImagee}) => {
    const storeName=titleName;
    const storeImage=heroImagee;

    return (
        <>
            <section className='herosection sec-pad'>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className='herosection-title'>
                                <p className='p_name_color'>Welcome To</p>
                                <h1>{storeName}</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, soluta.</p>
                                <NavLink to={'/products'}>SHOP NOW</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6"> <div className='herosection-img'><img className='w-100' src={storeImage} alt="sdf" /></div></div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Herosection