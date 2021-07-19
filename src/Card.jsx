import React from 'react'

import {NavLink} from 'react-router-dom'

function Card(props) {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                    <img src={props.src} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.desc}</p>
                        <NavLink to={props.link} className="btn btn-primary" target="_blank">Visit Page</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
