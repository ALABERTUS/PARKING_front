import React from "react";
import Navbar from "../Components/Navbar";

import "./MyRequests.css";

const MyRequests = () => {
  return (
    <>
      <div>
        <Navbar onlyShowLogo={true} />
      </div>
      <div className="my-requests-page">
        <div className="my-requests-container">
            <div> 
              <button>
                <strong>edusanchez@gmail.com</strong>
                <p> <strong>12/10/2023</strong> </p>
              </button>
            </div>

            <div>
                <h3> Asignar plaza </h3>
                <button className="font-900 color-gray">Nº sótano</button>
                <button className="mt-20 font-900 color-gray">Nº plaza</button>
            </div>
        </div>
      </div>
    
      <div className="my-requests-second-page mt-50 ">
        <div className="my-requests-second-container"> 
          <button> Crear reserva </button>
        </div>
      </div>
        
    </>
  );
};

export default MyRequests;
