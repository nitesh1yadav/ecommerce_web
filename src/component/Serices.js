import React from 'react'
import { FaMoneyBillAlt, FaTruck } from 'react-icons/fa'
import { IoShieldCheckmark } from 'react-icons/io5'
import { RiSecurePaymentLine } from "react-icons/ri";


const Serices = () => {
    return (
        <>
            <section className='sec-pad services'>
                <div className="container">
                <div className="row mb-4">
                <div className="col-lg-12 text-center">
                <h1>
                    Our Services

                </h1>
                </div>
                </div>
                    <div className="row align-items-center justify-content-around">
                        <div className="col-lg-3 services_col align-items-center">
                            <div className="services_1item">
                                <div className="services_1item-icon ">
                                    <FaTruck />
                                </div>
                                <div className="services_1item-title">
                                    <p>Super Fast Delivery</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 services_col  align-items-center">
                            <div className="services_1item">
                                <div className="services_1item-icon ">
                                    <IoShieldCheckmark />

                                </div>
                                <div className="services_1item-title">
                                    <p>Super Fast Delivery</p>

                                </div>
                            </div>
                            <div className="services_1item">
                                <div className="services_1item-icon ">
                                    <FaMoneyBillAlt />

                                </div>
                                <div className="services_1item-title">
                                    <p>Super Fast Delivery</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 services_col align-items-center">
                            <div className="services_1item">
                                <div className="services_1item-icon ">
                                <RiSecurePaymentLine />
                                </div>
                                <div className="services_1item-title">
                                    <p>Super Secure Payments System</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Serices