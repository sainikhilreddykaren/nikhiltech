import React from 'react'
import web from '../src/image2.png'
import {NavLink} from 'react-router-dom';

function About() {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Digital design is like painting, <strong className="brand-name">except the paint never dries</strong>.</h1>
                                    <h2 className="my-3">We don’t just build websites, we build websites that SELLS</h2>
                                    <h6 className="my-1">Websites promote you 24/7: No employee will do that.</h6>
                                    <div className="mt-3">
                                        <NavLink to="/contact" className="btn-get-started">Contact now</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img className="img-fluid animated" src={web} atl="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
