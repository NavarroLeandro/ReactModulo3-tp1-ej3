import React from 'react';

const Saludo = ({saludoNuevo}) => {
    return (
        <section className='text-center mt-3'>
                <h1 className='text-light'>{saludoNuevo}</h1>
        </section>
    );
};

export default Saludo;