import React from 'react'
import {useProductContext} from '../Context/ProductContext'
import Product from './Product';

const FeatureProducts = () => {
    const { isloading,featureProducts } = useProductContext();
    console.log(featureProducts)
    if (isloading) {
        return (
            <>
                ...loading
            </>
        )
    }
    return (
        <>
            <section className='sec-pad featured-products'>
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-lg-12 text-center">
                            <p className='p_name_color'>Check Now</p>
                            <h1>Our Feature service</h1>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-evenly">                      
                           {                            
                            featureProducts.map((curElem)=>{
                                return <Product key={curElem.id} {...curElem}/>
                            })
                           }
                    </div>
                </div>
            </section>
        </>

    )
}

export default FeatureProducts