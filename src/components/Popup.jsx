import React from 'react';
import '../components/Popup.css'; // create CSS for your popup

const Popup = ({ isVisible, onClose, onSubmit, date, role }) => {
    return (
        isVisible && (
            <div className="popup-background">
                <div className="popup-content">
                    <h3>Reservation Details</h3>
                    <p>User: {role}</p>
                    <p>Date: {date}</p>
                    <button onClick={onSubmit}>Submit</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        )
    );
};

export default Popup;
