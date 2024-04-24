import React from 'react'


const Contacto = ()=>{
    return(
        <div className='container mt-8 pt-9'>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>
                        Cuentanos, ¿en que te podemos ayudar?
                    </h3>
                    <input
                        type="text"
                        placeholder="Correo@ejemplo.com"
                        className="form-control"
                    />

                    <input
                        type="text"
                        placeholder="Cuentanos como quieres tu pastel"
                        className="form-control"
                    />
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Contacto