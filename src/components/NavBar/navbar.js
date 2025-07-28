// components/NavBar.jsx
import React from 'react';
import logoTienda from '../../assets/logoDeTienda.png'
const NavBar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>
                <img src={logoTienda} alt="Logo GamerSell" style={styles.logoImg} />
                <span style={styles.logoText}>GamerSell</span>
            </div>
            <ul style={styles.links}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div style={styles.cart}>
                🛒 <span>0</span>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#0a0a0a',
        color: '#00ffff',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    logoImg: {
        height: '60px',
        width: '60px',
    },
    logoText: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    links: {
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
    },
    cart: {
        fontSize: '1.2rem',
        cursor: 'pointer',
    }
};

export default NavBar;