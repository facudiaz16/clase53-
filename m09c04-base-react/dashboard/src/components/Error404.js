import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/error404.css'

function Error404() {
    return (
        <div className="not-found-container">
            <img src="../error404.png" alt="404 Error" className="Erro404" />
            <Link to="/" className="not-found-link">Volver al Home</Link>
        </div>
    );
}

export default Error404;
