import React from 'react'
import './ButtonBases.css'
import { HiDocumentText } from "react-icons/hi";

const ButtonBases = ({ url }) => {
  return (
    <div className="btn-wrapper"> 
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-bases"
      >
        <span className="icon">
          <HiDocumentText />
        </span>

        CONOCE NUESTRAS BASES GENERALES
      </a>
    </div>
  )
}

export default ButtonBases