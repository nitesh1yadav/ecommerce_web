import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (curElem) => {
    const { id, name, image, price, category } = curElem;
    
    return <>
        <div className="col-lg-3">

    <NavLink to={`/singleproduct/:${id}`}>
                <div className="card" >
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                        <div className="card-body d-flex justify-content-between">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{price}</p>
                        </div>
                </div>
            </NavLink>
        </div>
            </>
    
}

export default Product