import { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";


const Sidebar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <a href="/">Tnc<b>Colors</b></a>
                </div>
                <div className="description">
                    The biggest collection of official brand color codes aorund.Curates by TNCcolors and friends(also its me :S)
            </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a onClick={toggleModal}>About TncColors</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <Modal
                className="about-modal"
                overlayClassName="about-modal-overlay"
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}

            >


                <button className="modal-close-btn" onClick={toggleModal}><GrClose /></button>
                <h3>About TncColors</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quae assumenda dolores.</p>
                <p>Lorem ipsum dolor.</p>
            </Modal>
        </>
    )
}

export default Sidebar
