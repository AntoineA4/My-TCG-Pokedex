import React, { useState } from "react";
import '../Home/Home.scss';
import LoginModal from "../../Components/LoginModal/LoginModal";

function Home () {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className="homePage">
            <h1>My TCG Pokedex</h1>
            <button onClick={openModal}>Start</button>

            {showModal && <LoginModal onClose={closeModal} />}
        </div>
    );
}

export default Home;