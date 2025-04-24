import React, { useState } from "react";
import './LoginModal.scss';

function LoginModal({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation simple
        if (!username || !password) {
            setError("Veuillez remplir tous les champs.");
            return;
        }

        setError('');
        console.log("Connexion avec :", { username, password });

        // Fermer la modal si tout va bien :
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom d'utilisateur :
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Mot de passe :
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
