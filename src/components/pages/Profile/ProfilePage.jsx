import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import '../../../styles/ProfilePage.less';

function ProfilePage() {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
      <div className="profile-container">
        <div className="profile">
          <img className="profile-picture" src={picture} alt={name} />
          <div className="user-info">
            <div className="info-section">
              <h2>Name</h2>
              <p>{name}</p>
            </div>
            <div className="info-section">
              <h2>Email</h2>
              <p>{email}</p>
            </div> 
          </div>
        </div>
      </div>
  );
}

export default ProfilePage;