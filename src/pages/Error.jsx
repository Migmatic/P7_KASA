import React from 'react';
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div class="error">
                <p class="error__404">404</p>
                <span class="error__message">Oups! La page que vous demandez n'existe pas</span>
                <Link class="error__link" to="/">Retournez à la page d'accueil</Link>
        </div>
    );
}

export default Error;
