import React from "react";
import '../Collection/Collection.scss';
import { Link } from "react-router-dom";

function CollectionPage () {
    return (
        <div className="collectionPage">
           <div className="sideBar">
            <p className="text">Rechercher cartes</p>
            <Link to={`/`} className="text">Retour à la page d'acceuil</Link>
           </div>
           <div className="collectionDisplay"></div>
        </div>
    )

}

export default CollectionPage