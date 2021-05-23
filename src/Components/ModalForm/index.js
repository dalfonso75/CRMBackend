import React from 'react'
import './styles.css';
import { AiFillCloseCircle } from "react-icons/ai";


export const ModalForm = ({children, onClose}) => {
    return (
        <div className="modalform">
            <div className="modalform-contenido">
                <button className="modalform-close" onClick={onClose}>
                    <AiFillCloseCircle/>
                </button>
                {children}
            </div>
        </div>
    )
}

