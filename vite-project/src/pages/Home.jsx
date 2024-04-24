import React from 'react'
import Pasteles from '../assets/descarga.jpg';

const Home = ()=>{
    return(
        <div className='container mt-8 pt-12'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>
                        Bienvenido a Happy Cake
                    </h2>
                    <p>El lugar de los pasteles felices</p>
                   <img src = {Pasteles} alt = "Pasteles" className = "img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Home