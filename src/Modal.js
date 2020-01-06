import React from "react"

const Modal = ({closeModal, name, population, region, capital, flag, languages, nativeName, subregion, topLevelDomain, currencies, borders}) => {
    return (
        <div className="modal">
            <span className="close-modal" onClick={closeModal}>x</span>
            <div className="modal-content">
               
            <div className="flag">
                <img src={flag}/>
            </div>
            
             <div className="description"> 
            <p>{name}</p>
            <p className="descr-item">NativeName:</p> <p style={{display: "inline-block"}}>{nativeName}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <p>Capital: {capital}</p>
            </div>  
           <div>
            <p>Top level domain: {topLevelDomain}</p>
            
            <ul>
                Languages:
            {
            languages && languages.map(lan=> {return  <li>{lan.name}</li>} )
            }
            </ul>
            <ul>
                Currencies:
            {
            currencies && currencies.map(cur=> {return <li>{cur.name}</li>} )
            }
            </ul>
            </div>
            <ul>
                Borders:
            {
            borders && borders.map(bord=> {return <li>{bord}</li>} )
            }
            </ul>
            </div>
            </div>
        
    )
}

export default Modal;