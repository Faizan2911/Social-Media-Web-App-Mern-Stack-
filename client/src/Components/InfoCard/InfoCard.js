import React from 'react';
import './InfoCard.css';
import EditIcon from '@mui/icons-material/Edit';

const InfoCard = () => {
  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <EditIcon width='2rem' height='1.2rem' />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Pune</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Microsoft</span>
      </div>

      <button className='button logout-button'>Log Out</button>
    </div>
  )
}

export default InfoCard
