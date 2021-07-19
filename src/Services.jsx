import React from 'react'
import web from '../src/image3.jpg'
import Card from './Card.jsx';
import mydata from './mydata';

function Services() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Welcome To My Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                mydata.map((val,index)=>{
                                    return <Card src={val.src} title={val.title} desc={val.desc} link={val.link}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
