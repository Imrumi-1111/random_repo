import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './logout.module.css'

export default function Logout({ onLogout }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  function handleLogout(){
    setShowConfirmation(false);
    onLogout();
    navigate('/login')
  };

  function handleLogoutConfirmation(){
    setShowConfirmation(true);
  };

  return (
    <div>
      <div>
       
      </div>
      {showConfirmation ? (
        <div className="logout-confirmation">
          <div onClick={handleLogout}><p>logout ayushw@gmail.com</p></div>
          <div><p>Add another existing account</p></div>
          <button >Logout</button>
          
        </div>
      ) : (
        <button onClick={handleLogoutConfirmation}>Logout</button>
      )}
    </div>
  );
};

