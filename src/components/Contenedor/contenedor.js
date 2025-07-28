// components/Contenedor.jsx
import React from 'react';
import Boton from '../Boton/boton';

const Contenedor = ({ mensaje, nombre, genero, precio }) => {
    return (
        <main style={styles.main}>
            <h2>{mensaje}</h2>
            <p>Pronto verás nuestro catálogo de productos aquí.</p>
            <div style={styles.card}>
                <h3>🎮 {nombre}</h3>
                <p><strong>Género:</strong> {genero}</p>
                <p><strong>Precio:</strong> ${precio}</p>

                <Boton nombre={nombre} precio={precio} />
            </div>
        </main>
    );
}

const styles = {
    main: {
        padding: '2rem',
        textAlign: 'center',
    },
    card: {
        marginTop: '2rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        display: 'inline-block',
        backgroundColor: '#f9f9f9',
    }
};

export default Contenedor;