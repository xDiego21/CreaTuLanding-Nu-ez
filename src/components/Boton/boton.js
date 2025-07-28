import React from 'react';

const Boton = ({ nombre, precio, onAgregar }) => {
    const Click = () => {
        if (onAgregar) {
            onAgregar({ nombre, precio });
        } else {
            alert(`"${nombre}" agregado al carrito ($${precio})`);
        }
    };

    return (
        <button style={styles.boton} onClick={Click}>
            Agregar al carrito
        </button>
    );
};

const styles = {
    boton: {
        padding: '0.5rem 1rem',
        backgroundColor: '#00bcd4',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '1rem',
    }
};

export default Boton;
