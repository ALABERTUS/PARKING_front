import React from "react";
import Navbar from "../Components/Navbar";

import "./Requests.css";

const Requests = () => {
  const requests = [
    { email: "edusanchez@gmail.com", date: "12/10/2023" },
    { email: "edusanchez@gmail.com", date: "12/10/2023" },
    { email: "edusanchez@gmail.com", date: "12/10/2023" },
    { email: "edusanchez@gmail.com", date: "12/10/2023" },
    { email: "edusanchez@gmail.com", date: "12/10/2023" },
    { email: "edusanchez@gmail.com", date: "12/10/2023" },
    { email: "edusanchez@gmail.com", date: "12/10/2023" },
    { email: "edusanchez@gmail.com", date: "12/10/2023" },
    { email: "edusanchez@gmail.com", date: "12/10/2023" }
  ];

  return (
    <>
      <div>
        <Navbar onlyShowLogo={true} />
      </div>
      <div className="requests-page">
        <div className="requests-container">
          <h4> Solicitudes 12/10/2023 </h4>
          {requests.map((request, index) => (
            <p key={index}>
              <button>
                <strong>{request.email}</strong>
                <p>
                  <strong>{request.date}</strong>
                </p>
              </button>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Requests;
