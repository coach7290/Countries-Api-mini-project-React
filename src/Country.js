import React from "react";
import "./App.css";

const Country = ({ name, population, region, capital, flag, showInfo, languages, lightMode})=>{

    
    return (
        <div onClick={()=> showInfo(name)}   className="country-item" style={{backgroundColor: lightMode? "hsl(0, 0%, 100%)": "hsl(209, 23%, 22%)"}}>
           
           <div className="img">
               <img src={flag}/>
               </div>
               <div className="info-item"> 
               <p>{name}</p>
            <p>population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
            </div>
           
            

        </div>
    )
}

export default Country